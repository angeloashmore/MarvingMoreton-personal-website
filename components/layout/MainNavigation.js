import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/marving-moreton-developer-logo.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <React.Fragment>
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
          <h2>Marving Moreton</h2>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/">Development</Link>
            </li>
            <li>
              <Link href="/">SEO</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}

export default MainNavigation;
