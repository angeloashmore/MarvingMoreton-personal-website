import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices';
import Layout from '../components/layout/Layout';

const Page = ({ page, navigation, settings }) => {
    return (
        <Layout alternateLanguages={page.alternate_languages}>
            <SliceZone slices={page.data.slices} components={components} />
        </Layout>
    );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
    console.log(locale);
    if (locale === 'fr') {
        locale = 'fr-wo';
    }
    console.log(locale);
    const client = createClient({ previewData });

    // const page = await client.getByUID('page', params.uid)
    const page = await client.getByUID('page', params.uid, { lang: locale });

    return {
        props: {
            page
        }
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const documents = await client.getAllByType('page', { lang: '*' });

    return {
        paths: documents.map((doc) => {
            return { params: { uid: doc.uid }, locale: doc.lang };
        }),
        fallback: false
    };
}
