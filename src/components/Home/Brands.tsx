import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getUnifiedBrands, UnifiedBrand } from '@/lib/brandService';

const Brands = async () => {
    const allBrands = await getUnifiedBrands();
    // Display a selection of top brands (e.g., first 12)
    const displayBrands = allBrands.slice(0, 12);

    return (
        <section className="brands-section">
            <div className="container wide">
                <div className="brands-header">
                    <h2>Browse Industry-Leading Brands</h2>
                    <Link href="/brands" className="view-all-brands-btn group">
                        <span>See All Brands</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="brands-grid">
                    {displayBrands.map((brand: UnifiedBrand) => (
                        <Link key={brand.id} href={`/brand/${brand.id}`} className="brand-box px-4">
                            <img src={brand.image} alt={brand.name} className="object-contain max-h-12" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
