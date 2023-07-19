import React from "react";

import { IconContext } from "react-icons";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import styles from "./Footer.module.css";

import { useMediaQuery } from "react-responsive";

const Footer = () => {

  const isPhone = useMediaQuery({maxWidth: 800})

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YUG AGARWAL</h1>
      <div className={styles.links}>@Copyright 2023</div>
      <span className={styles.span}></span>
     {!isPhone &&  <div className={styles.icons}>
        <IconContext.Provider
          value={{
            size: "2em",
            color: "#2c2826",
          }}
        >
          <a href="https://www.instagram.com/yugagarwal03/" target="__blank">
            <AiFillInstagram className={styles.IconItem} />
          </a>
          <a href="https://github.com/03YugAgarwal" target="__blank">
            <AiOutlineGithub className={styles.IconItem} />
          </a>
          <a
            href="https://www.linkedin.com/in/yug-agarwal-209939216/"
            target="__blank"
          >
            <AiOutlineLinkedin className={styles.IconItem} />
          </a>
        </IconContext.Provider>
        {/* <span className={styles.blurOverlay} ></span> */}
      </div>}
    </div>
  );
};

export default Footer;
