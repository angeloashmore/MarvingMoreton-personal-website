import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * Locale overrides for nicer URLs.
 */
export const localeOverrides = {
    'fr-wo': 'fr'
};

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
    {
        type: 'homepage',
        path: '/:lang?'
    },
    {
        type: 'homepage',
        lang: 'fr-wo',
        path: '/fr'
    },
    {
        type: 'page',
        path: '/:lang?/:uid'
    },
    {
        type: 'page',
        lang: 'fr-wo',
        path: '/fr/:uid'
    },
    {
        type: 'seo_mother',
        path: '/:lang?/seo'
    },
    {
        type: 'seo_mother',
        lang: 'fr-wo',
        path: '/fr/seo'
    },
    {
        type: 'seo_child',
        path: '/:lang?/seo/:uid'
    },
    {
        type: 'seo_child',
        lang: 'fr-wo',
        path: '/fr/seo/:uid'
    },
    {
        type: 'dev_mother',
        path: '/:lang?/dev'
    },
    {
        type: 'dev_mother',
        lang: 'fr-wo',
        path: '/fr/dev'
    },
    {
        type: 'dev_child',
        path: '/:lang?/dev/:uid'
    },
    {
        type: 'dev_child',
        lang: 'fr-wo',
        path: '/fr/dev/:uid'
    },
    {
        type: 'blog_homepage',
        path: '/:lang?/blog'
    },
    {
        type: 'blog_homepage',
        lang: 'fr-wo',
        path: '/fr/blog'
    },
    {
        type: 'blog_post',
        path: '/:lang?/blog/:uid'
    },
    {
        type: 'blog_post',
        lang: 'fr-wo',
        path: '/fr/blog/:uid'
    }
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
