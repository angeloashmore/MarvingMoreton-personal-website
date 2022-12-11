import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import React from "react";

function Layout(props) {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
