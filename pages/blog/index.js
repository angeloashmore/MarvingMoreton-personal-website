import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import BlogHero from '../../components/ui/Blog/BlogHero';

import TextBoxLight from '../../components/ui/Shared/TextBoxLight';
import ImageFeaturedRight from '../../components/ui/Shared/ImageFeaturedRight';
import CTAHorizontal from '../../components/ui/Shared/CTAHorizontal';

import Picturing from '../../components/ui/Shared/Picturing';

import classes from '../../components/ui/Blog/BlogPostsList.module.css';

import { PrismicLink, PrismicText } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../../prismicio';
import { components } from '../../slices';

export default function BlogHome({ page, navigation, settings, blogPosts }) {
    return (
        <React.Fragment>
            <SliceZone
                slices={page.data.slices}
                components={components}
                blogPosts={blogPosts}
            />

            <section className={classes['section-blog-posts']}>
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
                                    <PrismicLink document={blogPost} className={classes['card-link']}>
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
            page,
            blogPosts: blogPosts
        }
    };
}
