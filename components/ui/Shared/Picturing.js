import React from "react";
import classes from "./Image.module.css";
import Image from "next/image";

import illustration from "../../../public/illustrations/random-illustration-black-men-focus.jpg";
const Picturing = () => (
  <section className={`${classes["section-image"]} ${"container"}`}>
    <div className={classes["blog-image"]}>
    <Image
              className={classes["illustration"]}
              src={illustration}
              width={500}
              height={500}
              // src="/marving-hero-image.png"
              alt="xx"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
    </div>
  </section>
);

export default Picturing;
