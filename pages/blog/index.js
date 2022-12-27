import Link from "next/link";
import React from "react";
import Image from "next/image";
import BlogHero from "../../components/ui/Blog/BlogHero";

import TextBoxLight from "../../components/ui/Shared/TextBoxLight";
import ImageFeaturedRight from "../../components/ui/Shared/ImageFeaturedRight";
import CTAHorizontal from "../../components/ui/Shared/CTAHorizontal";

import BlogPostsList from "../../components/ui/Blog/BlogPostsList"

import Picturing from "../../components/ui/Shared/Picturing"

export default function BlogHome() {
  return (
    <React.Fragment>
      <BlogHero />
      <TextBoxLight />
      <ImageFeaturedRight />
      <BlogPostsList />
      {/* Pagination */}
      <Picturing />
      <CTAHorizontal />

    </React.Fragment>
  );
}
