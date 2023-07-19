import React, { useEffect } from "react";

import styles from "./ProjectItem.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ left, right }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    } else if(!inView && left) {
      animation.start({
        x: -50,
      });
    }else if(!inView && right) {
      animation.start({
        x: 50,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div className={styles.container} animate={animation}>
        {left && (
          <div className={`${styles.img} ${right ? styles.left : ""}`}>
            <div className={styles.imgItem} />
          </div>
        )}
        <div className={`${styles.text} ${right ? styles.left : ""}`}>
          <h3 className={styles.header3}>My Project</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            dolorem consectetur libero asperiores sint quis aliquid adipisci
            iusto voluptate odio at dolores rem, pariatur illum. Eveniet autem
            ipsa harum inventore odit doloremque. Animi est alias, nulla
            voluptatibus nisi ipsa minus reprehenderit, eos expedita inventore
            numquam quibusdam, dolor dolores modi voluptatum?
          </p>
          <button className={styles.primary}>Live Demo</button>
          <button className={styles.primary}>Source Code</button>
        </div>
        {right && (
          <div className={styles.img}>
            <div className={styles.imgItem} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectItem;
