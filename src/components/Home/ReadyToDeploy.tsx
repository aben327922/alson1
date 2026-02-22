"use client";

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import './ReadyToDeploy.css';

const ReadyToDeploy = () => {
    return (
        <section className="deploy-section">
            <div className="container wide deploy-inner">
                <div className="deploy-card">
                    <div className="deploy-left">
                        <div className="deploy-badge">Ready to Deploy</div>
                        <h3 className="deploy-title">Elevate Your Industrial Capacity</h3>
                        <p className="deploy-desc">Ready to implement high-precision solutions in your facility? Our technical consultants are standing by to discuss your custom fabrication or machining project.</p>
                        <Link href="/quote" className="btn-primary deploy-cta">Schedule Consult</Link>
                    </div>

                    <div className="deploy-right">
                        <div className="deploy-contact">
                            <div className="contact-item">
                                <MapPin size={20} />
                                <div className="contact-text">
                                    <strong>Location</strong>
                                    <div>Karachi, Pakistan</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone size={20} />
                                <div className="contact-text">
                                    <strong>Call Now</strong>
                                    <div><a href="tel:+923102564594">+92 310 256 4594</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToDeploy;
