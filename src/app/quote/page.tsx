import { Mail, Phone, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Quote = () => {
    return (
        <div className="page-container bg-white min-h-screen" style={{ color: '#1a1c20' }}>
            {/* Direct & Clean Header */}
            <section className="bg-white border-b border-gray-100 pt-10 pb-8">
                <div className="container wide text-center flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3 font-bold tracking-[3px] text-[10px] uppercase mb-4" style={{ color: '#D35400' }}>
                        <span className="w-8 h-[2px]" style={{ backgroundColor: '#D35400' }}></span>
                        Commercial Department
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2" style={{ color: '#1a1c20' }}>
                        Get a <span style={{ color: '#D35400', fontStyle: 'italic' }}>Formal Quotation</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm md:text-base font-medium leading-relaxed mx-auto" style={{ color: '#6b7280' }}>
                        Standard processing time for industrial inquiries is 24 business hours. Please provide precise technical specifications for accurate estimation.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container wide">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Form Column */}
                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white border border-gray-200 shadow-sm p-8 md:p-10">
                                <h2 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3" style={{ color: '#1a1c20' }}>
                                    <span className="w-1.5 h-6" style={{ backgroundColor: '#D35400' }}></span>
                                    Project Inquiry Specifications
                                </h2>

                                <form className="space-y-6">
                                    {/* Contact Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 border-b border-gray-50 pb-2 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#9ca3af' }}>01. Company & Contact Details</span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Full Name *</label>
                                                <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }} placeholder="e.g. Abdullah Khan" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Company / Organization</label>
                                                <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }} placeholder="Legal Company Name" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Email Address *</label>
                                                <input type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }} placeholder="name@company.com" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Contact Number *</label>
                                                <input type="tel" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }} placeholder="+92 21 XXXXXXX" required />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Requirement Section */}
                                    <div className="space-y-4 pt-4 mt-6">
                                        <div className="flex items-center gap-2 border-b border-gray-50 pb-2 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#9ca3af' }}>02. Requirement Analysis</span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Interest Category</label>
                                                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }}>
                                                    <option>Air Compressors & Parts</option>
                                                    <option>Pneumatic & Blasting</option>
                                                    <option>Power Tools Procurement</option>
                                                    <option>Industrial Fabrication</option>
                                                    <option>Technical Services</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Subject of Inquiry</label>
                                                <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold" style={{ color: '#1a1c20' }} placeholder="e.g. Spare parts list" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="block text-[10px] font-black uppercase mb-1.5" style={{ color: '#1a1c20' }}>Message / Technical Specifications *</label>
                                            <textarea rows={5} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 outline-none text-sm font-semibold resize-none" style={{ color: '#1a1c20' }} placeholder="Please list quantities, model numbers, or project technical details..." required></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-50">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-green-100" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                                            <ShieldCheck size={14} />
                                            <span className="text-[9px] font-black uppercase tracking-tight">Enterprise Secure Data</span>
                                        </div>
                                        {/* FORCED SMALL ORANGE BUTTON */}
                                        <button type="submit" className="sm:w-auto font-black uppercase tracking-[1.5px] text-[11px] transition-all flex items-center justify-center gap-3 shadow-lg"
                                            style={{ backgroundColor: '#D35400', color: '#ffffff', border: 'none', minWidth: '160px', padding: '20px 24px' }}>
                                            Send Quote Request
                                            <Send size={12} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* SIDEBAR - FORCED LIGHT THEME */}
                        <div className="lg:w-5/12 w-full space-y-8">

                            {/* Need Immediate Assistance? Box */}
                            <div className="p-8 shadow-sm" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #D35400' }}>
                                <h4 className="text-lg font-black uppercase tracking-wider mb-8" style={{ color: '#1a1c20' }}>Need Immediate Assistance?</h4>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm" style={{ color: '#D35400' }}><Phone size={18} /></div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase mb-1 tracking-widest" style={{ color: '#9ca3af' }}>Direct Sales Line</p>
                                            <p className="text-xl font-bold tracking-tight" style={{ color: '#1a1c20' }}>+92 21 32410192</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm" style={{ color: '#D35400' }}><Mail size={18} /></div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase mb-1 tracking-widest" style={{ color: '#9ca3af' }}>Procurement Department</p>
                                            <p className="text-base font-bold tracking-tight" style={{ color: '#1a1c20' }}>sales@alsonshardware.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm" style={{ color: '#D35400' }}><Clock size={18} /></div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase mb-1 tracking-widest" style={{ color: '#9ca3af' }}>Standard Office Hours</p>
                                            <p className="text-base font-bold tracking-tight" style={{ color: '#1a1c20' }}>Mon - Sat: 09:00 - 18:00 PKT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Assurance Panel */}
                            <div className="bg-white border border-gray-200 p-8 shadow-sm">
                                <h4 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-gray-50 pb-2" style={{ color: '#1a1c20' }}>Industrial Assurance</h4>
                                <div className="space-y-5">
                                    <div className="flex gap-3 text-xs font-semibold leading-relaxed" style={{ color: '#4b5563' }}>
                                        <CheckCircle2 size={18} style={{ color: '#D35400', flexShrink: 0 }} />
                                        <span>Official distribution partner for certified global industrial brands.</span>
                                    </div>
                                    <div className="flex gap-3 text-xs font-semibold leading-relaxed" style={{ color: '#4b5563' }}>
                                        <CheckCircle2 size={18} style={{ color: '#D35400', flexShrink: 0 }} />
                                        <span>Full technical specification verification before commercial quoting.</span>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-50 text-[10px] font-black uppercase italic tracking-[2px]" style={{ color: '#d1d5db' }}>
                                    Reliability Built Since 1970
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Bottom Stripe */}
            <div className="h-4 w-full mt-auto" style={{ backgroundColor: '#1a1c20' }}></div>
        </div>
    );
};

export default Quote;
