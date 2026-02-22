"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Settings, Search, Menu, X, Phone, Mail, MapPin, LifeBuoy } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Mobile submenu states
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const toggleMobileSubmenu = (menu: string) => {
        if (expandedMobileMenu === menu) {
            setExpandedMobileMenu(null);
        } else {
            setExpandedMobileMenu(menu);
        }
    };

    return (
        <>
            {/* SEARCH OVERLAY */}
            <div id="searchOverlay" className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
                <div className="search-container">
                    <button id="closeSearchBtn" className="close-search" onClick={toggleSearch}>
                        <X size={32} />
                    </button>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search products, services, or brands..."
                        autoFocus={isSearchOpen}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div id="searchResults" className="search-results">
                        {/* Dynamic Results would go here */}
                    </div>
                </div>
            </div>

            {/* TOP BAR */}
            <div className="top-bar">
                <div className="container wide top-bar-inner">
                    <div className="top-contact">
                        <span className="flex items-center gap-2"><Mail size={14} /> sales@alsonshardware.com</span>
                        <span className="flex items-center gap-2"><Phone size={14} /> +92 21 32410192</span>
                    </div>
                    <div className="top-actions">
                        <Link href="/store-locator" className="flex items-center gap-1"><MapPin size={14} /> Store Locator</Link>
                        <Link href="/support" className="flex items-center gap-1"><LifeBuoy size={14} /> Support</Link>
                    </div>
                </div>
            </div>

            {/* NAVIGATION */}
            <header className="main-header">
                <div className="container wide nav-container">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        <Settings className="logo-icon text-primary" size={32} strokeWidth={2.5} />
                        <div className="logo-text">
                            ALSONS
                            <span>HARDWARE</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            <li className="nav-item has-dropdown">
                                <Link href="/products" className="flex items-center gap-1">Products</Link>
                                <div className="dropdown-menu">
                                    <Link href="/products?division=hardware">Hardware & Tools</Link>
                                    <Link href="/products?division=appliances">Home Appliances</Link>
                                </div>
                            </li>
                            <li className="nav-item has-dropdown">
                                <Link href="/services" className="flex items-center gap-1">Services</Link>
                                <div className="dropdown-menu">
                                    <Link href="/service/machining">Machining</Link>
                                    <Link href="/service/fabrication">Fabrication</Link>
                                    <Link href="/service/maintenance">Maintenance</Link>
                                    <Link href="/service/consultation">Consultation</Link>
                                </div>
                            </li>
                            <li className="nav-item has-dropdown">
                                <Link href="/brands" className="flex items-center gap-1">Brands</Link>
                                <div className="dropdown-menu">
                                    <Link href="/brands?division=hardware">Hardware & Tools</Link>
                                    <Link href="/brands?division=appliances">Home Appliances</Link>
                                </div>
                            </li>
                            <li className="nav-item"><Link href="/about">About Us</Link></li>
                            <li className="nav-item"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Right Actions */}
                    <div className="nav-right">
                        <button className="search-trigger" id="searchTriggerBtn" onClick={toggleSearch}>
                            <Search size={22} />
                        </button>
                        <Link href="/quote" className="cta-btn">Get a Quote</Link>
                        <button className="hamburger" id="hamburgerBtn" aria-label="Menu" onClick={toggleMobileMenu}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu" style={{
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: '300px',
            }}>
                <div className="mobile-menu-header">
                    <span className="logo-text-mobile">ALSONS</span>
                    <button className="close-btn" id="closeMobileMenu" onClick={toggleMobileMenu}>
                        <X size={24} />
                    </button>
                </div>
                <ul className="mobile-nav-list">
                    {/* Products */}
                    <li className="mobile-item">
                        <div className="mobile-link-group" onClick={() => toggleMobileSubmenu('products')}>
                            <Link href="/products">Products</Link>
                            <span className="submenu-toggle">{expandedMobileMenu === 'products' ? '-' : '+'}</span>
                        </div>
                        {expandedMobileMenu === 'products' && (
                            <ul className="mobile-submenu" style={{ display: 'block' }}>
                                <li><Link href="/products?division=hardware" onClick={toggleMobileMenu}>Hardware & Tools</Link></li>
                                <li><Link href="/products?division=appliances" onClick={toggleMobileMenu}>Home Appliances</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Services */}
                    <li className="mobile-item">
                        <div className="mobile-link-group" onClick={() => toggleMobileSubmenu('services')}>
                            <Link href="/services">Services</Link>
                            <span className="submenu-toggle">{expandedMobileMenu === 'services' ? '-' : '+'}</span>
                        </div>
                        {expandedMobileMenu === 'services' && (
                            <ul className="mobile-submenu" style={{ display: 'block' }}>
                                <li><Link href="/service/machining">Machining</Link></li>
                                <li><Link href="/service/fabrication">Fabrication</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Brands */}
                    <li className="mobile-item">
                        <div className="mobile-link-group" onClick={() => toggleMobileSubmenu('brands')}>
                            <Link href="/brands">Brands</Link>
                            <span className="submenu-toggle">{expandedMobileMenu === 'brands' ? '-' : '+'}</span>
                        </div>
                        {expandedMobileMenu === 'brands' && (
                            <ul className="mobile-submenu" style={{ display: 'block' }}>
                                <li><Link href="/brands?division=hardware" onClick={toggleMobileMenu}>Hardware & Tools</Link></li>
                                <li><Link href="/brands?division=appliances" onClick={toggleMobileMenu}>Home Appliances</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="mobile-item"><Link href="/about">About Us</Link></li>
                    <li className="mobile-item"><Link href="/contact">Contact</Link></li>
                    <li className="mobile-item mt-4">
                        <Link href="/quote" className="cta-btn block text-center" onClick={toggleMobileMenu}>Get a Quote</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
