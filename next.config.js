const prismic = require('@prismicio/client');

const sm = require('./sm.json');

const localeOverrides = {
    'en-ca': 'en-ca',
    'fr-wo': 'fr'
};

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
    const client = prismic.createClient(sm.apiEndpoint);

    const repository = await client.getRepository();
    const locales = repository.languages.map(
        (lang) => localeOverrides[lang.id]
    );

    // const languages = repository.languages;
    // // console.log(languages);

    // const locales = languages.map((lang) => {
    //     if (lang.id === 'fr-wo') {
    //         languages[1] = '/fr';
    //         return '/fr';
    //     }
    //     return lang.id;
    // });
    // console.dir(locales[1]);

    return {
        reactStrictMode: true,
        swcMinify: true,

        i18n: {
            // These are all the locales you want to support in
            // your application
            locales,
            // This is the default locale you want to be used when visiting
            // a non-locale prefixed path e.g. `/hello`
            defaultLocale: locales[0],
            // defaultLocale: 'en-ca'
            localeDetection: false
        },
        images: {
            domains: [
                'marving-moreton.cdn.prismic.io',
                'images.prismic.io',
                'res.cloudinary.com'
            ]
        }
    };
};

module.exports = nextConfig;
