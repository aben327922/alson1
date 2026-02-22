import { brands as staticBrands, Brand } from '@/data/products';
import dbConnect from '@/lib/mongodb';
import BrandModel from '@/models/Brand';
import HiddenItem from '@/models/HiddenItem';

export interface UnifiedBrand {
    id: string;
    name: string;
    description: string;
    image: string;
    division: 'hardware' | 'appliances';
    isDb?: boolean;
    spec?: string;
}

export async function getUnifiedBrands(division?: 'hardware' | 'appliances'): Promise<UnifiedBrand[]> {
    const staticList: UnifiedBrand[] = Object.values(staticBrands).map(b => ({
        id: b.id,
        name: b.name,
        description: b.description,
        image: b.image,
        division: b.division,
        isDb: false,
        spec: b.spec
    }));

    try {
        await dbConnect();

        const dbBrands = await BrandModel.find({}).lean();
        const dynamicList: UnifiedBrand[] = dbBrands.map((b: any) => ({
            id: b._id.toString(),
            name: b.name,
            description: b.description || `Official ${b.name} products.`,
            image: b.logo || '/images/placeholder.jpg',
            division: (b.categoryType === 'Hardware & Tools' || b.categoryType === 'Hardware') ? 'hardware' : 'appliances',
            isDb: true,
            spec: b.categoryType === 'Hardware & Tools' ? 'HARD_TOOLS' : 'HOME_APPLIANCES'
        }));

        const hiddenItems = await HiddenItem.find({ type: 'brand' }).lean();
        const hiddenIds = new Set(hiddenItems.map(h => h.itemId));

        // Create a map to deduplicate by name, prioritizing database brands
        const brandMap = new Map<string, UnifiedBrand>();

        // First add static brands
        staticList.forEach(brand => {
            brandMap.set(brand.name.toLowerCase(), brand);
        });

        // Then overwrite with database brands (so they take precedence)
        dynamicList.forEach(brand => {
            brandMap.set(brand.name.toLowerCase(), brand);
        });

        let unifiedList = Array.from(brandMap.values()).filter(b => !hiddenIds.has(b.id));

        if (division) {
            unifiedList = unifiedList.filter(b => b.division === division);
        }

        return unifiedList.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error('Error fetching unified brands:', error);
        return division ? staticList.filter(b => b.division === division) : staticList;
    }
}

export async function getBrandById(id: string): Promise<UnifiedBrand | null> {
    // 1. Check static brands first
    const staticBrand = (staticBrands as any)[id];
    if (staticBrand) {
        return {
            id: staticBrand.id,
            name: staticBrand.name,
            description: staticBrand.description,
            image: staticBrand.image,
            division: staticBrand.division,
            isDb: false,
            spec: staticBrand.spec
        };
    }

    // 2. Check Database
    try {
        await dbConnect();

        // Try by ID if it's a valid Mongo ID
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const dbBrand = await BrandModel.findById(id).lean();
            if (dbBrand) {
                return {
                    id: dbBrand._id.toString(),
                    name: dbBrand.name,
                    description: dbBrand.description || `Official ${dbBrand.name} products.`,
                    image: dbBrand.logo || '/images/placeholder.jpg',
                    division: (dbBrand.categoryType === 'Hardware & Tools' || dbBrand.categoryType === 'Hardware') ? 'hardware' : 'appliances',
                    isDb: true,
                    spec: dbBrand.categoryType === 'Hardware & Tools' ? 'HARD_TOOLS' : 'HOME_APPLIANCES'
                };
            }
        }

        // Try by name as a fallback (some IDs might be slugs)
        const dbBrandByName = await BrandModel.findOne({ name: new RegExp(`^${id}$`, 'i') }).lean();
        if (dbBrandByName) {
            return {
                id: dbBrandByName._id.toString(),
                name: dbBrandByName.name,
                description: dbBrandByName.description || `Official ${dbBrandByName.name} products.`,
                image: dbBrandByName.logo || '/images/placeholder.jpg',
                division: (dbBrandByName.categoryType === 'Hardware & Tools' || dbBrandByName.categoryType === 'Hardware') ? 'hardware' : 'appliances',
                isDb: true,
                spec: dbBrandByName.categoryType === 'Hardware & Tools' ? 'HARD_TOOLS' : 'HOME_APPLIANCES'
            };
        }
    } catch (error) {
        console.error('Error fetching brand by ID:', id, error);
    }

    return null;
}
