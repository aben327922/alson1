"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [productCount, setProductCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch('/api/products');
                const json = await res.json();
                if (json.success) {
                    setProductCount(json.data.length);
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Products</p>
                        <p className="text-4xl font-extrabold text-gray-900 mt-2">
                            {loading ? '...' : productCount}
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/admin/products"
                            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                        >
                            View All Products →
                        </Link>
                    </div>
                </div>

                {/* Action Card: Add Product */}
                <div className="bg-blue-600 p-6 rounded-xl shadow-md text-white">
                    <h3 className="text-xl font-bold mb-2">Manage Inventory</h3>
                    <p className="text-blue-100 mb-6 font-light">Add new hardware tools to your catalog.</p>
                    <Link
                        href="/admin/products/new"
                        className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-blue-50 transition-colors"
                    >
                        + Add New Product
                    </Link>
                </div>

                {/* Action Card: Store Front */}
                <div className="bg-emerald-600 p-6 rounded-xl shadow-md text-white">
                    <h3 className="text-xl font-bold mb-2">View Storefront</h3>
                    <p className="text-emerald-100 mb-6 font-light">Check how products look to customers.</p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-emerald-50 transition-colors"
                    >
                        Go to Shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
