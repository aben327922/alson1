"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Package,
    Wrench,
    BookOpen,
    ShieldCheck,
    HelpCircle,
    MessageSquare,
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    Home,
    MapPin,
    Phone,
    Mail,
    Clock
} from 'lucide-react';

const SupportPage = () => {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const quickCards = [
        {
            icon: <Package size={24} />,
            title: "Track Order",
            description: "Check the real-time status of your delivery and order history.",
            buttonText: "Track Now",
            link: "#track-order"
        },
        {
            icon: <Wrench size={24} />,
            title: "Request Repair",
            description: "Book a professional maintenance or factory repair service.",
            buttonText: "Book Service",
            link: "#repair-form"
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Warranty & Returns",
            description: "Learn about our industrial coverage and return policies.",
            buttonText: "View Policy",
            link: "#faqs"
        },
        {
            icon: <HelpCircle size={24} />,
            title: "FAQs",
            description: "Get instant answers to common questions about our hardware.",
            buttonText: "Read FAQs",
            link: "#faqs"
        },
        {
            icon: <MessageSquare size={24} />,
            title: "WhatsApp",
            description: "Chat directly with our technical support team for fast help.",
            buttonText: "Chat Now",
            link: "https://wa.me/922132410192"
        }
    ];

    const faqs = [
        {
            q: "How can I check if a hardware tool is in stock?",
            a: "You can check real-time availability on the product detail page. If a tool is marked as 'Out of Stock', you can sign up for notifications or contact our sales team for an estimated lead time."
        },
        {
            q: "Do you provide installation for home appliances?",
            a: "Yes, we offer professional installation services for all major home appliances. You can request installation during checkout or by filling out the service request form on this support page."
        },
        {
            q: "What is the warranty period for industrial equipment?",
            a: "Most of our industrial tools and heavy machinery come with a 1-year manufacturer warranty. Specific high-end brands may offer extended warranties of up to 3 years."
        },
        {
            q: "How do I return a faulty product?",
            a: "If you receive a damaged or defective item, please contact us within 48 hours. We will arrange a pickup and provide a replacement or full refund after technical verification."
        },
        {
            q: "Are the prices on the website inclusive of tax?",
            a: "All prices listed on Alsons Hardware are exclusive of GST unless stated otherwise. The final tax amount will be calculated and shown at the checkout page."
        },
        {
            q: "Do you offer international shipping for parts?",
            a: "Currently, we only ship within Pakistan. However, for large industrial orders, we can coordinate with your freight forwarder for export purposes."
        },
        {
            q: "Where can I find spare parts for older models?",
            a: "We maintain a large inventory of spare parts for legacy models. Please use the 'Request Repair' form with your model number, and our parts department will assist you."
        },
        {
            q: "Can I cancel my service request?",
            a: "Yes, you can cancel or reschedule a service/repair request up to 24 hours before the scheduled appointment through our portal or WhatsApp support."
        }
    ];

    return (
        <div className="page-container">
            {/* Standard Page Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide">
                    <h1>Support Center</h1>
                    <p className="subtitle">We're here to help you with orders, product support, repairs, and warranty.</p>
                </div>
            </section>

            {/* QUICK SUPPORT CARDS - NATIVE GRID */}
            <section className="section-padding bg-light">
                <div className="container wide text-center">
                    <div className="section-title text-center max-w-2xl mx-auto mb-12">
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">Quick Actions</span>
                        <h2 className="text-3xl font-bold mt-2 text-dark-bg">Instant Support Access</h2>
                    </div>
                    <div className="grid-3-col">
                        {quickCards.map((card, idx) => (
                            <div key={idx} className="feature-card group text-left">
                                <div className="mb-4 text-primary bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition">
                                    {card.icon}
                                </div>
                                <h3>{card.title}</h3>
                                <p className="text-gray-600 mb-6">{card.description}</p>
                                <Link href={card.link} className="text-primary font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2">
                                    {card.buttonText} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ORDER TRACKING & REPAIR REQUEST GRID */}
            <section className="section-padding">
                <div className="container wide">
                    <div className="grid-2-col gap-large items-start">
                        {/* Order Tracking */}
                        <div id="track-order">
                            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Logistics</span>
                            <h2 className="text-3xl font-bold mb-6 text-dark-bg">Track Your Order</h2>
                            <p className="lead text-gray-600 mb-8 border-l-4 border-primary pl-4">
                                Enter your order credentials to retrieve the real-time status of your industrial hardware delivery.
                            </p>

                            <div className="contact-form-wrapper">
                                <form className="space-y-4">
                                    <div className="form-group">
                                        <label>Order ID</label>
                                        <input type="text" placeholder="ALS-XXXXX" className="w-full" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email or Phone</label>
                                        <input type="text" placeholder="Your contact details" className="w-full" />
                                    </div>
                                    <button type="button" className="btn-primary py-3 px-8 mt-4 hover:scale-105 transition-all w-full md:w-auto">
                                        INITIALIZE TRACKING
                                    </button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-[2px]">
                                        <Clock size={14} />
                                        <span>Status Preview</span>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
                                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Repair Form */}
                        <div id="repair-form" className="contact-form-wrapper">
                            <h3 className="text-2xl font-bold mb-6 text-dark-bg border-b pb-4">Repair Request</h3>
                            <form className="contact-form space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="+92 ..." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label>Product Name / Model</label>
                                    <input type="text" placeholder="e.g. Gree AC GS-18LM" />
                                </div>
                                <div className="form-group">
                                    <label>Problem Description</label>
                                    <textarea rows={4} placeholder="Briefly describe the issue..." className="resize-none" />
                                </div>
                                <button type="submit" className="btn-primary w-full py-3 font-bold text-lg mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faqs" className="section-padding">
                <div className="container wide max-w-4xl">
                    <div className="section-title text-center mb-12">
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">Knowledge Base</span>
                        <h2 className="text-3xl font-bold mt-2 text-dark-bg">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm transition-all">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-dark-bg text-lg">
                                        {faq.q}
                                    </span>
                                    <div className={`p-1 rounded-full transition-transform duration-300 ${faqOpen === idx ? 'rotate-180 bg-primary/10 text-primary' : 'text-gray-400'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${faqOpen === idx ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'}`}>
                                    <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SAFETY MANDATES */}
            <section className="section-padding bg-light">
                <div className="container wide">
                    <div className="bg-white rounded-lg border-l-8 border-red-600 p-10 md:p-16 shadow-lg relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-8 opacity-5">
                            <AlertTriangle size={200} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="md:w-1/3">
                                <div className="flex items-center gap-3 mb-4 text-red-600">
                                    <AlertTriangle size={32} />
                                    <h2 className="text-2xl font-bold uppercase tracking-tight">Safety First</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Your safety is our priority. Please follow these essential protocols when operating industrial equipment.
                                </p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Always disconnect power during repairs.</div>
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Wear industry-standard PPE at all times.</div>
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Ensure ventilation for air operations.</div>
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Authorized technician repairs only.</div>
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Visual inspection before every cycle.</div>
                                <div className="flex gap-3"><span className="text-red-500 font-bold">•</span> Dry storage for all electrical units.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportPage;
