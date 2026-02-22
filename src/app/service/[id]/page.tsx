import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, Users, ArrowRight, CheckCircle, PenTool, Wrench, Database } from 'lucide-react';

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const serviceData: Record<string, {
        title: string;
        subtitle: string;
        heroImage: string;
        description: string;
        details: string[];
        benefits: { title: string; desc: string; icon: any }[];
        gallery: string[];
    }> = {
        'machining': {
            title: 'Precision Machining',
            subtitle: 'High-Tolerance Engineering Solutions',
            heroImage: '/images/heroprecisionfabircation.jpg',
            description: 'Our precision machining facility is equipped with the latest CNC technology and high-performance lathes. We specialize in producing complex components for industries requiring extreme accuracy, from aerospace to heavy manufacturing. Our expert machinists ensure every micron is accounted for, delivering parts that meet or exceed international standards.',
            details: [
                'Micron-level CNC Turning & Milling',
                'Advanced Surface Grinding & Threading',
                'Custom Component Prototyping',
                'Hardened Steel & Alloy Machining'
            ],
            benefits: [
                { title: 'Extreme Accuracy', desc: 'Tolerance within ±0.005mm for critical components.', icon: <Zap size={24} /> },
                { title: 'Rapid Turnaround', desc: 'optimized workflows for urgent industrial repairs.', icon: <Zap size={24} /> },
                { title: 'Quality Certified', desc: 'Rigorous inspection protocols for every part.', icon: <ShieldCheck size={24} /> }
            ],
            gallery: ['/images/heavyworkshiphero.jpg', '/images/sandbalsitngcoreoffereing.jpg']
        },
        'fabrication': {
            title: 'Custom Fabrication',
            subtitle: 'Heavy-Duty Metal Structures',
            heroImage: '/images/heavyworkshiphero.jpg',
            description: 'Alsons Hardware provides full-scale metal fabrication services. Whether you need structural steel for a new warehouse or custom-welded chemical racks, our team delivers industrial-grade strength. We work with various materials including carbon steel, stainless steel, and aluminum, utilizing precision cutting and high-energy welding techniques.',
            details: [
                'Structural Steel Design & Assembly',
                'Precision Plasma & Laser Cutting',
                'Specialized MIG/TIG Industrial Welding',
                'Surface Treatment & Anti-Corrosion Coating'
            ],
            benefits: [
                { title: 'Robust Strength', desc: 'Fabrications designed to withstand extreme loads.', icon: <PenTool size={24} /> },
                { title: 'Custom Designs', desc: 'Built exactly to your blueprints and CAD files.', icon: <PenTool size={24} /> },
                { title: 'On-Site Setup', desc: 'Installation support for heavy structural projects.', icon: <Users size={24} /> }
            ],
            gallery: ['/images/heroprecisionfabircation.jpg', '/images/heroIndustrial.jpg']
        },
        'maintenance': {
            title: 'Repair & Maintenance',
            subtitle: 'Minimizing Industrial Downtime',
            heroImage: '/images/Industrialmachinery.jpg',
            description: 'Reliability is the backbone of any operation. Our repair division specializes in revitalizing aging or damaged mechanical systems. From hydraulic cylinders to high-pressure air compressors, we provide factory-spec overhauls. We offer both emergency breakdown support and long-term preventative maintenance contracts to keep your facility running at peak efficiency.',
            details: [
                'Hydraulic System Diagnosis & Repair',
                'Air Compressor Valve & Seal replacement',
                'Preventative Maintenance Schedules',
                'Equipment Rebuilding & Restoration'
            ],
            benefits: [
                { title: 'Reduced Downtime', desc: 'Quick-response teams for critical failures.', icon: <Wrench size={24} /> },
                { title: 'OEM Parts', desc: 'We use high-grade components for all repairs.', icon: <ShieldCheck size={24} /> },
                { title: 'Expert Technicians', desc: 'Highly skilled team with decades of experience.', icon: <Users size={24} /> }
            ],
            gallery: ['/images/aircompressor.jpg', '/images/heavyworkshiphero.jpg']
        },
        'consultation': {
            title: 'Technical Consultation',
            subtitle: 'Expert Engineering Insight',
            heroImage: '/images/aboutushero.jpg',
            description: 'With over half a century in the industrial supply sector, our knowledge base is your greatest asset. We provide end-to-end consultation for new facility setups, equipment upgrades, and inventory optimization. Our consultants analyze your operational needs to recommend the most cost-effective and performance-oriented solutions available in the market.',
            details: [
                'Facility Equipment Planning & Logistics',
                'Cost-Benefit Analysis for Tooling',
                'Operational Efficiency Audits',
                'Regulatory & Safety Compliance Advice'
            ],
            benefits: [
                { title: 'Strategic Planning', desc: 'Optimize your procurement and usage.', icon: <Database size={24} /> },
                { title: 'Cost Savings', desc: 'Reduce waste and unnecessary equipment spend.', icon: <Zap size={24} /> },
                { title: 'Safety Focus', desc: 'Ensuring your setup meets modern safety standards.', icon: <ShieldCheck size={24} /> }
            ],
            gallery: ['/images/heroIndustrial.jpg', '/images/powertoolshero.jpg']
        }
    };

    const data = id ? serviceData[id] : null;

    if (!data) {
        return (
            <div className="page-container text-center p-20">
                <h2>Service Not Found</h2>
                <Link href="/services" className="btn-primary mt-4">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="service-detail-hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
                <div className="container">
                    <span className="text-primary font-bold tracking-[5px] uppercase text-sm mb-4 block">
                        Expert Industrial Service
                    </span>
                    <h1>{data.title}</h1>
                    <p className="max-w-xl mx-auto text-gray-200 text-lg md:text-xl font-light">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="service-overview-section">
                <div className="container wide">
                    <div className="grid-2-col gap-large items-center">
                        <div>
                            <span className="text-primary font-bold text-sm uppercase mb-2 block">Operational Excellence</span>
                            <h2 className="text-4xl font-bold mb-6 text-dark-bg">Service Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {data.description}
                            </p>

                            <h3 className="text-xl font-bold mb-4">Core Capabilities:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-500">
                                        <CheckCircle size={18} className="text-primary" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="p-8 bg-light rounded-2xl border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 text-dark-bg">Why Choose Alsons?</h3>
                                <div className="space-y-6">
                                    {data.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="text-primary mt-1">{benefit.icon}</div>
                                            <div>
                                                <h4 className="font-bold">{benefit.title}</h4>
                                                <p className="text-sm text-gray-500">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t">
                                    <Link href="/contact" className="btn-primary w-full block text-center py-4">
                                        Request Workshop Consult
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="service-gallery-section">
                <div className="container wide">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-bold text-sm uppercase mb-2 block">Visual Record</span>
                            <h2 className="text-4xl font-bold">Experience In Action</h2>
                        </div>
                        <p className="text-gray-400 max-w-md hidden md:block">
                            A showcase of our industrial capabilities and recent project execution at Alsons Hardware.
                        </p>
                    </div>

                    <div className="service-gallery-grid grid-2-col gap-4">
                        <div className="gallery-item relative aspect-video overflow-hidden rounded-lg">
                            <Image src={data.gallery[0] || '/images/placeholder.jpg'} alt="Service Execution 1" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="gallery-item small relative aspect-square overflow-hidden rounded-lg">
                            <Image src={data.gallery[1] || '/images/placeholder.jpg'} alt="Service Execution 2" fill style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-light">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Need a Tailored Industrial Solution?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Every project is unique. Our technical managers are available to provide on-site assessments and detailed quotations.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn-primary" style={{ padding: '15px 40px' }}>
                            Contact Workshop <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
