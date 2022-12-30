import NavBis from "./NavBis";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import React from "react";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBis />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
