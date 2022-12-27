import React from 'react'
import Link from "next/link";
import Image from "next/image";
import classes from "../../components/ui/Shared/ImageFeatured.module.css";
// import photo from "../../../public/marving-audio.png";
// import photoGrouped from "../../../public/marving-audio-grouped.png";
// import illustration from "../../../public/illustrations/best-design-award.png";
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../prismicio";

/**
 * @typedef {import("@prismicio/client").Content.BlogPostsListSlice} BlogPostsListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostsListSlice>} BlogPostsListProps
 * @param { BlogPostsListProps }
 */
const BlogPostsList = ({ slice, blogPosts}) => (
  <div className={classes["posts-section"]}>
      <h2 className="heading-secondary">Our blog posts</h2>

      <div className={classes["posts-grid"]}>
      {/* Mapping over */}
      {(blogPosts.length > 1) && blogPosts.map((blogPost) => (
        <div className={classes["post-card"]} key={blogPost.id}>
          <PrismicLink document={blogPost}>
            <PrismicNextImage
                  className={classes["illustration"]}
                  field={blogPost.data.image_featured}
                  width={400}
                  height={400}
                />
              <h3>{blogPost.data.title}</h3>
              <p>{blogPost.data.excerpt}</p>
            </PrismicLink>
        </div>
      ))}
      </div>
    </div>
)

export default BlogPostsList

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });


  const blogPosts = await client.getAllByType("blog_post");
  return {
    props: {
      blogPosts,
    },
  };
}
