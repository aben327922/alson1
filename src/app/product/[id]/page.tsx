"use client";

import { useState, use, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Star, Truck, Shield, FileText, Settings, Info } from 'lucide-react';

import { products, Product, categories } from '@/data/products';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [dynamicProduct, setDynamicProduct] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // Fetch from store if available
    const productFromStore = products[id];

    useEffect(() => {
        if (!productFromStore && id) {
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    // This endpoint now handles both IDs and Slugs safely
                    const res = await fetch(`/api/products/${id}`);
                    const json = await res.json();
                    if (json.success) {
                        const p = json.data;
                        const specsMap = p.specifications || {};
                        const specsArray = Object.entries(specsMap).map(([label, value]) => ({
                            label,
                            value: String(value)
                        }));
                        if (p.modelNumber && !specsArray.find(s => s.label.toLowerCase() === 'model')) {
                            specsArray.unshift({ label: 'Model', value: p.modelNumber });
                        }

                        setDynamicProduct({
                            id: p.slug || p._id,
                            name: p.name,
                            brand: p.brand,
                            model: p.modelNumber || '',
                            availability: p.availability,
                            images: (p.images && p.images.length > 0) ? p.images : (p.thumbnail ? [p.thumbnail] : []),
                            specs: specsArray,
                            features: p.overview ? p.overview.split('\n').filter(Boolean) : [],
                            description: p.description,
                            isDbProduct: true
                        });
                    }
                } catch (error) {
                    console.error('Error fetching dynamic product:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id, productFromStore]);

    const product = productFromStore || dynamicProduct;

    // Decode product name for fallback
    const productName = product ? product.name : (id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Unknown Product');

    const images = product
        ? (product.variants && product.variants[selectedVariantIndex]
            ? product.variants[selectedVariantIndex].images
            : product.images)
        : [
            '/images/heroIndustrial.jpg',
            '/images/powertoolshero.jpg',
            '/images/heroprecisionfabircation.jpg',
            '/images/heavyworkshiphero.jpg'
        ];

    const currentModel = product
        ? (product.variants && product.variants[selectedVariantIndex]
            ? product.variants[selectedVariantIndex].model
            : product.model)
        : 'IND-2025-X-Pro';

    const rawSpecs = product
        ? product.specs
        : [
            { label: 'Brand', value: 'Premium Industrial' },
            { label: 'Availability', value: 'In Stock' },
            { label: 'Warranty', value: '2 Years Manufacturer' },
            { label: 'Origin', value: 'Germany / Japan' },
            { label: 'Weight', value: '45kg' },
            { label: 'Dimensions', value: '120 x 80 x 60 cm' },
            { label: 'Material', value: 'High-Grade Reinforced Steel' },
        ];

    // Ensure Model is always at the top of Specs tab
    const hasModelSpec = rawSpecs.some(s => s.label.toLowerCase() === 'model');
    const specs = hasModelSpec
        ? rawSpecs.map(s => s.label.toLowerCase() === 'model' ? { ...s, value: currentModel } : s)
        : [{ label: 'Model', value: currentModel }, ...rawSpecs];

    const currentVariant = product?.variants?.[selectedVariantIndex];
    const description = currentVariant?.description || product?.description || null;
    const features = product ? product.features : [
        'High-performance brushless motor technology',
        'Precision-engineered gears for minimum vibration',
        'Ergonomic grip designed for long-shift comfort',
        'Advanced safety cut-off system'
    ];

    // --- DYNAMIC RELATED PRODUCTS LOGIC ---
    // 1. Find the division of the current product
    const currentCategory = Object.values(categories).find(cat => cat.productIds.includes(id));
    const division = currentCategory?.division || 'hardware';

    // 2. Find other products in the same division
    const relatedProducts = Object.values(products)
        .filter(p => {
            if (p.id === id) return false; // Don't show current product
            const pCat = Object.values(categories).find(cat => cat.productIds.includes(p.id));
            return pCat?.division === division;
        })
        .slice(0, 4);

    // Fallback if no related products found (unlikely but safe)
    const displayRelated = relatedProducts.length > 0 ? relatedProducts : Object.values(products).slice(0, 4);

    if (loading) {
        return (
            <div className="page-container flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="page-container">
            {/* Header / Breadcrumb */}
            <section className="page-header bg-dark text-white">
                <div className="container container-narrow text-center">
                    <h1 className="text-4xl font-bold mb-2 font-orbitron">{productName}</h1>
                </div>
            </section>

            <section className="section-padding products-layout-section">
                <div className="container container-narrow">
                    <div className="product-detail-grid">

                        {/* LEFT: GALLERY */}
                        <div className="product-gallery-column">
                            <div className="product-gallery-sticky">
                                <div className="gallery-main-frame">
                                    <Image
                                        src={images[activeImage]}
                                        alt={productName}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="product-badge" style={{ position: 'absolute', top: '20px', left: '20px', margin: 0 }}>
                                        Premium Choice
                                    </div>
                                </div>
                                <div className="thumb-scroller">
                                    {images.map((img: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className={`thumb ${activeImage === idx ? 'active-thumb' : ''}`}
                                            onClick={() => setActiveImage(idx)}
                                        >
                                            <Image src={img} alt={`Thumbnail ${idx}`} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: DETAILS */}
                        <div className="product-meta-panel">
                            <div className="product-badge">Industrial Series</div>
                            <h1 className="product-title-large">{productName}</h1>
                            <div className="text-primary font-orbitron font-bold mb-4 flex items-center gap-2">
                                <Settings size={14} className="animate-spin-slow" />
                                Model: {currentModel}
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                </div>
                                <span className="text-sm text-gray-500 font-medium">(4.9/5 based on 24 reviews)</span>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Professional-grade {productName.toLowerCase()} designed for high-intensity industrial manufacturing and heavy-duty maintenance.
                                Featuring our patented durability technology and energy-efficient motor system.
                            </p>

                            {productFromStore?.colorFamily && (
                                <div className="mb-6">
                                    <span className="text-sm font-bold text-dark-bg">Color Family: </span>
                                    <span className="text-sm text-gray-600">{productFromStore.colorFamily}</span>
                                </div>
                            )}

                            {productFromStore?.variants && (
                                <div className="mb-10 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="text-sm font-bold text-dark-bg mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <Info size={16} className="text-primary" />
                                        Select Model / Color
                                    </h4>
                                    <div className="flex flex-wrap gap-4">
                                        {productFromStore.variants.map((variant, idx) => (
                                            <div
                                                key={idx}
                                                className={`group relative p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center gap-3 bg-white ${selectedVariantIndex === idx
                                                    ? 'border-primary ring-4 ring-orange-500/10 shadow-lg'
                                                    : 'border-gray-200 hover:border-primary/50 hover:shadow-md hover:-translate-y-1'}`}
                                                style={{ width: '130px' }}
                                                onClick={() => {
                                                    setSelectedVariantIndex(idx);
                                                    setActiveImage(0);
                                                }}
                                            >

                                                <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 group-hover:border-primary/20 transition-colors">
                                                    <Image
                                                        src={variant.thumbnail}
                                                        alt={variant.colorName}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className={`transition-transform duration-500 ${selectedVariantIndex === idx ? 'scale-110' : 'group-hover:scale-110'}`}
                                                    />
                                                </div>

                                                <div className="text-center">
                                                    <span className={`block text-xs font-bold leading-tight transition-colors ${selectedVariantIndex === idx ? 'text-primary' : 'text-dark-bg group-hover:text-primary'}`}>
                                                        {variant.colorName}
                                                    </span>
                                                    <span className="block text-[10px] text-gray-500 mt-1 font-medium italic">
                                                        {variant.model}
                                                    </span>
                                                </div>

                                                {/* Premium Choice Badge for active */}
                                                {selectedVariantIndex === idx && (
                                                    <div className="text-[8px] font-black uppercase text-primary tracking-tighter mt-auto">
                                                        Selected
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}



                            {/* TABS SECTION */}
                            <div className="tabs-container">
                                <div className="tabs-header">
                                    <button
                                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Info size={16} /> Overview
                                        </div>
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('specifications')}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Settings size={16} /> Specs
                                        </div>
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('documents')}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FileText size={16} /> Downloads
                                        </div>
                                    </button>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'description' && (
                                        <div className="prose text-gray-600">
                                            <h4 className="font-bold text-dark-bg mb-4">Unmatched Precision & Power</h4>
                                            <p className="mb-4">
                                                {description || `Our ${productName} represents the pinnacle of industrial engineering. By integrating high-torque components with advanced heat management, we've created a tool that outlasts competition by 40%.`}
                                            </p>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {features.map((item: string, i: number) => (
                                                    <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <CheckCircle size={16} className="text-primary" /> {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {productFromStore?.descriptionImage && (
                                                <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                                    <Image
                                                        src={productFromStore.descriptionImage}
                                                        alt="Product Features Overview"
                                                        width={800}
                                                        height={1000}
                                                        style={{ width: '100%', height: 'auto' }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    )}
                                    {activeTab === 'specifications' && (
                                        <table className="spec-table">
                                            <tbody>
                                                {specs.map((spec: { label: string; value: string }, idx: number) => (
                                                    <tr key={idx}>
                                                        <th>{spec.label}</th>
                                                        <td>{spec.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                    {activeTab === 'documents' && (
                                        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                            <p className="text-sm text-gray-500 mb-4">Available technical documentation for {productName}:</p>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <FileText size={20} className="text-primary" />
                                                        <span className="font-bold text-sm">Technical Data Sheet (PDF)</span>
                                                    </div>
                                                    <button className="text-primary font-bold text-xs uppercase hover:underline">Download</button>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <FileText size={20} className="text-primary" />
                                                        <span className="font-bold text-sm">Operations Manual (PDF)</span>
                                                    </div>
                                                    <button className="text-primary font-bold text-xs uppercase hover:underline">Download</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pricing-block" style={{ marginTop: '40px' }}>
                                <div className="price-label">Estimated Professional Price</div>
                                <div className="price-value">Quote Required</div>
                                <p className="text-[10px] text-gray-500 mt-2">Volume discounts available for bulk corporate orders.</p>
                            </div>

                            <div className="action-buttons">
                                <Link href="/contact" className="btn-primary btn-slim" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    Request Quotation
                                </Link>
                                <Link href="/contact" className="cta-btn btn-slim" style={{ background: '#fff', color: 'var(--text-main)', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                                    Contact Support
                                </Link>
                            </div>

                            <div className="trust-badges pt-6 border-t border-gray-100 italic text-[12px] text-gray-500">
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Truck size={16} className="text-primary" /> 24hr Shipping
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Shield size={16} className="text-primary" /> 2 Year Warranty
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <CheckCircle size={16} className="text-primary" /> ISO Certified
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RELATED PRODUCTS */}
                    <div className="related-solutions-section">
                        <h3 className="section-title" style={{ fontSize: '22px', marginBottom: '30px' }}>Related Solutions</h3>
                        <div className="grid-3-col" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            {displayRelated.map((prod, idx) => (
                                <Link href={`/product/${prod.id}`} key={prod.id} className="category-card-premium" style={{ height: 'auto' }}>
                                    <div className="card-image relative bg-gray-100 overflow-hidden h-40">
                                        <Image src={prod.images[0] || '/images/placeholder.jpg'} alt={prod.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold mb-1 text-sm">{prod.name}</h4>
                                        <p style={{ fontSize: '11px', color: '#888', marginBottom: '10px' }}>{prod.brand} • {prod.availability}</p>
                                        <div className="text-primary font-bold text-xs">View Detail &rarr;</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
