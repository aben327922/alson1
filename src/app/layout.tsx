import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import WhatsAppButton from '../components/Layout/WhatsAppButton';

export const metadata: Metadata = {
    title: 'Alsons Hardware Industrial',
    description: 'Futuristic Industrial Hardware',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body suppressHydrationWarning>
                <div className="app-container">
                    <Navbar />
                    {children}
                    <WhatsAppButton />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
