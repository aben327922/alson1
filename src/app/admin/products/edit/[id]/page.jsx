"use client";

import { useEffect, useState, use } from 'react';
import ProductForm from '../../ProductForm';

export default function EditProductPage({ params }) {
    const { id } = use(params);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const json = await res.json();
                if (json.success) {
                    setProduct(json.data);
                }
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center py-10">Loading product data...</div>;
    if (!product) return <div className="text-center py-10 text-red-500">Product not found.</div>;

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Edit Product</h2>
                <p className="text-gray-500">Update the information for {product.name}.</p>
            </div>

            <ProductForm initialData={product} type="edit" />
        </div>
    );
}
