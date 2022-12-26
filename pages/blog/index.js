import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeBlogHero from "../../components/ui/Blog/HomeBlogHero";

import TextBoxLight from "../../components/ui/Shared/TextBoxLight";
import ImageFeaturedLeft from "../../components/ui/Shared/ImageFeaturedLeft";
export default function BlogHome() {
  return (
    <React.Fragment>
      <HomeBlogHero />
      <TextBoxLight />
      <ImageFeaturedLeft />
    </React.Fragment>
  );
}
