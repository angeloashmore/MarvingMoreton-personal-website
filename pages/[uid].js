import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices';

const Page = ({ page, navigation, settings }) => {
    return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
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
