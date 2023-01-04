import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../../prismicio';
import { components } from '../../slices';

const DevChild = ({ page, navigation, settings }) => {
    return <SliceZone slices={page.data.slices} components={components} />;
};

export default DevChild;

export async function getStaticProps({ params, previewData, locale }) {
    if (locale === 'fr') {
        locale = 'fr-wo';
    }

    const client = createClient({ previewData });

    const page = await client.getByUID('dev_child', params.uid, {
        lang: locale
    });

    return {
        props: {
            page
        }
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType('dev_child');

    return {
        paths: pages.map((page) => prismicH.asLink(page)),
        fallback: false
    };
}
