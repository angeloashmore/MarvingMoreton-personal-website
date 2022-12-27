import React from "react";
import { PrismicRichText } from "@prismicio/react";
// import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import classes from "./ImageAlone.module.css";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
  <section className={`${classes["section-image"]} ${"container"}`}>
    <div className={classes["blog-image"]}>
      <PrismicNextImage field={slice.primary.image} />
    </div>
  </section>
);

export default Image;
