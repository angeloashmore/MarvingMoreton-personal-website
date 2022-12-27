import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "../../components/ui/Shared/CTAHorizontal.module.css";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.CtaHorizontalSlice} CtaHorizontalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaHorizontalSlice>} CtaHorizontalProps
 * @param { CtaHorizontalProps }
 */
const CtaHorizontal = ({ slice }) => (
  // <React.Fragment>
  //     <section className={classes["section--footer"]}>
  //       <div className={classes["cta-container"]}>
  //         <div className={classes["cta-banner"]}>
  //           <div className={classes["cta-text-box"]}>
  //             <PrismicRichText field={slice.primary.title} />
  //             <p >{ slice.primary.text }</p>
  //           </div>
  //           <div className={classes["cta-text-box"]}>
              // <PrismicLink  field={slice.primary.cta_link} className="btn-dark btn"
              //   href="mailto:marving.moreton@gmail.com"
              //   target="_blank">{ slice.primary.cta_anchor }
              // </PrismicLink>

  //           </div>
  //         </div>
  //       </div>
  //     </section>
  // </React.Fragment>


  <React.Fragment>
    <section className={classes["section--footer"]}>
      <div className={classes["cta-container"]}>
        <div className={classes["cta-banner"]}>
          <div className={classes["cta-text-box"]}>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.desc} />
          </div>
          <div className={classes["cta-text-box"]}>
            <PrismicLink
                field={slice.primary.cta_link}
                className="btn-dark btn"
                href="mailto:marving.moreton@gmail.com"
                target="_blank">
                    { slice.primary.cta_anchor }
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default CtaHorizontal
