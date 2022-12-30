import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from '../../components/ui/Shared/ImageFeatured.module.css';
// import photo from "../../../public/marving-audio.png";
// import photoGrouped from "../../../public/marving-audio-grouped.png";
// import illustration from "../../../public/illustrations/best-design-award.png";
import { PrismicRichText, PrismicText, PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { createClient } from '../../prismicio';

/**
 * @typedef {import("@prismicio/client").Content.BlogPostsListSlice} BlogPostsListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostsListSlice>} BlogPostsListProps
 * @param { BlogPostsListProps }
 */
const BlogPostsList = ({ slice }, blogPosts) => {
    // const {blogPosts} = props;
    // console.log(slice)

    return <div></div>;
};

export default BlogPostsList;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const blogPosts = await client.getAllByType('blog_post');
    // console.log(blogPosts)
    return {
        props: {
            blogPosts
        }
    };
}
