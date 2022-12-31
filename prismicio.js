import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * A Link Resolver is used rather than a Route Resolver because we need to
 * resolve URLs for documents' `alternate_languages` items. The
 * `alternate_languages` array does not include URLs.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export function linkResolver(doc) {
    console.log(doc);
    switch (doc.type) {
        case 'homepage':
            return '/';
        case 'seo_mother':
            return `/seo`;
        case 'seo_child':
            return `seo/${doc.uid}`;
        case 'dev_mother':
            return `/dev`;
        case 'dev_child':
            return `dev/${doc.uid}`;
        case 'blog_homepage':
            return `/blog`;
        case 'blog_post':
            return `/blog/${doc.uid}`;
        case 'page':
            return `/${doc.uid}`;
        default:
            return null;
    }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, config);

    prismicNext.enableAutoPreviews({ client, previewData, req });

    return client;
};
