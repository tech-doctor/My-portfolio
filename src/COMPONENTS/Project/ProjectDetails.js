import React, { Component } from 'react'
import './project.scss'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"

class ProjectDetails extends Component {
  // constructor(props){
  //    super(props)
  //   this.state = {
  //     Contentvisible: false
  //   }
  // }

//  iconClicked = () => {
//    this.setState({
//      Contentvisible: !this.state.Contentvisible 
//   })
//  }

  // getContentStyle = () => {
  //   return{
  //     display: this.state.Contentvisible? 
  //     'flex' : 'none',
  //   }
  // }


//   changeIcon = (id) => {
//     const {projectArray} = this.props
//     this.setState({projects: projectArray.map(data => {
//       if(data.id === id) {
//       data.icon = !this.state.Contentvisible? <i className = 'fa fa-angle-down'></i> :
//       <i className = 'fa fa-angle-right'></i>
//       }

//       data.icon = !this.state.Contentvisible? <i className = 'fa fa-angle-right'></i> : ''
    
//       return data;
//     })
//     })   
//  }


  render() {
    const {project} = this.props
    return (
      <div className = "project-details">
        <Accordion  defaultIndex = {[0]} allowToggle>
          {project.map((data) => 
            (<AccordionItem key= {data.id}>
              <AccordionButton  className = "shown-content">
                <Box flex="1" textAlign="left">
                  <div className = 'title'>
                    <span>{data.title}</span>
                  </div>
                </Box>
                <AccordionIcon   style = {btnStyle}/>
              </AccordionButton>
              <hr/>
              <AccordionPanel pb={4}>
                <div className = 'hidden-content'>
                  <div className = 'about-project'>
                    <p>{data.aboutProject} {data.isPrivate? '': <span>check source code <a href = {data.git} target = '_blank'  rel = "noopener noreferrer" title= 'Github repository'>here</a></span>}</p>
                  </div>
                  <div className = 'pics-card'>
                    <img className = 'image' src = {data.image} alt = "project pics"/>
                      <div className = 'bottom-div'>
                        <span className = 'stack'>{data.stack}</span>
                        <span className = "link live"><a href = {data.live} target='_blank' title ="View project" rel="noopener noreferrer">View <i className = "fas fa-angle-right"></i></a></span>
                      </div>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>)
          )}
        </Accordion>
      </div>
    )
  }
}

const btnStyle = {
  background: ' rgb(26, 26, 26)',
  color: 'white',
  border: 'none',
  outline: 'none',
  fontSize: '35px',
  cursor: 'pointer'
}

export default ProjectDetails;