import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./MyServices.module.css";

export default function MyServices() {
  return (
    <React.Fragment>
      <div className={classes["section-services"]}>
        <h2 className="heading-secondary">3 DIFFERENT WAYS I CAN HELP YOU</h2>
        <div className={classes["services-box"]}>
          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/front-dev.svg"
                width={64}
                height={64}
                alt="Full Stack Developer"
              />
            </div>
            <span>Front End Development</span>
            <p>
              I love to code things from scratch and bring product ideas to
              life.
            </p>
            <Link className={classes["service-link"]} href="">
              {" "}
              Hire a developer
            </Link>
          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/seo.svg"
                width={64}
                height={64}
                alt="Search Engine Optimization Consultant"
              />
            </div>
            <span>Search Engine Optimization</span>
            <p>
              SEO is my first love of the web, which is a pillar of a
              Acquisition strategy.
            </p>
            <Link className={classes["service-link"]} href="">
              {" "}
              Hire a developer
            </Link>
          </div>

          <div className={classes["service-card"]}>
            <div className={classes["service-icon-box"]}>
              <Image
                className={classes["service-icon"]}
                src="/emojis/marketing-analytics.svg"
                width={64}
                height={64}
                alt="Marketing 360: Analytics, SEA.."
              />
            </div>
            <span>Marketing Analytics</span>
            <p>
              Marketing Analytics is my way of implementing Lean Startup
              principles.
            </p>
            <Link className={classes["service-link"]} href="">
              {" "}
              Hire a developer
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
