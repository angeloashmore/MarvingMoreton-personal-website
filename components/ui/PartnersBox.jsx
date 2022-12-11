import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./PartnersBox.module.css";
import continental from "../../public/logos/continental-grey.svg";

export default function PartnersBox() {
  return (
    <section className={classes["section--partners"]}>

      <div className="container">
        <h2 className={classes["featured-title"]}>
        At Agency side, Client side or as Freelancer
        </h2>

        <div className={classes["partners-logos-box"]}>
        <Image
            className={`${classes["partner-logo"]} ${classes["continental"]}`}
            src="/logos/continental-grey.svg"
            width={184.61}
            height={51.18}
            alt="continental logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["crakrevenue"]}`}
            src="/logos/crakrevenue-grey.svg"
            width={184.61}
            height={51.18}
            alt="crakrevenue logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["sigfox"]}`}
            src="/logos/sigfox-grey.svg"
            width={184.61}
            height={51.18}
            alt="sigfox IoT logo "
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["accor-hotel"]}`}
            src="/logos/accor-hotels-grey.svg"
            width={184.61}
            height={51.18}
            alt="Accor Hotels logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["sephora"]}`}
            src="/logos/sephora-grey.svg"
            width={184.61}
            height={51.18}
            alt="sephora logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["mc2i"]}`}
            src="/logos/mc2i-grey.svg"
            width={184.61}
            height={51.18}
            alt="mc2i logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["tourcrib"]}`}
            src="/logos/tourcrib-grey.svg"
            width={184.61}
            height={51.18}
            alt="tourcrib logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={`${classes["partner-logo"]} ${classes["crakmedia"]}`}
            src="/logos/crakmedia-grey.svg"
            width={184.61}
            height={51.18}
            alt="Crakmedia logo"
            // width={50}
            // height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />


        </div>
      </div>

    </section>
  )
}
