import React from 'react'
import {projects} from "../static/ProjectDescriptions"

const Projects = () => {

    return(
      <div class='projects-container'>
        <h2> Projects </h2>
        {projects.map(project => 
          <div class='card'>
          <a href={project.githubLink}>
            <div class='project-title'>{project.title}</div>
          </a>
          <div class='project-description'>{project.description}</div>
            <img class='gif' alt='gif' src={project.gifLink}/><br/>
            {project.demoLink && <a class='demo-link' href={project.demoLink}>Demo</a>}
          <div class='project-technologies'>{project.technologies}</div>
        </div>
        )}
      </div>
    )
  }

export default Projects;
