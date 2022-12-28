import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "../../components/ui/Homepage/HeroHome.module.css";
import Link from "next/link";


/**
 * @typedef {import("@prismicio/client").Content.HeroHomeSlice} HeroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHomeSlice>} HeroHomeProps
 * @param { HeroHomeProps }
 */
const HeroHome = ({ slice }) => (
  <section className={classes["section--hero"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-text-box"]}>

          <div className={classes["hero-subtitle"]}>
            { slice.primary.upper_title_content } <span className={classes.emoji}>{ slice.primary.emoji }</span>
          </div>

          <div className={classes["hero-title"]}>

            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className={classes["hero-title"]}>{children}</h2>
                ),
              }}
        />


          </div>

          <div className={classes["hero-description"]}>
            { slice.primary.description }
          </div>

          <div className="btn-orange">
            <PrismicLink className="btn" target="_blank" rel="noreferrer" field={slice.primary.cta_main_link}> { slice.primary.cta_main_anchor } </PrismicLink>
            {/* <Link href="mailto:marving.moreton@gmail.com" target="_blank" rel="noreferrer" >Hire Me</Link> */}
          </div>

        </div>

        <div className={classes["image-box"]} >
          <PrismicNextImage field={slice.primary.image} className={classes["hero-image"]} priority/>

        </div>
      </div>

    </section>
)

export default HeroHome
