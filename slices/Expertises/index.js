import React from 'react';
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import classes from "./Expertises.module.css";
import Link from "next/link";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ExpertisesSlice} ExpertisesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExpertisesSlice>} ExpertisesProps
 * @param { ExpertisesProps }
 */
const Expertises = ({ slice }) => (

  <React.Fragment>
      <div className={classes["section-services"]}>
        <h2 className="heading-secondary">3 DIFFERENT WAYS I CAN HELP YOU</h2>
        <div className={classes["services-box"]}>
          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/front-dev.svg"
                width={50}
                height={50}
                alt="Full Stack Developer"
              />
            </div>
            <span>Front End Development</span>
            <p>
              I love to code things from scratch and bring product ideas to
              life.
            </p>

          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/seo.svg"
                width={50}
                height={50}
                alt="Search Engine Optimization Consultant"
              />
            </div>
            <span>Search Engine Optimization</span>
            <p>
              SEO is my first love of the web, which is a pillar of a
              Acquisition strategy.
            </p>

          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/marketing-analytics.svg"
                width={50}
                height={50}
                alt="Marketing 360: Analytics, SEA.."
              />
            </div>
            <span>Marketing Analytics</span>
            <p>
              Marketing Analytics is my way of implementing Lean Startup
              principles.
            </p>
          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/marketing-analytics.svg"
                width={50}
                height={50}
                alt="Marketing 360: Analytics, SEA.."
              />
            </div>
            <span>Marketing Analytics</span>
            <p>
              Marketing Analytics is my way of implementing Lean Startup
              principles.
            </p>
          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/marketing-analytics.svg"
                width={50}
                height={50}
                alt="Marketing 360: Analytics, SEA.."
              />
            </div>
            <span>Marketing Analytics</span>
            <p>
              Marketing Analytics is my way of implementing Lean Startup
              principles.
            </p>
          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/marketing-analytics.svg"
                width={50}
                height={50}
                alt="Marketing 360: Analytics, SEA.."
              />
            </div>
            <span>Marketing Analytics</span>
            <p>
              Marketing Analytics is my way of implementing Lean Startup
              principles.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>

)

export default Expertises
