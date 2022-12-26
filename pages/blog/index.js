import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeBlogHero from "../../components/ui/Blog/HomeBlogHero"
import TextBoxLight from "../../components/ui/Shared/TextBoxLight";
<<<<<<< HEAD
<<<<<<< HEAD
import ImageFeaturedLeft from "../../components/ui/Shared/ImageFeaturedLeft";

import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

import { createClient } from '../../prismicio'
import { components } from '../../slices'

export default function BlogHome({ page, navigation, settings }) {
=======
=======
>>>>>>> parent of 02f2368 (set up new component blogpostlist)

export default function BlogHome() {
>>>>>>> parent of 02f2368 (set up new component blogpostlist)
  return (
    <React.Fragment>
      <HomeBlogHero />
      <TextBoxLight />
<<<<<<< HEAD
<<<<<<< HEAD
      <ImageFeaturedLeft />
  <SliceZone slices={page.data.slices} components={components} />
=======
>>>>>>> parent of 02f2368 (set up new component blogpostlist)
=======
>>>>>>> parent of 02f2368 (set up new component blogpostlist)
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
