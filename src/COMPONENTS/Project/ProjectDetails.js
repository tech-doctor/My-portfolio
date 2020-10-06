import React, { Component } from 'react'
import './project.css'

class ProjectDetails extends Component {
  constructor(props){
     super(props)
    this.state = {
      Contentvisible: false
    }
  }

 iconClicked = () => {
   this.setState({
     Contentvisible: !this.state.Contentvisible 
  })
 }

  getContentStyle = () => {
    return{
      display: this.state.Contentvisible? 
      '' : 'none',
    }
  }

  changeIcon = (id) => {
    const {projectArray} = this.props
    this.setState({projects: projectArray.map(data => {
       if(data.id === id) {
         data.icon = !this.state.Contentvisible? <i className = 'fa fa-angle-down'></i> :
         <i className = 'fa fa-angle-right'></i>
       }
       return data;
    })
    })   
 }

  render() {
    const {id, title, icon, aboutProject, live, git, image, stack, isPrivate} = this.props.data
    return (
      <div className = "project-details">
        <div className = "shown-content">
          <div className = 'title'>
            <span>{title}</span>
          </div>
          <div className= ''>
            <button style = {btnStyle}
            onClick = {e => {this.iconClicked.bind(this, id)(e); this.changeIcon.bind(this, id)(e)}}>{icon}</button>
        </div>
        </div>
        <hr></hr>
          <div className = 'hidden-content'  style = {this.getContentStyle()} >
            <div className = 'about-project'>
              <p>{aboutProject}</p>
            </div>
            <div className = 'pics'>
              <img className = 'image' src = {image} alt = "project pics"/>
              <p className = 'stack'>{stack}</p>
              <span className = "link live"><a href = {live} target='_blank' title ="View project" rel="noopener noreferrer"><i className = 'fas fa-external-link-alt fa-1x'></i></a></span>
              {isPrivate? '' : (<span className = "link git"><a href = {git} target='_blank' title = "Github repo" rel="noopener noreferrer"> <i className="fab fa-github fa-1x"></i></a></span>)}
            </div>
            <div className = 'project-link'>  
            </div>
        </div>
      </div>
    )
  }
}

const btnStyle = {
    background: 'rgb(26, 26, 26)',
    color: 'white',
    border: 'none',
    fontSize: '25px',
}

export default ProjectDetails