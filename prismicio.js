import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';
import * as prismicH from '@prismicio/helpers';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
    {
        type: 'homepage',
        lang: 'en-ca',
        path: '/'
    },
    {
        type: 'homepage',
        lang: 'fr-wo',
        path: '/fr'
    },
    {
        type: 'page',
        lang: 'en-ca',
        path: '/:uid'
    },
    {
        type: 'page',
        lang: 'fr-wo',
        path: '/fr/:uid'
    },
    {
        type: 'seo_mother',
        lang: 'en-ca',
        path: '/seo'
    },
    {
        type: 'seo_mother',
        lang: 'fr-wo',
        path: 'fr/seo/'
    },
    {
        type: 'seo_child',
        lang: 'en-ca',
        path: '/seo/:uid'
    },
    {
        type: 'seo_child',
        lang: 'fr-wo',
        path: '/seo/fr/:uid'
    },
    {
        type: 'dev_mother',
        lang: 'en-ca',
        path: '/dev'
    },
    // {
    //     type: 'dev_mother',
    //     lang: 'fr-wo',
    //     path: 'fr/dev/'
    // },
    {
        type: 'dev_child',
        lang: 'en-ca',
        path: '/dev/:uid'
    },
    // {
    //     type: 'dev_child',
    //     lang: 'fr-wo',
    //     path: 'fr/dev/:uid'
    // },

    { type: 'blog_homepage', lang: 'en-ca', path: '/blog' },
    { type: 'blog_homepage', lang: 'fr-wo', path: '/blog/fr' },
    {
        type: 'blog_post',
        lang: 'en-ca',
        path: '/blog/:uid'
    }
    // {
    //     type: 'blog_post',
    //     lang: 'fr-wo',
    //     path: 'fr/blog/:uid'
    // }
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, {
        routes,
        ...config
    });

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req
    });

    return client;
};
