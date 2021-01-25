import React, { Component } from 'react'
import Details from './ProjectDetails'
import ProjectData from './ProjectData'
import './project.scss'

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
        <div>
        <div className = "project-heading">
          <p>Project</p>
          <img src = 'img/profile-pics.jpg' alt = " my-pics"></img>
        </div>
        <div className = "project">
          {/* {projects.map((project) =>
          ( <Details key={project.id} data={project} 
            projectArray = {this.state.projects}
          /> ))} */}
          <Details project = {projects}/>
        </div>

        </div>
        
      )
  }
}


export default Project
