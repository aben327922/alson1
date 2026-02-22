import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';
import { getUnifiedCategories } from '@/lib/categoryService';
import { products } from '@/data/products';

export default async function Products({
    searchParams
}: {
    searchParams: Promise<{ division?: string }>
}) {
    const { division } = await searchParams;

    // Map query division to type-safe division
    const currentDivision = division === 'appliances' ? 'appliances' : 'hardware';

    // --- SELECTION VIEW (No Division Selected) ---
    if (!division) {
        return (
            <div className="flex flex-col md:flex-row h-[85vh] w-full font-sans">
                {/* Hardware Section (Left) - Industrial Aesthetic */}
                <Link
                    href="/products?division=hardware"
                    className="flex-1 relative group overflow-hidden border-b-8 md:border-b-0 md:border-r-8 border-primary bg-zinc-900 flex items-center justify-center text-center"
                >
                    <div className="absolute inset-0 bg-[url('/images/heroIndustrial.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all duration-700 ease-out transform group-hover:scale-105 filter grayscale group-hover:grayscale-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                    <div className="relative z-10 p-8 max-w-lg">
                        <div className="mb-6 inline-block p-5 rounded-full border-2 border-primary/30 group-hover:border-primary bg-black/60 backdrop-blur-sm transition-all duration-500 transform group-hover:-translate-y-2">
                            <Package size={56} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron tracking-widest uppercase shadow-black drop-shadow-lg">
                            HARDWARE<br /><span className="text-primary">DIVISION</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-300 text-base md:text-lg font-light tracking-wide mb-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                            Professional tools, heavy machinery, and industrial components engineered for durability.
                        </p>
                        <span className="inline-block px-10 py-3.5 bg-transparent border-2 border-white text-white font-bold tracking-[0.2em] uppercase hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 transform group-hover:scale-105">
                            Enter Workshop
                        </span>
                    </div>
                </Link>

                {/* Appliances Section (Right) - Modern Aesthetic */}
                <Link
                    href="/products?division=appliances"
                    className="flex-1 relative group overflow-hidden bg-slate-50 flex items-center justify-center text-center"
                >
                    <div className="absolute inset-0 bg-[url('/images/homeappliancesmain.png')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-none"></div>
                    <div className="relative z-10 p-8 max-w-lg">
                        <div className="mb-6 inline-block p-5 rounded-full border-2 border-blue-200 group-hover:border-blue-500 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 transform group-hover:-translate-y-2">
                            <div className="text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13h18c0-2-2-4-4-4h-5v-1c0-1-2-2-4-2H5c-2 0-3 1-3 2v5Z" /><path d="M7 13v9" /><path d="M17 13v9" /><path d="M12 2v2" /></svg>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight drop-shadow-sm">
                            HOME<br /><span className="text-blue-600 font-light">LIVING</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-600 text-base md:text-lg font-medium tracking-normal mb-10 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                            Smart cooling, kitchen innovations, and premium appliances for modern homes.
                        </p>
                        <span className="inline-block px-10 py-3.5 bg-slate-900 text-white font-bold tracking-widest uppercase hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
                            Explore Home
                        </span>
                    </div>
                </Link>
            </div>
        );
    }

    // --- LISTING VIEW (Division Selected) ---

    // Filter categories by division using the service
    const filteredCategories = await getUnifiedCategories(currentDivision);

    const title = division === 'hardware' ? 'Hardware & Tools' : 'Home Appliances';
    const fontClass = division === 'hardware' ? 'font-orbitron' : '';

    return (
        <div className="page-container">
            {/* Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide text-center">
                    <h1 className={`text-4xl font-bold mb-2 ${fontClass}`}>{title}</h1>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="products-layout-section section-padding">
                <div className="container wide layout-grid">
                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="sidebar-widget">
                            <h3 className="widget-title">Categories</h3>
                            <ul className="widget-list">
                                {filteredCategories.map(cat => (
                                    <li key={cat.id}>
                                        <Link href={`/category/${cat.id}`} className="flex justify-between items-center hover-text-primary transition">
                                            <span>{cat.title}</span>
                                            <span className="sidebar-icon" aria-hidden="true"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget bg-light p-6 rounded text-center">
                            <h4 className="font-bold mb-2">Need Help?</h4>
                            <p className="text-sm mb-4">Contact our experts for product selection.</p>
                            <Link href="/contact" className="btn-small btn-primary w-full block">Contact Us</Link>
                        </div>
                    </aside>

                    {/* Content Grid */}
                    <div className="main-content">
                        {/* Toolbar */}
                        <div className="products-toolbar flex justify-between items-center mb-8 pb-4 border-b">
                            <p className="text-gray-500">
                                Showing {filteredCategories.length} Categories
                            </p>
                            <div className="flex items-center gap-4">
                                <label htmlFor="sort" className="text-sm font-medium">Sort By:</label>
                                <select id="sort" className="form-select border rounded p-2 text-sm">
                                    <option>Popularity</option>
                                    <option>Name (A-Z)</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid - Show Categories for ALL divisions */}
                        <div className="grid-3-col gap-medium">
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((cat) => (
                                    <Link href={`/category/${cat.id}`} key={cat.id} className="category-card-premium group">
                                        <div className="card-image relative overflow-hidden h-48 bg-gray-100">
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="transition duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                                        </div>
                                        <div className="card-body p-6 border border-t-0 rounded-b">
                                            <h4 className={`font-bold text-lg mb-2 text-dark-bg group-hover:text-primary transition ${fontClass}`}>{cat.title}</h4>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cat.description}</p>
                                            <span className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition duration-300">
                                                Explore Products <ArrowRight size={16} className="ml-1" />
                                            </span>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full py-24 text-center">
                                    <p className="text-gray-400">Coming soon to {title}.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
