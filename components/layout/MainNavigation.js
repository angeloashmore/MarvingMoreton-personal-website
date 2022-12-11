import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/marving-moreton-developer-logo.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <React.Fragment>
      <div className={classes["headband-box"]}>
        <h3 className={classes["urgency"]}>
          → Limited-time Inflation Relief Pricing on ALL Video Courses. See
          Coupon Code at top of each course page. ←
        </h3>
      </div>
      <section className={classes["section--header"]}>
        <div className={classes["logo-box"]}>
          <Image
            className={classes["logo-navbar"]}
            src={logo}
            alt="Marving Moreton"
            width={50}
            height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h2 className={classes["name"]}>Marving Moreton</h2>
        </div>
        <nav className={classes.navigation}>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-link"]}>
              <Link href="/">Development</Link>
            </li>
            <li className={classes["nav-link"]}>
              <Link href="/">SEO</Link>
            </li>
            <li className={classes["nav-link"]}>
              <Link href="/">Contact</Link>
            </li>
            <li className={classes["nav-link"]}>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}

export default MainNavigation;
