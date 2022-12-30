import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import classes from '../../components/ui/Blog/BlogPostsList.module.css';

import { PrismicLink, PrismicText } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../../prismicio';
import { components } from '../../slices';

export default function BlogHome({
    metaTitle,
    metaDescription,
    ogImage,
    page,
    blogPosts,
    navigation,
    settings
}) {
    return (
        <React.Fragment>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} key="desc" />
                {/* <!-- Twitter Card data --> */}
                <meta name="twitter:card" content="summary" />
                {/* <meta name="twitter:site" content="@publisher_handle" /> */}
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {/* <meta name="twitter:creator" content="@author_handle" /> */}
                {/* <-- Twitter Summary card images must be at least 120x120px --> */}
                <meta name="twitter:image" content={ogImage} />
                {/* <!-- Open Graph data --> */}
                <meta property="og:title" content={metaTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/blog" />
                <meta property="og:image" content={ogImage} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content="Dataaxy Jobs" />
            </Head>
            <SliceZone
                slices={page.data.slices}
                components={components}
                blogPosts={blogPosts}
            />

            <section className={classes['section-blog-posts']} id="blog-posts">
                <div className="container">
                    <h2 className="heading-secondary">Latest Blog Posts</h2>
                    {/* POST GRID */}
                    <ul className={classes['cards-list']}>
                        {blogPosts &&
                            blogPosts.map((blogPost) => (
                                // POST ITEM
                                <li
                                    className={classes['blog-post-card']}
                                    key={blogPost.id}
                                >
                                    <PrismicLink
                                        document={blogPost}
                                        className={classes['card-link']}
                                    >
                                        <PrismicNextImage
                                            className={
                                                classes['post-featured-image']
                                            }
                                            field={blogPost.data.image_featured}
                                            width={300}
                                            height={300}
                                            // layout="responsive"
                                        />
                                        <div className={classes['tag-box']}>
                                            <span className={classes.tag}>
                                                Tech
                                            </span>
                                        </div>

                                        <h3 className={classes.title}>
                                            {blogPost.data.title}
                                        </h3>

                                        {blogPost.data.excerpt && (
                                            <p>{`${blogPost.data.excerpt.substring(
                                                0,
                                                120
                                            )}...`}</p>
                                        )}
                                    </PrismicLink>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
            {/* <BlogHero /> */}
            {/* <TextBoxLight /> */}
            {/* <ImageFeaturedRight /> */}
            {/* Pagination */}
            {/* <Picturing /> */}
            {/* <CTAHorizontal /> */}
        </React.Fragment>
    );
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const page = await client.getSingle('blog_homepage');
    const blogPosts = await client.getAllByType('blog_post');

    return {
        props: {
            metaTitle: page.data.meta_title,
            metaDescription: page.data.meta_description,
            ogImage: page.data.og_image.url,
            page: page,
            blogPosts
        }
    };
}
