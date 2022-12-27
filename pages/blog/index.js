import Link from "next/link";
import React from "react";
import Image from "next/image";
import BlogHero from "../../components/ui/Blog/BlogHero";

import TextBoxLight from "../../components/ui/Shared/TextBoxLight";
import ImageFeaturedRight from "../../components/ui/Shared/ImageFeaturedRight";
import CTAHorizontal from "../../components/ui/Shared/CTAHorizontal";

import BlogPostsList from "../../components/ui/Blog/BlogPostsList"

import Picturing from "../../components/ui/Shared/Picturing"

import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

import { createClient } from '../../prismicio'
import { components } from '../../slices'

export default function BlogHome({ page, navigation, settings }) {
  return (
    <React.Fragment>
      <SliceZone slices={page.data.slices} components={components} />
      {/* <BlogHero /> */}
      <TextBoxLight />
      <ImageFeaturedRight />
      <BlogPostsList />
      {/* Pagination */}
      <Picturing />
      <CTAHorizontal />


    </React.Fragment>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("blog_homepage");

  return {
    props: {
      page,
    },
  };
}
