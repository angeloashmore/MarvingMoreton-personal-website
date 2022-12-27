import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "../../components/ui/Shared/TextBoxLight.module.css";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.TextBoxLightSlice} TextBoxLightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBoxLightSlice>} TextBoxLightProps
 * @param { TextBoxLightProps }
 */
const TextBoxLight = ({ slice }) => (
    <React.Fragment>
      <section className={classes["section-text-box-light"]}>
        <div className={classes["text-light-container"]}>
          <div className={classes["text-box"]}>
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
        </div>
      </section>
    </React.Fragment>
)

export default TextBoxLight
