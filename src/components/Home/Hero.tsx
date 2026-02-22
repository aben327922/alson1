"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css'; // Import dedicated styles

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/images/heroIndustrial.jpg',
            alt: 'Industrial Machinery'
        },
        {
            image: '/images/powertoolshero.jpg',
            alt: 'Power Tools'
        },
        {
            image: '/images/heroprecisionfabircation.jpg',
            alt: 'Precision Fabrication'
        },
        {
            image: '/images/heavyworkshiphero.jpg',
            alt: 'Heavy Duty Equipment'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero-section">
            <div className="container wide hero-inner">
                <div className="hero-content fade-in-up">
                    <span className="hero-tagline">INDUSTRIAL EXCELLENCE SINCE 1970</span>
                    <h1 id="heroTitle">Premium Industrial Equipment & Solutions</h1>
                    <p id="heroDesc">
                        Alsons Hardware is your trusted partner for top-grade industrial machinery, power tools, and high-performance engineering solutions. We deliver quality, reliability, and innovation to power your business forward.
                    </p>
                    <div className="hero-actions">
                        <Link href="/products" className="btn-primary">Explore Products</Link>
                        <Link href="/services" className="btn-secondary">Our Services</Link>
                    </div>

                    <div className="slider-controls">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="hero-image-wrapper fade-in-left">
                    <div className="hero-image-backdrop"></div>
                    <div className="hero-slides-container">
                        {slides.map((slide, index) => (
                            <div key={index} className={`hero-img ${index === currentSlide ? 'active-slide' : ''}`} style={{ opacity: index === currentSlide ? 1 : 0, transition: 'opacity 1s ease', position: 'absolute', inset: 0 }}>
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    priority={index === 0}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
