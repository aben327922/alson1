import Link from 'next/link';
import { Shield, Award, Users, Lightbulb, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="page-container">
            {/* Page Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide">
                    <h1 className="text-4xl font-bold mb-2">About Alsons Hardware</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container wide">
                    <div className="grid-2-col gap-large items-center">
                        <div>
                            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our History</span>
                            <h2 className="text-3xl font-bold mb-6 text-dark-bg">Legact of Industrial Excellence Since 1970</h2>
                            <p className="lead text-xl text-gray-600 mb-6 font-light">
                                Based in Karachi, Alsons Hardware has spent over five decades building a reputation for reliability, quality, and technical expertise in the industrial supply sector.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                What started as a modest hardware store has evolved into a premier importer and stockist of high-grade industrial machinery and tools. We understand the pulse of the industry—from construction and mining to manufacturing and fabrication. Our mission is to empower these sectors with the best equipment the world has to offer.
                            </p>
                            <div className="p-6 bg-light rounded-lg border-l-4 border-primary">
                                <p className="italic text-gray-700 font-medium">
                                    "We define ourselves not just by the products we sell, but by the solutions we provide. Our team works closely with clients to ensure every piece of equipment adds tangible value."
                                </p>
                            </div>
                        </div>
                        <div className="image-stack relative pl-8 pb-8">
                            {/* Main Image */}
                            <div className="rounded-lg shadow-lg relative z-10 w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/images/aboutushero.jpg"
                                    alt="Alsons Hardware Facility"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            {/* Decorative Background Image/Element */}
                            <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-gray-200 rounded-lg -z-0"></div>
                            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[4/3] rounded-lg shadow-lg border-4 border-white z-20 hidden md:block overflow-hidden">
                                <Image
                                    src="/images/heroIndustrial.jpg"
                                    alt="Industrial Context"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-light section-padding">
                <div className="container wide">
                    <div className="section-title text-center max-w-2xl mx-auto mb-12">
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">CORE VALUES</span>
                        <h2 className="text-3xl font-bold mt-2 text-dark-bg">Why Industry Leaders Choose Us</h2>
                        <p className="text-gray-600 mt-4">We believe in building lasting partnerships through integrity, innovation, and service excellence.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card group hover:scale-105 transition">
                            <div className="mb-4 text-primary bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition">
                                <Shield size={24} />
                            </div>
                            <h3>Quality Assurance</h3>
                            <p className="text-gray-600">We only stock products from globally recognized brands known for their durability and performance. Every item is vetted to meet our high standards.</p>
                        </div>
                        <div className="feature-card group hover:scale-105 transition">
                            <div className="mb-4 text-primary bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition">
                                <Users size={24} />
                            </div>
                            <h3>Technical Expertise</h3>
                            <p className="text-gray-600">Our team isn't just sales-oriented; we are technically proficient. We offer guidance on product selection, usage, and maintenance.</p>
                        </div>
                        <div className="feature-card group hover:scale-105 transition">
                            <div className="mb-4 text-primary bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition">
                                <Award size={24} />
                            </div>
                            <h3>Customer Commitment</h3>
                            <p className="text-gray-600">Building long-term relationships is at our core. We offer personalized service, on-time delivery, and responsive after-sales support.</p>
                        </div>
                        <div className="feature-card group hover:scale-105 transition">
                            <div className="mb-4 text-primary bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition">
                                <Lightbulb size={24} />
                            </div>
                            <h3>Innovation</h3>
                            <p className="text-gray-600">We constantly update our inventory with the latest industrial technologies to keep our clients ahead of the curve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Section */}
            <section className="section-padding">
                <div className="container wide">
                    <div className="grid-2-col gap-large items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-primary opacity-10 rounded-lg transform rotate-3 scale-105"></div>
                            <div className="rounded-lg shadow-lg relative z-10 w-full aspect-video overflow-hidden">
                                <Image
                                    src="/images/heroprecisionfabircation.jpg"
                                    alt="Workshop Services"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="md:order-2">
                            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Value Added Services</span>
                            <h2 className="text-3xl font-bold mb-6 text-dark-bg">Our Workshop Capabilities</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Beyond hardware supply, Alsons Hardware operates a fully equipped machining and fabrication workshop. We provide custom engineering solutions tailored to your specific project requirements.
                            </p>
                            <ul className="check-list space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>Precision Machining & Turning</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>Custom Steel Fabrication</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>Equipment Repair & Maintenance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>Prototype Development</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/services" className="btn-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition inline-block">
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
