import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import classes from './BlogPostsList.module.css';
import illustration from '../../../public/illustrations/random-illustration-black-men-focus.jpg';

export default function BlogPostsList() {
    return (
        <div className={classes['posts-section']} id="blog-posts">
            <h2 className="heading-secondary">Our blog posts</h2>

            <div className={classes['posts-grid']}>
                <div className={classes['post-card']}>
                    <Image
                        className={classes['illustration']}
                        src={illustration}
                        width={400}
                        height={400}
                        // src="/marving-hero-image.png"

                        alt="xx"

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    <h3>There is more than you know</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                    </p>
                </div>

                <div className={classes['post-card']}>
                    <Image
                        className={classes['illustration']}
                        src={illustration}
                        width={400}
                        height={400}
                        // src="/marving-hero-image.png"

                        alt="xx"

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    <h3>There is more than you know</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                    </p>
                </div>

                <div className={classes['post-card']}>
                    <Image
                        className={classes['illustration']}
                        src={illustration}
                        width={400}
                        height={400}
                        // src="/marving-hero-image.png"

                        alt="xx"

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    <h3>There is more than you know</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                    </p>
                </div>

                <div className={classes['post-card']}>
                    <Image
                        className={classes['illustration']}
                        src={illustration}
                        width={400}
                        height={400}
                        // src="/marving-hero-image.png"

                        alt="xx"

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    <h3>There is more than you know</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                    </p>
                </div>
            </div>
        </div>
    );
}
