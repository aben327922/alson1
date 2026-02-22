import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, PenTool, Database, Wrench, ChevronRight, UserCheck, BarChart, ShieldCheck, Phone } from 'lucide-react';
import ReadyToDeploy from '../../components/Home/ReadyToDeploy';

const Services = () => {
    const services = [
        {
            id: 'machining',
            title: 'Precision Machining',
            icon: <Settings size={32} />,
            image: '/images/heroprecisionfabircation.jpg',
            description: 'State-of-the-art turning, milling, and drilling utilizing advanced lathe and CNC technology for aerospace-grade precision.',
            link: '/service/machining'
        },
        {
            id: 'fabrication',
            title: 'Custom Fabrication',
            icon: <PenTool size={32} />,
            image: '/images/heavyworkshiphero.jpg',
            description: 'Tailored metal fabrication solutions featuring heavy-duty cutting, bending, and specialized welding for complex structures.',
            link: '/service/fabrication'
        },
        {
            id: 'maintenance',
            title: 'Repair & Maintenance',
            icon: <Wrench size={32} />,
            image: '/images/Industrialmachinery.jpg',
            description: 'Maximize uptime with our elite repair services for industrial pumps, high-pressure compressors, and complex hydraulic systems.',
            link: '/service/maintenance'
        },
        {
            id: 'consultation',
            title: 'Industrial Consultation',
            icon: <Database size={32} />,
            image: '/images/aboutushero.jpg',
            description: 'Strategic engineering guidance on equipment scalability, operational planning, and technical optimization for your facility.',
            link: '/service/consultation'
        }
    ];

    const processSteps = [
        {
            title: 'Analysis',
            icon: <BarChart size={24} />,
            desc: 'We evaluate your specific technical requirements and operational constraints.'
        },
        {
            title: 'Blueprint',
            icon: <Settings size={24} />,
            desc: 'Our engineering team designs a tailored solution with precision specs.'
        },
        {
            title: 'Execution',
            icon: <UserCheck size={24} />,
            desc: 'Implementing the solution with our high-grade tools and expert technical team.'
        },
        {
            title: 'Support',
            icon: <ShieldCheck size={24} />,
            desc: 'Continuous monitoring and maintenance to ensure long-term reliability.'
        }
    ];

    return (
        <div className="page-container">
            {/* Premium Sleek Hero */}
            <section className="services-hero-slim">
                <div className="container">
                    <span className="text-primary font-bold tracking-[4px] uppercase text-xs mb-4 block animate-fade-in">
                        Professional Solutions
                    </span>
                    <h1>
                        Our Industrial <span className="text-primary">Services</span>
                    </h1>
                    <p className="max-w-5xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        At Alsons Hardware, we bridge the gap between heavy-duty hardware and elite engineering expertise.<br />
                        Custom solutions for the world's most demanding industries.
                    </p>
                </div>
            </section>

            {/* Service Grid */}
            <section className="section-padding pt-0">
                <div className="container wide">
                    <div className="service-grid-modern">
                        {services.map((service) => (
                            <Link href={service.link} key={service.id} className="service-card-sleek group">
                                <div className="service-card-image relative h-64 overflow-hidden">
                                    <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="service-icon-floating">
                                    {service.icon}
                                </div>
                                <div className="service-card-content p-6">
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                                    <div className="service-link-modern">
                                        Explore Service <ChevronRight size={16} className="group-hover:translate-x-2 transition" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Model / Process */}
            <section className="process-section">
                <div className="container wide">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <span className="text-primary font-bold text-sm uppercase mb-2 block">The Workflow</span>
                            <h2 className="text-4xl font-bold text-dark-bg">Our Strategic Partnership Model</h2>
                            <p className="text-gray-600 mt-4">We follow a rigorous technical methodology to ensure every service delivered meets international safety and performance standards.</p>
                        </div>
                        <Link href="/contact" className="btn-primary" style={{ padding: '15px 40px' }}>
                            Download Service Profile
                        </Link>
                    </div>

                    <div className="process-flow">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="process-step-modern group">
                                <span className="step-number">0{idx + 1}</span>
                                <div className="text-primary mb-4">
                                    {step.icon}
                                </div>
                                <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReadyToDeploy />
        </div>
    );
};

export default Services;
