"use client";

import { useState, useEffect } from 'react';

export default function CategoriesPage() {
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState({ 'Hardware & Tools': false, 'Home Appliances': false });
    const [uploading, setUploading] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        fetchSubcategories();
    }, []);

    const fetchSubcategories = async () => {
        try {
            const res = await fetch('/api/admin/subcategories');
            const json = await res.json();
            if (json.success) setSubcategories(json.data);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
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
                setFormData({ ...formData, image: json.path });
            } else {
                alert('Upload failed: ' + json.error);
            }
        } catch (error) {
            alert('Upload error occurred');
        } finally {
            setUploading(false);
        }
    };

    const handleSaveSubcategory = async (mainCategory) => {
        if (!formData.name.trim()) return;

        try {
            const method = editingId ? 'PUT' : 'POST';
            const payload = editingId
                ? { ...formData, id: editingId, mainCategory }
                : { ...formData, mainCategory };

            const res = await fetch('/api/admin/subcategories', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            if (json.success) {
                if (editingId) {
                    // Update existing in list or replace if it was static conversion
                    setSubcategories(subcategories.map(s => s._id === editingId ? json.data : s));
                    // If it was static, we need to re-fetch to see it as a DB item and filtered correctly
                    if (subcategories.find(s => s._id === editingId)?.isStatic) {
                        fetchSubcategories();
                    }
                } else {
                    setSubcategories([...subcategories, json.data]);
                }

                resetForm(mainCategory);
            } else {
                alert('Error: ' + json.error);
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    const resetForm = (cat) => {
        setFormData({ name: '', description: '', image: '' });
        setEditingId(null);
        setShowForm({ ...showForm, [cat]: false });
    };

    const handleEdit = (sub) => {
        setEditingId(sub._id);
        setFormData({
            name: sub.name,
            description: sub.description || '',
            image: sub.image || ''
        });
        setShowForm({ ...showForm, [sub.mainCategory]: true });
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this subcategory?')) return;
        try {
            const res = await fetch(`/api/admin/subcategories?id=${id}`, { method: 'DELETE' });
            const json = await res.json();
            if (json.success) {
                setSubcategories(subcategories.filter(s => s._id !== id));
            } else {
                alert('Delete failed: ' + json.error);
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading categories...</div>;

    const mainCats = ['Hardware & Tools', 'Home Appliances'];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Categories Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mainCats.map(cat => (
                    <div key={cat} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">{cat}</h2>
                            <button
                                onClick={() => {
                                    if (showForm[cat] && editingId) {
                                        resetForm(cat);
                                    } else {
                                        setShowForm({ ...showForm, [cat]: !showForm[cat] });
                                        setFormData({ name: '', description: '', image: '' });
                                        setEditingId(null);
                                    }
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                            >
                                {showForm[cat] ? 'Cancel' : '+ Add Subcategory'}
                            </button>
                        </div>

                        {showForm[cat] && (
                            <div className="mb-6 bg-blue-50/50 p-4 rounded-lg space-y-4 animate-in fade-in zoom-in-95 border border-blue-100">
                                <h3 className="text-xs font-bold text-blue-700 uppercase">
                                    {editingId ? 'Edit Subcategory' : 'New Subcategory'}
                                </h3>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Subcategory Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Hand Tools"
                                        className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                        autoFocus
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Briefly describe this category..."
                                        className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="2"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Thumbnail</label>
                                    <div className="flex items-center space-x-3">
                                        {formData.image && (
                                            <img src={formData.image} alt="Preview" className="w-10 h-10 object-cover bg-white rounded border" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                            className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                        {uploading && <span className="text-xs text-blue-500 italic">Uploading...</span>}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleSaveSubcategory(cat)}
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition"
                                >
                                    {editingId ? 'Update Subcategory' : 'Save Subcategory'}
                                </button>
                            </div>
                        )}

                        <div className="space-y-2">
                            {subcategories.filter(sub => sub.mainCategory === cat).length === 0 ? (
                                <p className="text-sm text-gray-400 italic">No subcategories added yet.</p>
                            ) : (
                                subcategories
                                    .filter(sub => sub.mainCategory === cat)
                                    .map(sub => (
                                        <div key={sub._id} className="px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 flex justify-between items-center group hover:bg-gray-100 transition shadow-sm">
                                            <div className="flex items-center space-x-3">
                                                {sub.image ? (
                                                    <img src={sub.image} alt={sub.name} className="w-10 h-10 object-cover rounded bg-white" />
                                                ) : (
                                                    <div className="w-10 h-10 bg-white rounded border flex items-center justify-center text-gray-300 text-[10px]">No Pic</div>
                                                )}
                                                <div>
                                                    <div className="font-medium">{sub.name}</div>
                                                    {sub.isStatic && (
                                                        <span className="px-1.5 py-0.5 text-[7px] bg-gray-200 text-gray-500 rounded uppercase font-bold">System</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => handleEdit(sub)}
                                                    className="text-blue-400 hover:text-blue-600 p-1 transition-colors"
                                                    title="Edit Subcategory"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(sub._id)}
                                                    className="text-red-400 hover:text-red-600 p-1 transition-colors"
                                                    title="Delete Subcategory"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
