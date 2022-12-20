import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeBlogHero from "../../components/ui/Blog/HomeBlogHero";

import TextBoxLight from "../../components/ui/Shared/TextBoxLight";

export default function BlogHome() {
  return (
    <React.Fragment>
      <HomeBlogHero />
      <TextBoxLight />
    </React.Fragment>
  );
}
