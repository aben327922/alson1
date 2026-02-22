import Link from 'next/link';
import Image from 'next/image';
import { Box, ShieldCheck, HelpCircle } from 'lucide-react';
import { getUnifiedBrands, UnifiedBrand } from '@/lib/brandService';
import { getUnifiedCategories, UnifiedCategory } from '@/lib/categoryService';

export default async function BrandsPage({
    searchParams
}: {
    searchParams: Promise<{ division?: string }>
}) {
    const { division } = await searchParams;

    // --- SELECTION VIEW (No Division Selected) ---
    if (!division) {
        return (
            <div className="flex flex-col md:flex-row h-[85vh] w-full font-sans">
                {/* Hardware Section (Left) - Industrial Aesthetic */}
                <Link
                    href="/brands?division=hardware"
                    className="flex-1 relative group overflow-hidden border-b-8 md:border-b-0 md:border-r-8 border-primary bg-zinc-900 flex items-center justify-center text-center"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-[url('/images/heroIndustrial.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all duration-700 ease-out transform group-hover:scale-105 filter grayscale group-hover:grayscale-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 max-w-lg">
                        <div className="mb-6 inline-block p-5 rounded-full border-2 border-primary/30 group-hover:border-primary bg-black/60 backdrop-blur-sm transition-all duration-500 transform group-hover:-translate-y-2">
                            <ShieldCheck size={56} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron tracking-widest uppercase shadow-black drop-shadow-lg">
                            INDUSTRIAL<br /><span className="text-primary">PARTNERS</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-300 text-base md:text-lg font-light tracking-wide mb-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                            Authorized distributors for world-class machinery and tool manufacturers.
                        </p>
                        <span className="inline-block px-10 py-3.5 bg-transparent border-2 border-white text-white font-bold tracking-[0.2em] uppercase hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 transform group-hover:scale-105">
                            View Hardware Brands
                        </span>
                    </div>
                </Link>

                {/* Appliances Section (Right) - Modern Aesthetic */}
                <Link
                    href="/brands?division=appliances"
                    className="flex-1 relative group overflow-hidden bg-slate-50 flex items-center justify-center text-center"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-[url('/images/homeappliancesmain.png')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-none"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 max-w-lg">
                        <div className="mb-6 inline-block p-5 rounded-full border-2 border-blue-200 group-hover:border-blue-500 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 transform group-hover:-translate-y-2">
                            <div className="text-blue-600">
                                <Box size={56} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight drop-shadow-sm">
                            HOME<br /><span className="text-blue-600 font-light">BRANDS</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-600 text-base md:text-lg font-medium tracking-normal mb-10 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                            Premium global brands for home appliances and modern living.
                        </p>
                        <span className="inline-block px-10 py-3.5 bg-slate-900 text-white font-bold tracking-widest uppercase hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
                            View Appliance Brands
                        </span>
                    </div>
                </Link>
            </div>
        );
    }

    const currentDivision = division as 'hardware' | 'appliances';

    // Filter brands and categories by division using services
    const filteredBrands = await getUnifiedBrands(currentDivision);
    const filteredCategories = await getUnifiedCategories(currentDivision);

    const title = division === 'hardware' ? 'Hardware & Tools Partners' : 'Home Appliances Partners';

    return (
        <div className="page-container brands-page">
            {/* Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide text-center">
                    <h1 className="text-4xl font-bold mb-2 font-orbitron">{title}</h1>
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
                                {filteredBrands.map((brand: UnifiedBrand) => (
                                    <li key={brand.id}>
                                        <Link href={`/brand/${brand.id}`} className="flex justify-between items-center hover-text-primary transition text-sm">
                                            <span>{brand.name}</span>
                                            <span className="sidebar-icon" aria-hidden="true"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title">Categories</h3>
                            <ul className="widget-list">
                                {filteredCategories.map((cat: UnifiedCategory) => (
                                    <li key={cat.id}>
                                        <Link href={`/category/${cat.id}`} className="flex justify-between items-center hover-text-primary transition">
                                            <span>{cat.title}</span>
                                            <span className="sidebar-icon" aria-hidden="true"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title">Trust & Support</h3>
                            <ul className="widget-list checks">
                                <li className="flex items-center gap-2 mb-3">
                                    <ShieldCheck size={18} className="text-primary" />
                                    <span className="text-sm font-medium">Authorized Dealer</span>
                                </li>
                                <li className="flex items-center gap-2 mb-3">
                                    <Box size={18} className="text-primary" />
                                    <span className="text-sm font-medium">Genuine Parts Only</span>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-widget bg-light p-6 rounded text-center">
                            <HelpCircle size={32} className="mx-auto text-primary mb-3" />
                            <h4 className="font-bold mb-2">Need Guidance?</h4>
                            <p className="text-sm mb-4">Our technical team is ready to assist you.</p>
                            <Link href="/contact" className="btn-small btn-primary w-full block">Inquire Now</Link>
                        </div>
                    </aside>

                    {/* Content Grid */}
                    <div className="main-content">
                        {/* Toolbar */}
                        <div className="products-toolbar flex justify-between items-center mb-8 pb-4 border-b">
                            <p className="text-gray-500 font-medium">Official Partners ({filteredBrands.length})</p>
                            <div className="hidden md:flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Authorized Distribution</span>
                            </div>
                        </div>

                        {/* Brands Grid */}
                        <div className="grid-6-col">
                            {filteredBrands.length > 0 ? (
                                filteredBrands.map((brand: UnifiedBrand) => (
                                    <Link href={`/brand/${brand.id}`} key={brand.id} className="brand-box group h-24 border border-gray-100 rounded-lg hover:border-primary transition-all duration-300 flex items-center justify-center p-4 bg-white relative">
                                        <img src={brand.image} alt={brand.name} className="brand-logo" />
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full py-24 text-center">
                                    <p className="text-gray-400">Retail partners coming soon for Home Appliances.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
