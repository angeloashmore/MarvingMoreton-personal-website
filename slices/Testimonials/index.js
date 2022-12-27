import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../prismicio";
import classes from "./Testimonials.module.css";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => (
  <section className={classes["testimonials-section"]}>
    <div className={classes["testimonials-grid"]}>
      <div className={classes["background-box"]}>
        <div className={classes["intermediary-box"]}>
          <span>"</span>
          <h3>what they say about WOC</h3>
          <span>More than 3000 users have been helped by World Online Course.</span>
          <div className={classes["white-box"]}>
          <span>What they say</span>
          <p>“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Testimonials
