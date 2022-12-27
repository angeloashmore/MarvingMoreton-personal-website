import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../prismicio";
import classes from "./ChildsList.module.css";

/**
 * @typedef {import("@prismicio/client").Content.InternalChildsSlice} InternalChildsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InternalChildsSlice>} InternalChildsProps
 * @param { InternalChildsProps }
 */
const InternalChilds = ({ slice }) => (

  <section className={classes["childs-section"]}>
    <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="heading-secondary">{children}</h2>
                ),
              }}
        />
    <div className={classes["childs-grid"]}>
      <div className={classes["childs-list"]}>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
        <div className={classes["child-card"]}>
          <h3>SEO in Montreal</h3>
        </div>
      </div>
    </div>

  </section>

)

export default InternalChilds
