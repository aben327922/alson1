import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-container">
            {/* Page Header */}
            <section className="page-header bg-dark text-white">
                <div className="container wide">
                    <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                </div>
            </section>

            <section className="section-padding">
                <div className="container wide">
                    <div className="grid-2-col gap-large items-start">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2 className="text-3xl font-bold mb-6 text-dark-bg">Get in Touch</h2>
                            <p className="lead text-gray-600 mb-8 border-l-4 border-primary pl-4">
                                Have a question about our products or services? Need a quote for a large project?
                                Reach out to our team and we'll get back to you as soon as possible.
                            </p>

                            <div className="contact-details space-y-8">
                                <div className="contact-item flex gap-4">
                                    <div className="icon-box bg-light p-3 rounded-full text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-dark-bg">Visit Us</h4>
                                        <p className="text-gray-600">Alsons Hardware, Industrial Estate,<br />Karachi, Pakistan</p>
                                    </div>
                                </div>

                                <div className="contact-item flex gap-4">
                                    <div className="icon-box bg-light p-3 rounded-full text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-dark-bg">Call Us</h4>
                                        <p className="text-gray-600 font-medium">+92 21 32410192</p>
                                        <p className="text-gray-600 font-medium">+92 310 2564594 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="contact-item flex gap-4">
                                    <div className="icon-box bg-light p-3 rounded-full text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-dark-bg">Email Us</h4>
                                        <p className="text-gray-600 font-medium hover:text-primary transition">
                                            <a href="mailto:sales@alsonshardware.com">sales@alsonshardware.com</a>
                                        </p>
                                        <p className="text-gray-600 font-medium hover:text-primary transition">
                                            <a href="mailto:info@alsonshardware.com">info@alsonshardware.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item flex gap-4">
                                    <div className="icon-box bg-light p-3 rounded-full text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-dark-bg">Business Hours</h4>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-500 italic">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-dark-bg border-b pb-4">Send Message</h3>
                            <form className="contact-form space-y-4">
                                <div className="form-group">
                                    <label htmlFor="name" className="block mb-2 font-bold text-sm text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="block mb-2 font-bold text-sm text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject" className="block mb-2 font-bold text-sm text-gray-700">Subject</label>
                                    <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="Inquiry about..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="block mb-2 font-bold text-sm text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full py-3 font-bold text-lg mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="map-section bg-gray-100 h-96 relative overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.601568266209!2d67.00113665!3d24.860734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e46c772c727%3A0x6d0df272848c4883!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1646213793610!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Alsons Hardware Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
