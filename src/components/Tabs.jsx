import React from "react";
import styles from "../styles/tabs.module.css";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Link to="/posts" className={styles.tab}>
        {" "}
        posts
      </Link>
      <Link to="/archived-posts" className={styles.tab}>
        {" "}
        archived Posts
      </Link>
    </div>
  );
};

export default Tabs;
