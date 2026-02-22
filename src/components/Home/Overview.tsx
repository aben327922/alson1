import Link from 'next/link';
import Image from 'next/image';

const Overview = () => {
    return (
        <section className="overview-section">
            <div className="container wide overview-grid">
                <div className="overview-text fade-in-up">
                    <div className="section-badge">ABOUT US</div>
                    <h2>Alsons Hardware: Building Industrial Strength</h2>
                    <p className="lead">
                        Established over 50 years ago in Karachi, Alsons Hardware has grown into one of the region's most reputable importers, stockists, and suppliers of industrial equipment.
                    </p>

                    <p>
                        We specialize in providing high-quality tools and machinery to various sectors including construction, manufacturing, and oil & gas. Our extensive inventory features world-renowned brands and cutting-edge technology designed to meet the rigorous demands of modern industry.
                    </p>

                    <p>
                        Beyond supply, we offer expert machining and fabrication services. Our state-of-the-art workshop is staffed by skilled technicians ready to deliver custom solutions tailored to your specific project requirements.
                    </p>

                    <ul className="feature-list">
                        <li><span>✓</span> <strong>Experience:</strong> Over 5 decades of industry leadership</li>
                        <li><span>✓</span> <strong>Quality:</strong> Authorized distributor for global brands</li>
                        <li><span>✓</span> <strong>Service:</strong> Dedicated technical support and after-sales care</li>
                        <li><span>✓</span> <strong>Integrity:</strong> Committed to transparent and professional business practices</li>
                    </ul>

                    <Link href="/about" className="btn-text">
                        Learn More About Our History &rarr;
                    </Link>
                </div>
                <div className="overview-visual">
                    <div className="visual-media-container">
                        <Image src="/images/aboutushero.jpg" className="overview-bg-img" alt="Alsons Hardware Warehouse" fill style={{ objectFit: 'cover' }} />
                        <div className="stat-card stat-card-1">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-card stat-card-2">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
