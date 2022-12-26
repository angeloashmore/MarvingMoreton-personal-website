import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeBlogHero from "../../components/ui/Blog/HomeBlogHero"
import TextBoxLight from "../../components/ui/Shared/TextBoxLight";
import ImageFeaturedLeft from "../../components/ui/Shared/ImageFeaturedLeft";

import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

import { createClient } from '../../prismicio'
import { components } from '../../slices'

export default function BlogHome() {
  return (
    <React.Fragment>
      <HomeBlogHero />
      <TextBoxLight />
      <ImageFeaturedLeft />
  <SliceZone slices={page.data.slices} components={components} />
    </React.Fragment>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("blog_home");

  return {
    props: {
      page,
    },
  };
}
