import React from "react";
import classes from "./PostHeader.module.css";

function PostHeader(props) {
  const { title } = props;
  return (
    <div className={classes.banner}>
      <div className={classes["box-title"]}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PostHeader;
