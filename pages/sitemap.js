import React from "react";
import Head from "next/head";
import Link from "next/link";
// import { PrismicLink, PrismicText } from "@prismicio/react";
// // import { createClient } from "../prismicio";


function SitemapHtml({ pillarPages, companies }) {
  const metaTitle = "Exhaustive sitemap of marvingmoreton.com";
  const metaDesc =
    "Welcome to the sitemap of marvingmoreton.com: find all the pages availables on the website of Marving Moreton.";
  const ImageFeatured =
    "https://res.cloudinary.com/dl4mhtc4y/image/upload/v1668189922/dataai-jobs-cover_iwo4eh.png";

  return (
    <React.Fragment>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:site" content="@publisher_handle" /> */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        {/* <meta name="twitter:creator" content="@author_handle" /> */}
        {/* <-- Twitter Summary card images must be at least 120x120px --> */}
        <meta name="twitter:image" content={ImageFeatured} />
        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sitemap" />
        <meta property="og:image" content={ImageFeatured} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:site_name" content="Dataaxy Jobs" />
      </Head>
    </React.Fragment>
  );
}

export default SitemapHtml;

// Insert getStaticProps once Prismic set up
