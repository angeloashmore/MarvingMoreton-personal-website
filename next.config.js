const prismic = require('@prismicio/client');

const sm = require('./sm.json');

/**
 * @returns {import('next').NextConfig}
 */
module.exports = async () => {
    const client = prismic.createClient(sm.apiEndpoint);

    const repository = await client.getRepository();
    const locales = repository.languages.map((lang) => lang.id);

    return {
        reactStrictMode: true,
        swcMinify: true,
        i18n: {
            // These are all the locales you want to support in
            // your application
            locales,
            // This is the default locale you want to be used when visiting
            // a non-locale prefixed path e.g. `/hello`
            defaultLocale: locales[0]
            // defaultLocale: 'en-US'
        },
        images: {
            loader: 'imgix',
            path: '',
            domains: [
                'marving-moreton.cdn.prismic.io',
                'images.prismic.io',
                'res.cloudinary.com'
            ]
        }
    };
};

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
