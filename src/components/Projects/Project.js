import React from 'react'
import styles from './Project.module.css'
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.header2}>My Projects</h2>
        <div>
            <ProjectItem left={true}/>
            <ProjectItem right={true}/>
            <ProjectItem left={true}/>
            <ProjectItem right={true}/>
        </div>
    </div>
  )
}

export default Project