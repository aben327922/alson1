import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Package, ShieldCheck, Mail } from 'lucide-react';
import { brands, Product } from '@/data/products';
import { getProductsByBrand } from '@/lib/productService';
import { getBrandById, getUnifiedBrands, UnifiedBrand } from '@/lib/brandService';

export default async function BrandDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const storeBrand = await getBrandById(id);

    if (!storeBrand) {
        return (
            <div className="page-container text-center py-20 bg-white">
                <h2 className="text-2xl font-bold mb-4">Brand Not Found</h2>
                <Link href="/brands" className="btn-primary inline-block">Back to Brands Catalog</Link>
            </div>
        );
    }

    // Sidebar brands - filter by the same division
    const allUnifiedBrands = await getUnifiedBrands(storeBrand.division);
    const brandsList = allUnifiedBrands.map((b: UnifiedBrand) => ({ id: b.id, name: b.name }));

    const brandProducts = await getProductsByBrand(id);

    return (
        <div className="page-container bg-white">
            {/* Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide text-center">
                    <h1 className="text-4xl font-bold font-orbitron mb-2">{storeBrand.name} Solutions</h1>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="products-layout-section section-padding">
                <div className="container wide layout-grid">

                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="sidebar-widget">
                            <h3 className="widget-title">Authorized Partners</h3>
                            <ul className="widget-list">
                                {brandsList.map((brand: { id: string; name: string }) => (
                                    <li key={brand.id}>
                                        <Link
                                            href={`/brand/${brand.id}`}
                                            className={`flex justify-between items-center transition text-sm ${id === brand.id ? 'text-primary font-bold' : 'hover-text-primary'}`}
                                        >
                                            <span>{brand.name}</span>
                                            {id === brand.id && <span className="sidebar-icon" aria-hidden="true"></span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title">Authorization</h3>
                            <div className="bg-light p-5 rounded border border-gray-100">
                                <div className="flex items-start gap-3 mb-4">
                                    <ShieldCheck className="text-primary mt-1" size={20} />
                                    <div>
                                        <p className="text-xs font-bold text-dark uppercase tracking-tight">Authorized Dealer</p>
                                        <p className="text-[11px] text-gray-500">Verified distributor of genuine products.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Package className="text-primary mt-1" size={20} />
                                    <div>
                                        <p className="text-xs font-bold text-dark uppercase tracking-tight">Full Stockist</p>
                                        <p className="text-[11px] text-gray-500">Immediate inventory available.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-widget bg-dark p-6 rounded text-center text-white">
                            <Mail size={32} className="mx-auto text-primary mb-3" />
                            <h4 className="font-bold mb-2">Technical Sales</h4>
                            <p className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-tighter">Bulk Project Pricing</p>
                            <Link href="/contact" className="btn-small btn-primary w-full block">Request Quote</Link>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="main-content">
                        {/* Brand Info Card */}
                        <div className="bg-white border rounded shadow-sm p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/4 flex justify-center relative h-24">
                                <Image src={storeBrand.image} alt={storeBrand.name} fill style={{ objectFit: 'contain' }} />
                            </div>
                            <div className="w-full md:w-3/4 text-center">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <span className="h-[2px] w-4 bg-primary"></span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{storeBrand.spec}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-dark-bg uppercase tracking-tight font-orbitron">{storeBrand.name} {storeBrand.division === 'hardware' ? 'Industrial' : 'Appliances'}</h2>
                                <p className="text-gray-600 leading-relaxed text-sm font-medium mb-4">
                                    {storeBrand.description}
                                </p>
                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-[10px] py-2 px-4">
                                    Check Availability <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>

                        {/* Product Catalog Toolbar */}
                        <div className="products-toolbar flex justify-between items-center mb-8 pb-4 border-b">
                            <h3 className="text-lg font-bold text-dark-bg uppercase tracking-tight">Certified Categories</h3>
                            <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-tighter italic">AUTHENTIC_DISTRIBUTION_V1</p>
                        </div>

                        {/* Product Grid */}
                        <div className="grid-4-col">
                            {brandProducts.length > 0 ? (
                                brandProducts.map((prod: Product) => (
                                    <div key={prod.id} className="category-card-premium group">
                                        <div className="card-image relative overflow-hidden h-40 bg-gray-50 flex items-center justify-center p-6 bg-white border-b">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={prod.images[0]}
                                                    alt={prod.name}
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                    className="transition duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover-bg-opacity-5 transition duration-300"></div>
                                        </div>
                                        <div className="card-body p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{prod.brand}</span>
                                            </div>
                                            <h4 className="text-sm font-bold mb-6 group-hover-text-primary transition-colors line-clamp-2 uppercase min-h-[40px] tracking-tight">{prod.name}</h4>
                                            <Link href={`/product/${prod.id}`} className="text-primary font-bold text-[10px] flex items-center gap-2 hover:translate-x-1 transition-transform uppercase tracking-[2px]">
                                                View Product <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center bg-gray-50 rounded border border-dashed border-gray-300">
                                    <p className="text-gray-500">More products arriving soon for {storeBrand.name}.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
