import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./MainHero.module.css";
import photo from "../../../public/photos/denver-random.jpg";

export default function mainHero() {
  return (
    <React.Fragment>
      <section className={classes["section-hero"]}>
        <div className={classes["hero-container"]}>
          <div className={classes["text-box"]}>
            <h1>Building digital products & brands.</h1>
            <span>
              Here at flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </span>
            <div className={classes["btn-box"]}>
              <a className="btn-orange">Découvrir</a>
              <a className="btn-white">Pricing</a>
            </div>
          </div>
          <div className={classes["image-box"]}>
            <Image
              className={classes["hero-image"]}
              src={photo}
              width={500}
              height={500}
              alt="Full Stack Developer"
            />
          </div>
        </div>
      </section>
      <hr className={classes["line"]} />
    </React.Fragment>
  );
}
