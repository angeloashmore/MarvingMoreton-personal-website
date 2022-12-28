import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "../../components/ui/Shared/MyServices.module.css";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.MyServicesSlice} MyServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MyServicesSlice>} MyServicesProps
 * @param { MyServicesProps }
 */
const MyServices = ({ slice }) => (
    <React.Fragment>
      <div className={classes["section-services"]}>
        <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="heading-secondary">{children}</h2>
                ),
              }}
        />
        <div className={classes["services-box"]}>

            {/* CARD */}
            {slice?.items?.map((item, i) => (
              <React.Fragment key={i}>
                <div className={classes["service-card"]}>
                  <div className={classes["service-icon-box"]}>


                    <PrismicNextImage field={item.emoji_image}
                    className={classes["service-icon"]} width={64}
                    height={64}
                    />

                  </div>
                  <span >{ item.specialty }</span>
                  <PrismicRichText field={item.description} />
                  <PrismicLink  field={item.cta_link} className={classes["service-link"]}>{ item.cta_anchor }</PrismicLink>

              </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </React.Fragment>
)

export default MyServices
