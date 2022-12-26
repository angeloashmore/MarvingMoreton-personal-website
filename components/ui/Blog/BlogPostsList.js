import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./BlogPostsList.module.css";

export default function BlogPostsList() {
  return (
    <div className={classes["posts-section"]}>
      <h2 className="heading-secondary">Our blog posts</h2>

      <div className={classes["posts-grid"]}>
        <div className={classes["post-card"]}>ƒﬁ</div>
      </div>
    </div>
  );
}
