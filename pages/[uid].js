import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices';
import Layout from '../components/layout/Layout';
import { resolveLocaleFromNext } from '../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../lib/withAlternateLanguageURLs';

const Page = ({ page }) => {
    return (
        <Layout alternateLanguages={page.alternate_languages}>
            <SliceZone slices={page.data.slices} components={components} />
        </Layout>
    );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
    const client = createClient({ previewData });
    const resolvedLocale = resolveLocaleFromNext(locale);

    const page = await client.getByUID('page', params.uid, {
        lang: resolvedLocale
    });
    const pageWithAlternateLanguageURLs = await withAlternateLanguageURLs(
        page,
        client
    );

    return {
        props: {
            page: pageWithAlternateLanguageURLs
        }
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const documents = await client.getAllByType('page', { lang: '*' });

    return {
        paths: documents.map((doc) => prismicH.asLink(doc)),
        fallback: false
    };
}
