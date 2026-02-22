import { products as staticProducts, categories, Product as IProduct } from '@/data/products';
import dbConnect from '@/lib/mongodb';
import ProductModel from '@/models/Product';

export interface ExtendedProduct extends IProduct {
    _id?: string;
    price?: number;
    currency?: string;
    category?: string;
    subcategory?: string;
    isDbProduct?: boolean;
}

function mapDbToProduct(p: any): ExtendedProduct {
    const specsMap = p.specifications instanceof Map
        ? Object.fromEntries(p.specifications)
        : (p.specifications || {});

    const specsArray = Object.entries(specsMap).map(([label, value]) => ({
        label,
        value: String(value)
    }));

    // Ensure Model is in specs if it's missing but we have modelNumber
    if (p.modelNumber && !specsArray.find(s => s.label.toLowerCase() === 'model')) {
        specsArray.unshift({ label: 'Model', value: p.modelNumber });
    }

    return {
        id: p.slug || p._id.toString(),
        name: p.name,
        brand: p.brand || 'Unknown',
        model: p.modelNumber || '',
        availability: p.availability || 'In Stock',
        warranty: specsMap['Warranty'] || 'Standard Warranty',
        origin: specsMap['Origin'] || 'Imported',
        weight: specsMap['Weight'] || 'Varies',
        dimensions: specsMap['Dimensions'] || 'Varies',
        material: specsMap['Material'] || 'Industrial Grade',
        description: p.description || '',
        images: (p.images && p.images.length > 0) ? p.images : (p.thumbnail ? [p.thumbnail] : ['/images/placeholder.jpg']),
        specs: specsArray,
        features: p.overview ? p.overview.split('\n').map((s: string) => s.trim().replace(/^[•\-\*]\s*/, '')).filter(Boolean) : [],
        price: p.price,
        currency: p.currency || 'PKR',
        category: p.category,
        subcategory: p.subcategory,
        isDbProduct: true,
        _id: p._id.toString()
    };
}

export async function getProductsByCategory(categoryId: string): Promise<ExtendedProduct[]> {
    const { getCategoryById } = await import('./categoryService');
    const categoryDetail = await getCategoryById(categoryId);

    if (!categoryDetail) return [];

    // 1. Get static products if it's a static category
    const category = categories[categoryId];
    const staticList = category ? category.productIds.map(id => staticProducts[id]).filter(Boolean) : [];

    try {
        await dbConnect();

        // 2. Search by title (works for both static title and dynamic name)
        const dbProducts = await ProductModel.find({
            $or: [
                { category: categoryDetail.title },
                { subcategory: categoryDetail.title }
            ]
        }).lean();

        const formattedDbProducts = dbProducts.map(mapDbToProduct);

        // Deduplicate by ID
        const staticIds = new Set(staticList.map(p => p.id));
        const filteredDbProducts = formattedDbProducts.filter(p => !staticIds.has(p.id));

        return [...staticList, ...filteredDbProducts];
    } catch (error) {
        console.error('Error fetching DB products for category:', categoryId, error);
        return staticList;
    }
}

export async function getProductsByBrand(brandId: string): Promise<ExtendedProduct[]> {
    const { getBrandById } = await import('./brandService');
    const brand = await getBrandById(brandId);
    if (!brand) return [];

    const { brands: staticBrands } = await import('@/data/products');
    const staticBrand = (staticBrands as any)[brandId];
    const staticList = staticBrand ? staticBrand.productIds.map((id: string) => staticProducts[id]).filter(Boolean) : [];

    try {
        await dbConnect();

        // Search by brand name
        const dbProducts = await ProductModel.find({
            brand: brand.name
        }).lean();

        const formattedDbProducts = dbProducts.map(mapDbToProduct);

        // Deduplicate by ID
        const staticIds = new Set(staticList.map((p: any) => p.id));
        const filteredDbProducts = formattedDbProducts.filter(p => !staticIds.has(p.id));

        return [...staticList, ...filteredDbProducts];
    } catch (error) {
        console.error('Error fetching DB products for brand:', brandId, error);
        return staticList;
    }
}

export async function getProductBySlug(slugOrId: string): Promise<ExtendedProduct | null> {
    // 1. Try static products first
    if (staticProducts[slugOrId]) {
        return staticProducts[slugOrId];
    }

    // 2. Try database
    try {
        await dbConnect();

        // Try by slug first
        let p = await ProductModel.findOne({ slug: slugOrId }).lean();

        // If not found, try by ID if it looks like a Mongo ID
        if (!p && slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
            p = await ProductModel.findById(slugOrId).lean();
        }

        if (p) {
            return mapDbToProduct(p);
        }
    } catch (error) {
        console.error('Error fetching DB product by slug:', slugOrId, error);
    }

    return null;
}

export async function getAllProducts(): Promise<ExtendedProduct[]> {
    const staticList = Object.values(staticProducts);

    try {
        await dbConnect();
        const dbProducts = await ProductModel.find({}).lean();
        const formattedDbProducts = dbProducts.map(mapDbToProduct);

        const staticIds = new Set(staticList.map(p => p.id));
        const filteredDbProducts = formattedDbProducts.filter(p => !staticIds.has(p.id));

        return [...staticList, ...filteredDbProducts];
    } catch (error) {
        console.error('Error fetching all DB products:', error);
        return staticList;
    }
}
