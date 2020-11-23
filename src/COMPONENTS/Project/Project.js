import React, { Component } from 'react'
import Details from './ProjectDetails'
import ProjectData from './ProjectData'

class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
        projects: ProjectData,
    }
  }


  render() {
    const  {projects} = this.state;
      return (
        <div className = "project">
          {projects.map((project) =>
          ( <Details key={project.id} data={project} 
            projectArray = {this.state.projects}
          /> ))}
        </div>
      )
  }
}


export default Project
