import dbConnect from '@/lib/mongodb';
import Subcategory from '@/models/Subcategory';
import HiddenItem from '@/models/HiddenItem';
import { NextResponse } from 'next/server';
import { categories as staticCategories } from '@/data/products';

export async function GET(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const mainCategory = searchParams.get('mainCategory');

        // 1. Get static categories formatted properly
        const formattedStatic = Object.values(staticCategories).map(cat => ({
            _id: cat.id,
            name: cat.title,
            description: cat.description,
            mainCategory: cat.division === 'hardware' ? 'Hardware & Tools' : 'Home Appliances',
            image: cat.image,
            isStatic: true
        }));

        // 2. Get DB subcategories
        const filter = {};
        if (mainCategory) {
            filter.mainCategory = mainCategory;
        }
        const dbSubcategories = await Subcategory.find(filter).lean();
        const formattedDb = dbSubcategories.map(sub => ({
            ...sub,
            _id: sub._id.toString(),
            isStatic: false
        }));

        const hiddenItems = await HiddenItem.find({ type: 'subcategory' }).lean();
        const hiddenIds = new Set(hiddenItems.map(h => h.itemId));

        // 3. Combine and filter
        let all = [...formattedStatic, ...formattedDb].filter(item => !hiddenIds.has(item._id));

        if (mainCategory) {
            all = all.filter(item => item.mainCategory === mainCategory);
        }

        all.sort((a, b) => a.name.localeCompare(b.name));

        return NextResponse.json({ success: true, data: all });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const subcategory = await Subcategory.create(body);
        return NextResponse.json({ success: true, data: subcategory }, { status: 201 });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({ success: false, error: 'Subcategory with this name already exists in this category' }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });

        // Try to delete from DB
        const deleted = await Subcategory.findByIdAndDelete(id);

        // If not in DB, mark as hidden if it's a static ID
        if (!deleted) {
            await HiddenItem.findOneAndUpdate(
                { itemId: id, type: 'subcategory' },
                { itemId: id, type: 'subcategory' },
                { upsert: true }
            );
        }

        return NextResponse.json({ success: true, message: 'Subcategory removed' });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
export async function PUT(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });

        // Check if it's a static item being edited for the first time
        const isStatic = Object.values(staticCategories).some(cat => cat.id === id);

        if (isStatic) {
            // If it's static, we create a new DB subcategory and hide the static one
            const newSubcategory = await Subcategory.create({
                ...updateData,
                // Ensure mainCategory is from the updated data
            });

            await HiddenItem.findOneAndUpdate(
                { itemId: id, type: 'subcategory' },
                { itemId: id, type: 'subcategory' },
                { upsert: true }
            );

            return NextResponse.json({ success: true, data: newSubcategory });
        }

        // If it's already a DB item, just update it
        const updated = await Subcategory.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!updated) {
            return NextResponse.json({ success: false, error: 'Subcategory not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
