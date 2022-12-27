import React from 'react'
import Link from "next/link";
import Image from "next/image";
import classes from "../../components/ui/Shared/ImageFeatured.module.css";
// import photo from "../../../public/marving-audio.png";
// import photoGrouped from "../../../public/marving-audio-grouped.png";
// import illustration from "../../../public/illustrations/best-design-award.png";
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageFeaturedLeftSlice} ImageFeaturedLeftSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageFeaturedLeftSlice>} ImageFeaturedLeftProps
 * @param { ImageFeaturedLeftProps }
 */
const ImageFeaturedLeft = ({ slice }) => (
  <section className={classes["section--about"]}>
  <div className="container">
    <div className={classes["flex-box"]}>
      <div className={classes["image-side"]}>
        <PrismicNextImage field={slice.primary.illustration} alt={slice.primary.illustration.alt} width={281} height={140} className={classes["illustration"]}/>

        <div className={classes["image-box"]}>
          <PrismicNextImage field={slice.primary.image} alt={slice.primary.image.alt} className={classes["hero-image"]} width={539} height={600} />
        </div>
      </div>

      <div className={classes["text-side"]}>
        <span className={classes["upper-title"]}>{ slice.primary.upper_title }</span>
        <PrismicRichText field={slice.primary.title} />
        <div className={classes["paragraphs-box"]}>
          {slice?.items?.map((item, i) =>
                <React.Fragment key={i}>
                  <PrismicRichText field={item.paragraph} />
                </React.Fragment>
          )}
        </div>

        <div>
          <PrismicLink
              field={slice.primary.main_cta_link}
              className="btn-orange"
              href="mailto:marving.moreton@gmail.com"
              target="_blank"
              rel="noreferrer">
              { slice.primary.main_cta_anchor }
          </PrismicLink>

        </div>
      </div>
    </div>
  </div>
</section>
)

export default ImageFeaturedLeft
