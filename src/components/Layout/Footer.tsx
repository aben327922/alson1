import Link from 'next/link';
import { Settings } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="container wide footer-grid">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Settings className="logo-icon text-primary" size={24} />
                        ALSONS HARDWARE
                    </div>
                    <p>Your trusted partner for industrial equipment and business supplies since 1970.</p>
                </div>
                <div className="footer-links">
                    <h4>Products</h4>
                    <ul>
                        <li><Link href="/category/blasting">Sand Blasting</Link></li>
                        <li><Link href="/category/pneumatic">Pneumatic Tools</Link></li>
                        <li><Link href="/category/electric">Hand Tools</Link></li>
                        <li><Link href="/category/steel">Steel Profiles</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/support">Support Center</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/store-locator">Store Locator</Link></li>
                        <li><Link href="/contact">Privacy</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>📧 sales@alsonshardware.com</p>
                    <p>📞 +92 21 32410192</p>
                    <p>📍 Karachi, Pakistan</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container wide">
                    <p>&copy; 2025 Alsons Hardware. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
