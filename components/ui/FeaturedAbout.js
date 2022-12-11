import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./FeaturedAbout.module.css";
import photo from "../../public/marving-audio.png";
import photoGrouped from "../../public/marving-audio-grouped.png";
import illustration from "../../public/illustrations/best-design-award.png";

export default function FeaturedAbout() {
  return (
    <section className={classes["section--about"]}>
      <div className="container">
        <div className={classes["flex-box"]}>
          <div className={classes["image-side"]}>
            <Image
              className={classes["illustration"]}
              src={illustration}
              // width={743}
              // height={800}
              // src="/marving-hero-image.png"

              alt="Marving Moreton"

              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div className={classes["image-box"]}>
              <Image
                className={classes["hero-image"]}
                src={photoGrouped}
                // width={743}
                // height={800}
                // src="/marving-hero-image.png"

                alt="Marving Moreton"

                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>

          <div className={classes["text-side"]}>
            <span className={classes["upper-title"]}>About Marving</span>
            <h2>My passion and focus is xxx why</h2>
            <div className={classes["paragraphs-box"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget
                neque. Tortor tempus massa dui viverra in justo gravida. At
                justo eget volutpat leo fermentum scelerisque cursus sit donec.
                Nisl id velit faucibus vel. Amet cras diam non habitasse a arcu.
                Urna nulla felis diam nisl et.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget
                neque. Tortor tempus massa dui viverra in justo gravida. At
                justo eget volutpat leo fermentum scelerisque cursus sit donec.
                Nisl id velit faucibus vel. Amet cras diam non habitasse a arcu.
                Urna nulla felis diam nisl et.
              </p>
            </div>

            <div>
              <Link
                className="btn-orange"
                href="mailto:marving.moreton@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
