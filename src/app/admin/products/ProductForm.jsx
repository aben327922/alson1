"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductForm({ initialData = null, type = 'create' }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        description: initialData?.description || '',
        overview: initialData?.overview || '',
        price: initialData?.price || 0,
        category: initialData?.category || '',
        subcategory: initialData?.subcategory || '',
        brand: initialData?.brand || '',
        modelNumber: initialData?.modelNumber || '',
        sku: initialData?.sku || '',
        stock: initialData?.stock || 0,
        availability: initialData?.availability || 'In Stock',
        thumbnail: initialData?.thumbnail || '',
        images: initialData?.images?.join(', ') || '',
        metaTitle: initialData?.metaTitle || '',
        metaDescription: initialData?.metaDescription || '',
    });

    const [searchTerm, setSearchTerm] = useState('');

    const [suggestions, setSuggestions] = useState({
        brands: [],
        categories: ['Hardware & Tools', 'Home Appliances'],
        subcategories: []
    });

    const [dbBrands, setDbBrands] = useState([]);
    const [dbSubcategories, setDbSubcategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch legacy suggestions
                const sugRes = await fetch('/api/admin/suggestions');
                const sugJson = await sugRes.json();

                // Fetch new structured brands
                const brandRes = await fetch('/api/admin/brands');
                const brandJson = await brandRes.json();

                // Fetch new structured subcategories
                const subRes = await fetch('/api/admin/subcategories');
                const subJson = await subRes.json();

                if (sugJson.success) {
                    setSuggestions(prev => ({ ...prev, ...sugJson.data }));
                }
                if (brandJson.success) {
                    setDbBrands(brandJson.data);
                }
                if (subJson.success) {
                    setDbSubcategories(subJson.data);
                }
            } catch (error) {
                console.error('Failed to fetch form data:', error);
            }
        }
        fetchData();

        // Click outside to close dropdowns
        const handleClickOutside = (e) => {
            if (!e.target.closest('.custom-dropdown')) {
                setShowDropdown({ brand: false, category: false, subcategory: false });
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [specs, setSpecs] = useState(
        initialData?.specifications
            ? Object.entries(initialData.specifications).map(([key, value]) => ({ key, value }))
            : [{ key: '', value: '' }]
    );

    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState({ thumbnail: false, images: false });
    const [showDropdown, setShowDropdown] = useState({ brand: false, category: false, subcategory: false });

    const handleFileUpload = async (e, field) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(prev => ({ ...prev, [field]: true }));

        try {
            const uploadedPaths = [];
            for (let i = 0; i < files.length; i++) {
                const formData = new FormData();
                formData.append('file', files[i]);

                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const json = await res.json();
                if (json.success) {
                    uploadedPaths.push(json.path);
                } else {
                    console.error('Upload failed:', json.error);
                }
            }

            if (field === 'thumbnail') {
                setFormData(prev => ({ ...prev, thumbnail: uploadedPaths[0] }));
            } else {
                const currentImages = formData.images ? formData.images.split(',').map(s => s.trim()).filter(Boolean) : [];
                setFormData(prev => ({
                    ...prev,
                    images: [...currentImages, ...uploadedPaths].join(', ')
                }));
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload images');
        } finally {
            setUploading(prev => ({ ...prev, [field]: false }));
        }
    };

    const removeImage = (index) => {
        const currentImages = formData.images.split(',').map(s => s.trim()).filter(Boolean);
        const newImages = currentImages.filter((_, i) => i !== index);
        setFormData({ ...formData, images: newImages.join(', ') });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSpecChange = (index, field, value) => {
        const newSpecs = [...specs];
        newSpecs[index][field] = value;
        setSpecs(newSpecs);
    };

    const addSpec = () => setSpecs([...specs, { key: '', value: '' }]);
    const removeSpec = (index) => setSpecs(specs.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formattedSpecs = specs.reduce((acc, curr) => {
            if (curr.key.trim()) acc[curr.key.trim()] = curr.value;
            return acc;
        }, {});

        const payload = {
            ...formData,
            images: formData.images.split(',').map(s => s.trim()).filter(Boolean),
            specifications: formattedSpecs,
            price: Number(formData.price),
            stock: Number(formData.stock),
        };

        const url = type === 'create' ? '/api/products' : `/api/products/${initialData._id}`;
        const method = type === 'create' ? 'POST' : 'PUT';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const json = await res.json();
            if (json.success) {
                router.push('/admin/products');
                router.refresh();
            } else {
                alert('Error: ' + json.error);
            }
        } catch (error) {
            alert('Network error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                        <input
                            type="text" name="name" value={formData.name} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description" value={formData.description} onChange={handleChange} rows="3"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Overview/Bullet Points</label>
                        <textarea
                            name="overview" value={formData.overview} onChange={handleChange} rows="3"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Highlight key features..."
                        ></textarea>
                    </div>
                </div>

                {/* Pricing & Stock */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Pricing & Inventory</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price (PKR)</label>
                            <input
                                type="number" name="price" value={formData.price} onChange={handleChange} required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                            <input
                                type="number" name="stock" value={formData.stock} onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Model Number</label>
                            <input
                                type="text" name="modelNumber" value={formData.modelNumber} onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                            <input
                                type="text" name="sku" value={formData.sku} onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                        <select
                            name="availability" value={formData.availability} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                            <option value="Pre-order">Pre-order</option>
                        </select>
                    </div>
                </div>

                {/* Classification */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Classification</h3>

                    {/* Category Selection */}
                    <div className="relative custom-dropdown">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Main Category</label>
                        <div
                            onClick={() => setShowDropdown(prev => ({ ...prev, category: !prev.category }))}
                            className="w-full px-4 py-2 border rounded-lg bg-white cursor-pointer flex justify-between items-center hover:border-blue-400"
                        >
                            <span>{formData.category || 'Select Category'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showDropdown.category ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {showDropdown.category && (
                            <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2">
                                <div className="p-1">
                                    {['Hardware & Tools', 'Home Appliances'].map(cat => (
                                        <div
                                            key={cat}
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, category: cat, subcategory: '' }));
                                                setShowDropdown(prev => ({ ...prev, category: false }));
                                            }}
                                            className={`px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded text-sm transition ${formData.category === cat ? 'bg-blue-100 text-blue-700 font-bold' : 'text-gray-700'}`}
                                        >
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Subcategory Selection */}
                    <div className="relative custom-dropdown">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
                        <div
                            onClick={() => formData.category && setShowDropdown(prev => ({ ...prev, subcategory: !prev.subcategory }))}
                            className={`w-full px-4 py-2 border rounded-lg bg-white cursor-pointer flex justify-between items-center ${!formData.category ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'hover:border-blue-400'}`}
                        >
                            <span>{formData.subcategory || 'Select Subcategory'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showDropdown.subcategory ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {showDropdown.subcategory && (
                            <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-xl max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                                <div className="p-1">
                                    <div
                                        onClick={() => {
                                            setFormData({ ...formData, subcategory: '' });
                                            setShowDropdown(prev => ({ ...prev, subcategory: false }));
                                        }}
                                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded text-sm text-gray-500 italic"
                                    >
                                        None / Clear
                                    </div>
                                    {dbSubcategories
                                        .filter(sub => sub.mainCategory === formData.category)
                                        .map(sub => (
                                            <div
                                                key={sub._id}
                                                onClick={() => {
                                                    setFormData({ ...formData, subcategory: sub.name });
                                                    setShowDropdown(prev => ({ ...prev, subcategory: false }));
                                                }}
                                                className={`px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded text-sm transition ${formData.subcategory === sub.name ? 'bg-blue-100 text-blue-700 font-bold' : 'text-gray-700'}`}
                                            >
                                                {sub.name}
                                            </div>
                                        ))
                                    }
                                    {dbSubcategories.filter(sub => sub.mainCategory === formData.category).length === 0 && (
                                        <div className="px-4 py-4 text-center text-xs text-gray-400">No subcategories found</div>
                                    )}
                                </div>
                            </div>
                        )}
                        {!formData.category && <p className="text-[10px] text-gray-400 mt-1">Select a main category first</p>}
                    </div>

                    {/* Brand Selection */}
                    <div className="relative custom-dropdown">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                        <div
                            onClick={() => {
                                setShowDropdown(prev => ({ ...prev, brand: !prev.brand }));
                                setSearchTerm('');
                            }}
                            className="w-full px-4 py-2 border rounded-lg bg-white cursor-pointer flex justify-between items-center hover:border-blue-400"
                        >
                            <span>{formData.brand || 'Select Brand'}</span>
                            <div className="flex items-center gap-2">
                                {formData.brand && (
                                    <span onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, brand: '' }); }} className="text-gray-400 hover:text-red-500">×</span>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showDropdown.brand ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {showDropdown.brand && (
                            <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 overflow-hidden flex flex-col max-h-80">
                                <div className="p-2 border-b bg-gray-50">
                                    <input
                                        type="text"
                                        placeholder="Search brands..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-3 py-1.5 text-xs border rounded outline-none focus:ring-1 focus:ring-blue-500"
                                        autoFocus
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                                <div className="flex-1 overflow-y-auto p-1 scrollbar-thin">
                                    <div
                                        onClick={() => {
                                            setFormData({ ...formData, brand: '' });
                                            setShowDropdown(prev => ({ ...prev, brand: false }));
                                        }}
                                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded text-sm text-gray-500 italic"
                                    >
                                        None / Clear
                                    </div>
                                    {/* Combined list for filtering */}
                                    {[
                                        ...dbBrands
                                            .filter(brand => !formData.category || brand.categoryType === formData.category)
                                            .map(b => ({ id: b._id, name: b.name, isLegacy: false })),
                                        ...suggestions.brands
                                            .filter(b => !dbBrands.some(dbB => dbB.name.toLowerCase() === b.toLowerCase()))
                                            .map(b => ({ id: `legacy-${b}`, name: b, isLegacy: true }))
                                    ]
                                        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    setFormData({ ...formData, brand: item.name });
                                                    setShowDropdown(prev => ({ ...prev, brand: false }));
                                                }}
                                                className={`px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded text-sm transition ${formData.brand === item.name ? 'bg-blue-100 text-blue-700 font-bold' : 'text-gray-700'}`}
                                            >
                                                {item.name} {item.isLegacy && <span className="text-[10px] opacity-70 ml-1">(Legacy)</span>}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Media */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Media</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
                        <div className="space-y-2">
                            {formData.thumbnail && (
                                <div className="relative w-32 h-32 border rounded-lg overflow-hidden group">
                                    <img
                                        src={formData.thumbnail}
                                        alt="Thumbnail Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, thumbnail: '' })}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'thumbnail')}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            {uploading.thumbnail && <p className="text-xs text-blue-500">Uploading...</p>}
                            <input
                                type="text"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                placeholder="Or enter manual URL"
                                className="w-full px-4 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
                        <div className="space-y-3">
                            {formData.images && (
                                <div className="grid grid-cols-3 gap-2">
                                    {formData.images.split(',').map((img, idx) => img.trim()).filter(Boolean).map((img, idx) => (
                                        <div key={idx} className="relative aspect-square border rounded-lg overflow-hidden group">
                                            <img
                                                src={img}
                                                alt={`Gallery ${idx}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(idx)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'images')}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            {uploading.images && <p className="text-xs text-blue-500">Uploading...</p>}
                            <textarea
                                name="images"
                                value={formData.images}
                                onChange={handleChange}
                                rows="2"
                                placeholder="Or enter manual URLs (comma separated)"
                                className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">Specifications</h3>
                    <button type="button" onClick={addSpec} className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                        + Add Attribute
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex space-x-2">
                            <input
                                type="text" placeholder="Key (e.g. Power)" value={spec.key}
                                onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                                className="flex-1 px-3 py-1 border rounded"
                            />
                            <input
                                type="text" placeholder="Value (e.g. 500W)" value={spec.value}
                                onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                                className="flex-1 px-3 py-1 border rounded"
                            />
                            <button
                                type="button" onClick={() => removeSpec(index)}
                                className="text-red-500 hover:text-red-700 font-bold px-2"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO */}
            <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">SEO (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                        <input
                            type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                        <input
                            type="text" name="metaDescription" value={formData.metaDescription} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <button
                    type="submit" disabled={loading}
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg disabled:opacity-50"
                >
                    {loading ? 'Processing...' : (type === 'create' ? 'Create Product' : 'Save Changes')}
                </button>
            </div>
        </form>
    );
}
