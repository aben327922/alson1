import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

// GET /api/products - Fetch all products
export async function GET() {
    try {
        await dbConnect();
        const products = await Product.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: products }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// POST /api/products - Create a new product
export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        // Simple slug generation if not provided (should ideally be more robust)
        if (!body.slug && body.name) {
            body.slug = body.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        const product = await Product.create(body);
        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({ success: false, error: 'Product with this slug or SKU already exists' }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
