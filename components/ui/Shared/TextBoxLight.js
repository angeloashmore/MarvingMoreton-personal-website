import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./TextBoxLight.module.css";
import photo from "../../../public/photos/denver-random.jpg";

export default function textBoxLight() {
  return (
    <React.Fragment>
      <section className={classes["section-text-box-light"]}>
        <div className={classes["text-light-container"]}>
          <div className={classes["text-box"]}>
            <p>
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
