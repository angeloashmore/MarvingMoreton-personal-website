import classes from "./CTAHorizontal.module.css";
import React from "react";
import Link from "next/link";


function CTAHorizontal(props) {
  return (
    <React.Fragment>
      <section className={classes["section--footer"]}>
        <div className={classes["cta-container"]}>
          <div className={classes["cta-banner"]}>
            <div className={classes["cta-text-box"]}>
              <h3>Get in Touch</h3>
              <p>
                Whether you are in need of a Developer, have a question or just
                want to say hi, <br /> I’ll be glad to discuss with you!
              </p>
            </div>
            <div className={classes["cta-text-box"]}>
              <Link
                className="btn-dark btn"
                href="mailto:marving.moreton@gmail.com"
                target="_blank"
              >
                Say Hello!
              </Link>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  );
}

export default CTAHorizontal;
