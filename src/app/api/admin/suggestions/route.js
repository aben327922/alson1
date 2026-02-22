import { brands as staticBrandsList, categories as staticCategoriesList } from '@/data/products';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import Brand from '@/models/Brand';
import Subcategory from '@/models/Subcategory';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();

        // 1. Get database suggestions from Product models (legacy)
        const dbProducts = await Product.find({}, 'brand category subcategory').lean();
        const productBrands = dbProducts.map(p => p.brand).filter(Boolean);
        const productCategories = dbProducts.map(p => p.category).filter(Boolean);
        const productSubcategories = dbProducts.map(p => p.subcategory).filter(Boolean);

        // 2. Get data from new dedicated models
        const dedicatedBrands = await Brand.find({}, 'name').lean();
        const dedicatedSubcategories = await Subcategory.find({}, 'name').lean();

        const brandNames = dedicatedBrands.map(b => b.name);
        const subcategoryNames = dedicatedSubcategories.map(s => s.name);

        // 3. Get Hidden items
        const hiddenItemsArr = await HiddenItem.find({}).lean();
        const hiddenIds = new Set(hiddenItemsArr.map(h => h.itemId));

        // 4. Get static suggestions
        const staticBrandsArr = Object.values(staticBrandsList)
            .filter(b => !hiddenIds.has(b.id))
            .map(b => b.name);

        const staticCategoriesArr = Object.values(staticCategoriesList)
            .filter(c => !hiddenIds.has(c.id))
            .map(c => c.title);

        const staticSubcategoriesArr = Object.values(staticCategoriesList)
            .filter(c => c.hidden && !hiddenIds.has(c.id))
            .map(c => c.title);

        // 5. Merge and deduplicate (case-insensitive)
        const deduplicateCaseInsensitive = (arr, typePrefix) => {
            const map = new Map();
            arr.forEach(item => {
                if (item) {
                    const lower = item.toLowerCase();
                    // We also need to check if the name itself is hidden (though usually it's ID)
                    if (!map.has(lower)) map.set(lower, item);
                }
            });
            return Array.from(map.values()).sort();
        };

        const allBrands = deduplicateCaseInsensitive([...staticBrandsArr, ...brandNames, ...productBrands]);
        const allCategories = deduplicateCaseInsensitive([...staticCategoriesArr, ...productCategories, 'Hardware & Tools', 'Home Appliances']);
        const allSubcategories = deduplicateCaseInsensitive([...staticSubcategoriesArr, ...subcategoryNames, ...productSubcategories]);

        return NextResponse.json({
            success: true,
            data: {
                brands: allBrands,
                categories: allCategories,
                subcategories: allSubcategories
            }
        });
    } catch (error) {
        console.error('Suggestions API error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
