import React from 'react'

import styles from './ProjectItem.module.css'

const ProjectItem = ({left,right}) => {


  return (
    <div className={styles.container}>
      {left && <div className={styles.img}>
        <div className={styles.imgItem} />
      </div>}
      <div className={`${styles.text} ${right ? styles.left : ''}`}>
        <h3 className={styles.header3}>My Project</h3>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolorem consectetur libero asperiores sint quis aliquid adipisci iusto voluptate odio at dolores rem, pariatur illum. Eveniet autem ipsa harum inventore odit doloremque. Animi est alias, nulla voluptatibus nisi ipsa minus reprehenderit, eos expedita inventore numquam quibusdam, dolor dolores modi voluptatum?</p>
        <button className={styles.primary}>Live Demo</button>
        <button className={styles.primary}>Source Code</button>
      </div>
      {right && <div className={styles.img}>
        <div className={styles.imgItem} />
      </div>}
    </div>
  )
}

export default ProjectItem