import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <h3 className={styles.header3}>Hello, I am a</h3>
        <h1 className={styles.header1}>Front End Web Developer</h1>
        <h4 className={styles.header4}>and web designer</h4>
      </div>
    </div>
  );
};

export default Header;
