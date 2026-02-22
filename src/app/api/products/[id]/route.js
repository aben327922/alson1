import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

// GET /api/products/[id] - Get a single product by ID or Slug
export async function GET(req, { params }) {
    try {
        await dbConnect();
        const { id } = await params;

        // 1. Try by ID first if it looks like a valid Mongo ID
        let product = null;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            product = await Product.findById(id);
        }

        // 2. Try by Slug if not found or not a valid ID format
        if (!product) {
            product = await Product.findOne({ slug: id });
        }

        if (!product) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: product }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

// PUT /api/products/[id] - Update a product
export async function PUT(req, { params }) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await req.json();

        const product = await Product.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: product }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(req, { params }) {
    try {
        await dbConnect();
        const { id } = await params;

        const deletedProduct = await Product.deleteOne({ _id: id });

        if (!deletedProduct.deletedCount) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
