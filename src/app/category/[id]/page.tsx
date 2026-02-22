import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { getCategoryById, UnifiedCategory, getUnifiedCategories } from '@/lib/categoryService';
import { getProductsByCategory } from '@/lib/productService';

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const categoryData = await getCategoryById(id);

    if (!categoryData) {
        return (
            <div className="page-container text-center p-12">
                <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
                <Link href="/products" className="btn-primary">Back to Products</Link>
            </div>
        );
    }

    // Fetch other categories in the same division
    const categoriesList = await getUnifiedCategories(categoryData.division);

    const catProducts = await getProductsByCategory(id);

    const fontClass = categoryData.division === 'hardware' ? 'font-orbitron' : '';

    return (
        <div className="page-container">
            {/* Page Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide text-center">
                    <h1 className={`text-4xl font-bold mb-2 ${fontClass}`}>{categoryData.title}</h1>
                </div>
            </section>

            {/* Main Layout */}
            <section className="section-padding">
                <div className="container wide layout-grid">
                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="sidebar-widget">
                            <h3 className="widget-title">Other Categories</h3>
                            <ul className="widget-list">
                                {categoriesList.map((cat: UnifiedCategory) => (
                                    <li key={cat.id}>
                                        <Link
                                            href={`/category/${cat.id}`}
                                            className={`flex justify-between items-center transition ${id === cat.id || id === cat.title ? 'text-primary font-bold' : 'hover-text-primary'}`}
                                        >
                                            <span>{cat.title}</span>
                                            {(id === cat.id || id === cat.title) && <ChevronRight size={16} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget bg-light p-6 rounded">
                            <h4 className="font-bold mb-4">Why Choose Us?</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                                    <span>Genuine Industrial Grade Products</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                                    <span>Authorized Distributor Warranty</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                                    <span>Expert Technical Support</span>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="main-content">
                        <div className="category-intro mb-8 bg-light p-8 rounded border border-gray-200 text-center">
                            <h2 className="text-2xl font-bold mb-4 text-dark-bg">{categoryData.title} Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{categoryData.description}</p>
                        </div>

                        <div className="mb-10 lg:flex items-center justify-between">
                            <div>
                                <h2 className={`text-2xl font-bold text-dark-bg ${fontClass}`}>
                                    {catProducts.length} Products Found
                                </h2>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-6 border-b pb-2">Available Products</h3>

                        <div className="grid-3-col gap-medium">
                            {catProducts.length > 0 ? (
                                catProducts.map((prod) => (
                                    <div key={prod.id} className="product-card group bg-white border rounded overflow-hidden hover:shadow-lg transition">
                                        <div className="product-image-placeholder h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                            <Image
                                                src={prod.images[0] || '/images/placeholder.jpg'}
                                                alt={prod.name}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="group-hover:scale-110 transition duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className={`font-bold text-lg mb-2 text-dark-bg group-hover:text-primary transition ${fontClass}`}>{prod.name}</h4>
                                            <p className="text-sm text-gray-500 mb-4">{prod.brand} • {prod.availability}</p>
                                            <Link
                                                href={`/product/${prod.id}`}
                                                className="btn-small btn-primary block text-center py-2 rounded text-sm font-bold"
                                            >
                                                Product Detail
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center bg-gray-50 rounded border border-dashed border-gray-300">
                                    <p className="text-gray-500">More products arriving soon for {categoryData.title}.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-8 bg-dark text-white rounded text-center" style={{ marginTop: '100px' }}>
                            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                            <p className="mb-6 text-gray-300">We can source specific models or provide custom fabrication for your needs.</p>
                            <Link href="/contact" className="btn-primary inline-block">Contact Sales Team</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
