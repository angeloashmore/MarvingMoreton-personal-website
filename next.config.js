/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};

module.exports = {
    images: {
        domains: [
            'marving-moreton.cdn.prismic.io',
            'images.prismic.io',
            'res.cloudinary.com'
        ]
    }
};
