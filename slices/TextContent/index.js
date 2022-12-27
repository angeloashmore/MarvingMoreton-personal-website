import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "./TextContent.module.css";

/**
 * @typedef {import("@prismicio/client").Content.TextContentSlice} TextContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextContentSlice>} TextContentProps
 * @param { TextContentProps }
 */
const TextContent = ({ slice }) => (
  <section className={`${classes["section-text"]} ${"container"}`}>
    <div className={classes["blog-text"]}>
      <PrismicRichText field={slice.primary.content} />
    </div>
  </section>
);

export default TextContent;
