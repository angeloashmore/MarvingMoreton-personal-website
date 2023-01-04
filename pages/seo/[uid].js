import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import React from 'react';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import ChildsListSeo from '../../components/ui/Shared/ChildsListSeo';
import classes from '../../components/ui/Shared/ChildsListSeo.module.css';
const SeoChild = ({ page, navigation, settings, childList }) => {
    // console.log(childList.data);
    return (
        <React.Fragment>
            <SliceZone slices={page.data.slices} components={components} />
            <ChildsListSeo childList={childList} />
        </React.Fragment>
    );
};

export default SeoChild;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });

    const page = await client.getByUID('seo_child', params.uid);
    const childList = await client.getAllByType('seo_child');
    // console.log(pages);
    return {
        props: {
            page: page,
            childList
        }
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType('seo_child');

    return {
        paths: pages.map((page) => prismicH.asLink(page)),
        fallback: false
    };
}
