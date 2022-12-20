import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./FeaturedAbout.module.css";
import photo from "../../../public/marving-audio.png";

export default function FeaturedAbout() {
  return (
    <section className={classes["section-testimonials"]}>
      <div className={classes["background"]}>
        <div className={classes["fixed-box"]}>
          <span>&quot;"</span>
          <h2>What they say about xxx</h2>
          <span>
            More than 3000 users have been helped by World Online Course.
          </span>
        </div>
        <div className={classes["slider-box"]}>
          <div className={classes["upper-line"]}>
            <span>What they say</span>
          </div>

          <div>
            “Studying at WOC is fun, the curriculum is complete, the instructors
            are competent, and the assignments given are also relevant to the
            current scope of work.”
          </div>

          <div className={classes["bottom-line"]}>
            <div className={classes["profile"]}></div>
            <div className={classes["slider-buttons"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
