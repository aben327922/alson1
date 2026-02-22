/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'speedoblasting.com' },
            { protocol: 'https', hostname: 'www.clemcoindustries.com' },
            { protocol: 'https', hostname: 'www.elcometer.com' },
            { protocol: 'https', hostname: 'www.toku.co.jp' },
            { protocol: 'http', hostname: 'www.gison.com.tw' },
            { protocol: 'https', hostname: 'www.dewalt.com' },
            { protocol: 'https', hostname: 'cdn.makitatools.com' },
            { protocol: 'https', hostname: 'www.hitachi.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
};

export default nextConfig;
