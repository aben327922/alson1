import { categories as staticCategories, Category } from '@/data/products';
import dbConnect from '@/lib/mongodb';
import Subcategory from '@/models/Subcategory';
import HiddenItem from '@/models/HiddenItem';

export interface UnifiedCategory {
    id: string;
    title: string;
    description: string;
    image: string;
    division: 'hardware' | 'appliances';
    isDb?: boolean;
}

export async function getUnifiedCategories(division: 'hardware' | 'appliances'): Promise<UnifiedCategory[]> {
    const staticList = Object.values(staticCategories)
        .filter(cat => cat.division === division && !cat.hidden)
        .map(cat => ({
            id: cat.id,
            title: cat.title,
            description: cat.description,
            image: cat.image,
            division: cat.division,
            isDb: false
        }));

    try {
        await dbConnect();

        const dbDivisionMap: Record<string, string> = {
            'hardware': 'Hardware & Tools',
            'appliances': 'Home Appliances'
        };

        const dbSubcategories = await Subcategory.find({
            mainCategory: dbDivisionMap[division]
        }).lean();

        const hiddenItems = await HiddenItem.find({ type: 'subcategory' }).lean();
        const hiddenIds = new Set(hiddenItems.map(h => h.itemId));

        const dynamicList = dbSubcategories.map((sub: any) => ({
            id: sub._id.toString(),
            title: sub.name,
            description: sub.description || `Professional ${sub.name} solutions for industrial and home use.`,
            image: sub.image || '/images/placeholder.jpg',
            division: division,
            isDb: true
        }));

        const unifiedList = [...staticList, ...dynamicList].filter(cat => !hiddenIds.has(cat.id));

        return unifiedList;
    } catch (error) {
        console.error('Error fetching dynamic subcategories:', error);
        return staticList;
    }
}

export async function getCategoryById(id: string): Promise<UnifiedCategory | null> {
    // 1. Check static categories
    if (staticCategories[id]) {
        const cat = staticCategories[id];
        return {
            id: cat.id,
            title: cat.title,
            description: cat.description,
            image: cat.image,
            division: cat.division,
            isDb: false
        };
    }

    // 2. Check database subcategories
    try {
        await dbConnect();
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const sub = await Subcategory.findById(id).lean();
            if (sub) {
                return {
                    id: sub._id.toString(),
                    title: sub.name,
                    description: sub.description || `Professional ${sub.name} solutions for industrial and home use.`,
                    image: sub.image || '/images/placeholder.jpg',
                    division: sub.mainCategory === 'Hardware & Tools' ? 'hardware' : 'appliances',
                    isDb: true
                };
            }
        }
    } catch (error) {
        console.error('Error fetching category by ID:', id, error);
    }

    return null;
}
