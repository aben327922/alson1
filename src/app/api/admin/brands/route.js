import dbConnect from '@/lib/mongodb';
import Brand from '@/models/Brand';
import HiddenItem from '@/models/HiddenItem';
import { NextResponse } from 'next/server';
import { brands as staticBrands } from '@/data/products';

export async function GET() {
    try {
        await dbConnect();
        const dbBrands = await Brand.find({}).lean();

        // Map static brands to a similar format
        const formattedStatic = Object.values(staticBrands).map(b => ({
            _id: b.id,
            name: b.name,
            description: b.description,
            logo: b.image,
            categoryType: b.division === 'hardware' ? 'Hardware & Tools' : 'Home Appliances',
            isStatic: true
        }));

        const formattedDb = dbBrands.map(b => ({
            ...b,
            _id: b._id.toString(),
            isStatic: false
        }));

        const hiddenItems = await HiddenItem.find({ type: 'brand' }).lean();
        const hiddenIds = new Set(hiddenItems.map(h => h.itemId));

        // Create a map to deduplicate by name, prioritizing database brands
        const brandMap = new Map();

        // First add static brands
        formattedStatic.forEach(brand => {
            brandMap.set(brand.name.toLowerCase(), brand);
        });

        // Then overwrite with database brands (so they take precedence)
        formattedDb.forEach(brand => {
            brandMap.set(brand.name.toLowerCase(), brand);
        });

        // Filter hidden ones and sort
        const allBrands = Array.from(brandMap.values())
            .filter(b => !hiddenIds.has(b._id))
            .sort((a, b) => a.name.localeCompare(b.name));

        return NextResponse.json({ success: true, data: allBrands });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const brand = await Brand.create(body);
        return NextResponse.json({ success: true, data: brand }, { status: 201 });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({ success: false, error: 'Brand with this name already exists' }, { status: 400 });
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

        // Try to delete from DB first
        const deleted = await Brand.findByIdAndDelete(id);

        // If not found in DB, it might be a static ID - add to hidden
        if (!deleted) {
            await HiddenItem.findOneAndUpdate(
                { itemId: id, type: 'brand' },
                { itemId: id, type: 'brand' },
                { upsert: true }
            );
        }

        return NextResponse.json({ success: true, message: 'Brand removed' });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
