import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "../../components/ui/Shared/HeroStandard.module.css";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.HeroStandardSlice} HeroStandardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroStandardSlice>} HeroStandardProps
 * @param { HeroStandardProps }
 */
const HeroStandard = ({ slice }) => (
    <React.Fragment>
      <section className={classes["section-hero"]}>
        <div className={classes["hero-container"]}>
          <div className={classes["text-box"]}>
            <PrismicRichText field={slice.primary.title} />
            <span >{ slice.primary.description }</span>
            <div className={classes["btn-box"]}>
              <PrismicLink
                className="btn-orange"
                target="_blank"
                rel="noreferrer"
                field={slice.primary.cta_main_link}>
                { slice.primary.cta_main_anchor }
              </PrismicLink>

              <PrismicLink
                className="btn-white"
                target="_blank"
                rel="noreferrer"
                field={slice.primary.cta_secondary_link}>
                { slice.primary.cta_secondary_anchor }
              </PrismicLink>
            </div>
          </div>
          <div className={classes["image-box"]}>
          <PrismicNextImage field={slice.primary.image}
          className={classes["hero-image"]}
          width={500}
          height={500}

          />
          </div>
        </div>
      </section>
      <hr className={classes["line"]} />
    </React.Fragment>
)

export default HeroStandard
