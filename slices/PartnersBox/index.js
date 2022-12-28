import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from "next/image";
import classes from "../../components/ui/Shared/PartnersBox.module.css";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.PartnersLineSlice} PartnersLineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersLineSlice>} PartnersLineProps
 * @param { PartnersLineProps }
 */

// COMPONENT NOT CLEAN IMG WISE
const PartnersBox = ({ slice }) => (
  <section className={classes["section--partners"]}>
    <div className="container">

      <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="heading-secondary">{children}</h2>
                ),
              }}
        />

      <div className={classes["partners-logos-box"]}>

        {slice?.items?.map((item, i) =>
        <React.Fragment key={i}>
          <PrismicNextImage field={item.logo} width={185} height={52}/>
        </React.Fragment>)}

      </div>

    </div>
</section>
)

export default PartnersBox
