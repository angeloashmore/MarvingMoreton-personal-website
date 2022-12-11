import classes from "./HeroHome.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import photo from "../../public/marving-hero-image.png";

export default function HeroHome() {
  return (
    <section className={classes["section--hero"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-text-box"]}>

          <div className={classes["hero-subtitle"]}>
              Hello, I’m Marving <span className={classes.emoji}>👋🏽</span>
          </div>

          <div className={classes["hero-title"]}>
            Full-Stack Developer, <br/> Designer & SEO Expert
          </div>

          <div className={classes["hero-description"]}>
              I help companies reach their goals by
              designing and building human-centered digital
              products.
          </div>

          <div className={`${classes["hero-cta"]} ${"btn-orange"}`}>
            <Link href="mailto:marving.moreton@gmail.com" target="_blank" rel="noreferrer" >Hire Me</Link>
          </div>

          </div>
        <div>
        <Image
            className={classes["hero-image"]}
            src={photo}
            // width={743}
            // height={800}
            // src="/marving-hero-image.png"

            alt="Marving Moreton"

            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>

    </section>

  )
}
