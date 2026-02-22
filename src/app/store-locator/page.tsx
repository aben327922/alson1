import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

const StoreLocator = () => {
    return (
        <div className="page-container bg-white min-h-screen text-[#1a1c20]">
            {/* Standard Subpage Header - Consistent with Quote.tsx */}
            <section className="bg-white border-b border-gray-100 pt-10 pb-8">
                <div className="container wide text-center flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[3px] text-gray-400">Logistics & Distribution</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1c20] mb-2">
                        Store <span className="text-primary italic">Locator</span>
                    </h1>
                    <p className="mt-4 text-gray-500 text-base max-w-2xl leading-relaxed mx-auto">
                        Locate our physical headquarters and regional distribution centers. Our facilities are equipped to handle large-scale industrial procurement and technical distribution.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 md:py-24 bg-[#fcfcfc]">
                <div className="container wide">
                    <div className="max-w-6xl mx-auto">

                        {/* Integrated Headquarters Card */}
                        <div className="bg-white border border-gray-200 shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12">

                                {/* Info Column */}
                                <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <h2 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3 text-[#1a1c20]">
                                        <span className="w-1.5 h-6 bg-primary"></span>
                                        Main Headquarters
                                    </h2>

                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={18} className="text-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Branch Address</span>
                                            </div>
                                            <p className="text-base font-bold text-[#1a1c20] leading-relaxed">
                                                Plot No. 42-C, Industrial Estate,<br />
                                                Karachi Metropolitan Area,<br />
                                                Sindh - 75500, Pakistan
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Phone size={18} className="text-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contact Channels</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-lg font-black text-[#1a1c20] tracking-tight">+92 21 32410192</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase">Primary Sales Line</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Clock size={18} className="text-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Business Hours</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-base font-bold text-[#1a1c20]">Mon - Sat: 09:00 - 18:00 PKT</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase italic">Sunday: Operational Support Offline</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded">
                                            <ShieldCheck size={16} className="text-green-600" />
                                            <span className="text-[9px] font-bold uppercase tracking-tighter text-gray-500">Verified Location</span>
                                        </div>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2.5 bg-primary text-white font-black uppercase tracking-[1px] text-[10px] hover:bg-[#1a1c20] transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/10"
                                        >
                                            Get Directions
                                            <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>

                                {/* Map Column - Integrated Directly into the Card */}
                                <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] relative bg-gray-50">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.601568266209!2d67.00113665!3d24.860734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e46c772c727%3A0x6d0df272848c4883!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1646213793610!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        title="Alsons Hardware Location"
                                        className="relative z-0 opacity-90"
                                    ></iframe>

                                    {/* Map HUD Decoration */}
                                    <div className="absolute top-4 right-4 bg-[#1a1c20]/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-mono font-bold text-white uppercase tracking-widest z-10 border border-white/10">
                                        REF: KHI_OFFICE_01
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Additional Info / Trust Section */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white border border-gray-200 p-6 flex gap-4">
                                <CheckCircle2 className="text-primary shrink-0" size={20} />
                                <div>
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1c20] mb-1">Industrial Access</h4>
                                    <p className="text-xs text-gray-500 font-medium">Located near major logistics hubs for rapid stock deployment.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 p-6 flex gap-4">
                                <CheckCircle2 className="text-primary shrink-0" size={20} />
                                <div>
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1c20] mb-1">On-Site Support</h4>
                                    <p className="text-xs text-gray-500 font-medium">Technical staff available for equipment testing and demo.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 p-6 flex gap-4">
                                <CheckCircle2 className="text-primary shrink-0" size={20} />
                                <div>
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1c20] mb-1">Enterprise Ready</h4>
                                    <p className="text-xs text-gray-500 font-medium">Large-scale procurement and bulk supply storage on premises.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Industrial Bottom Stripe */}
            <div className="h-6 bg-[#1a1c20] border-t-4 border-primary w-full mt-auto"></div>
        </div>
    );
};

export default StoreLocator;
