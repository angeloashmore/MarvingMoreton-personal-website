import NavBis from "./NavBis";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import React from "react";

function Layout(props, {altLangs}) {
  return (
    <React.Fragment>
      <NavBis altLangs={altLangs} />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
