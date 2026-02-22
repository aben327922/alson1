import Link from 'next/link';
import Image from 'next/image';
import { getUnifiedCategories, UnifiedCategory } from '@/lib/categoryService';

const Categories = async () => {
    // Fetch all unified categories for hardware
    const allCategories = await getUnifiedCategories('hardware');

    // We specifically want to show the "Core" categories but respect the hidden status
    // If a category from the original set is hidden, it won't be in allCategories
    const displayCategories = allCategories.slice(0, 4);

    return (
        <section className="categories-section">
            <div className="container wide">
                <div className="section-header-center">
                    <h2>Our Core Offerings</h2>
                </div>
                <div className="category-grid">
                    {displayCategories.map((cat: UnifiedCategory) => (
                        <Link key={cat.id} href={`/category/${cat.id}`} className="category-card">
                            <div className="cat-content">
                                <h3>{cat.title}</h3>
                                <p>{cat.description.split('.')[0]}</p>
                                <span className="cat-link">View Products &rarr;</span>
                            </div>
                            <Image
                                src={cat.image || '/images/placeholder.jpg'}
                                className="cat-bg"
                                alt={cat.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
