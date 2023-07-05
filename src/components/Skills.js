import React from "react";

import styles from "./Skills.module.css";
// import {DiReact} from 'react-icons/di'
import { IconContext } from "react-icons";
import {
  FaHtml5,
  FaFigma,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const phoneViewNav = {
    size: "2.5em",
  };
  const DesktopViewNav = {
    size: "3.5em",
  };
  const isDesktopOrLaptop = useMediaQuery({maxWidth:830})
    const iconSize = isDesktopOrLaptop ? phoneViewNav : DesktopViewNav
  return (
    <div className={styles.container}>
      <h4 className={styles.header4}>Here are my skills:</h4>
      <IconContext.Provider
        value={{
          size: iconSize.size,
          color: "#2c2826",
        }}
      >
        <div className={styles.iconContainer}>
          <FaFigma className={styles.icon} />
          <FaHtml5 className={styles.icon} />
          <FaCss3Alt className={styles.icon} />
          <FaReact className={styles.icon} />
          <FaNodeJs className={styles.icon} />
          <FaGithub className={styles.icon} />
          <FaPython className={styles.icon} />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
