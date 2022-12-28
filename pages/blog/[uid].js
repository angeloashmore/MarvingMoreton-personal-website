import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'
import React from 'react';
import Head from "next/head";

import PostHeader from "../../components/ui/Blog//PostHeader";

import { useRouter } from "next/router";


// /** @param {import("next").InferGetStaticPropsType<typeof getStaticProps>} */
export default function Page({
  page,
  metaTitle,
  metaDescription,
  ogImage,
  title,
}) {
  // Structured data from Prismic (printed in one line?)
  // /** @type {import('schema-dts').Article} */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: {
      "@type": "Person",

      name: "Marving",
      // To be uncommented when author is configurated:
      // name: prismicH.asText(page.data.author.data.name),
      // // The full URL must be provided, including the website's domain.
      // url: new URL(
      //   prismicH.asLink(page.data.author),
      //   'https://example.com'
      // ),
    },
    image: prismicH.asImageSrc(page.data.featuredimage),
    // datePublished: page.data.publication_date,
    // dateModified: page.data.last_publication_date,
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  // Custom version
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: metaDescription,
    author: [
      {
        "@type": "Person",
        name: "Marving",
      },
    ],
    image: ogImage,
    // datePublished: page.data.publication_date,
    // dateModified: page.data.last_publication_date,
  };

  function schemaBlog() {
    // prettier-ignore
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${title}",
        "description": "${metaDescription}",
        "image": "${ogImage}",
        "author":
          {
            "@type": "Person",
            "name": "Marving"
          }
      }
      `,
    };
  }

  return (
    <React.Fragment>
      {/* Work dynamically, but do not refresh when switching page */}
      {/* <StructuredData data={structuredData} /> */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaBlog()}
          key="org-jsonld"
        />
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
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={currentRoute} /> */}
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Dataaxy Jobs" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        /> */}
      </Head>
      <PostHeader title={page.data.title[0].text} />
      <SliceZone slices={page.data.slices} components={components} />
      {/* <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.id}>{blogPost.data.title}</li>
        ))}
      </ul> */}
    </React.Fragment>
  );
}

// /** @param {import("next").GetStaticPropsContext<{ uid: string }>} */
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blog_post", params.uid);
  const blogPosts = await client.getAllByType("blog_post");

  // console.log("Page: ");
  // console.log(page);
  console.log(page.data.title[0].text)
  return {
    props: {
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      ogImage: page.data.og_image.url,
      // title: page.data.title,
      datePublished: page.data.publication_date,
      page: page,
      blogPosts: blogPosts,
    },
  };
}

// /** @type {import("next").GetStaticPaths} */
export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("blog_post");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
