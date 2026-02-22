"use client";

import { useState, useEffect } from 'react';

export default function BrandsPage() {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        logo: '',
        categoryType: 'Hardware & Tools'
    });

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const res = await fetch('/api/admin/brands');
            const json = await res.json();
            if (json.success) setBrands(json.data);
        } catch (error) {
            console.error('Error fetching brands:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const uploadData = new FormData();
        uploadData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData,
            });
            const json = await res.json();
            if (json.success) {
                setFormData({ ...formData, logo: json.path });
            } else {
                alert('Upload failed: ' + json.error);
            }
        } catch (error) {
            alert('Upload error occurred');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this brand?')) return;
        try {
            const res = await fetch(`/api/admin/brands?id=${id}`, { method: 'DELETE' });
            const json = await res.json();
            if (json.success) {
                setBrands(brands.filter(b => b._id !== id));
            } else {
                alert('Delete failed: ' + json.error);
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/admin/brands', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const json = await res.json();
            if (json.success) {
                setBrands([json.data, ...brands]);
                setShowForm(false);
                setFormData({ name: '', logo: '', categoryType: 'Hardware & Tools' });
            } else {
                alert('Error: ' + json.error);
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading brands...</div>;

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Brands Management</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    {showForm ? 'Cancel' : '+ Add Brand'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 animate-in fade-in slide-in-from-top-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Create New Brand</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Brand Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g. Ingco"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Category Type</label>
                            <select
                                value={formData.categoryType}
                                onChange={(e) => setFormData({ ...formData, categoryType: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Hardware & Tools">Hardware & Tools</option>
                                <option value="Home Appliances">Home Appliances</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Brand Logo</label>
                            <div className="flex items-center space-x-3">
                                {formData.logo && (
                                    <img src={formData.logo} alt="Preview" className="w-10 h-10 object-contain bg-gray-50 rounded border" />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                {uploading && <span className="text-xs text-blue-500">Uploading...</span>}
                            </div>
                        </div>
                        <div className="md:col-span-3 flex justify-end">
                            <button
                                type="submit"
                                className="bg-emerald-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md"
                            >
                                Save Brand
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Logo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {brands.map((brand) => (
                            <tr key={brand._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {brand.logo ? (
                                        <img src={brand.logo} alt={brand.name} className="w-10 h-10 object-contain" />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-[10px]">No Logo</div>
                                    )}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{brand.name}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        <span className={`px-2 py-0.5 text-[10px] w-fit rounded-full font-bold uppercase ${brand.categoryType === 'Hardware & Tools' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {brand.categoryType}
                                        </span>
                                        {brand.isStatic && (
                                            <span className="px-2 py-0.5 text-[10px] w-fit bg-gray-100 text-gray-500 rounded-full font-bold uppercase">System</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => handleDelete(brand._id)}
                                        className="text-red-400 hover:text-red-600 p-1 transition-colors"
                                        title="Delete Brand"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
