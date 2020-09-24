import React, { Component } from 'react'
import './project.css'
// import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'
import {Accordion, AccordionItem, AccordionHeader,AccordionIcon,AccordionPanel, Box} from '@chakra-ui/core'
// import 'react-accessible-accordion/dist/fancy-example.css'

export class ProjectDetails extends Component {
  constructor(props){
     super(props)
    // this.state = {
    //   Contentvisible: false
    // }
  }

//  iconClicked = () => {
//    this.setState({
//      Contentvisible: !this.state.Contentvisible 
//   })
//  }

//  iconClicked = (id) => {
//   const {projectArray} = this.props
//   const {Contentvisible} = this.state
//   this.setState({projects: projectArray.map(data => {
    
//      if(data.id === id) {
//        this.state.Contentvisible = !this.state.Contentvisible
//      }

//      return data;
//   })
//   })   
// }


//   getContentStyle = () => {
//     return{
//       display: this.state.Contentvisible? 
//       '' : 'none',
//     }
//   }

//   changeIcon = (id) => {
//     const {projectArray} = this.props
//     this.setState({projects: projectArray.map(data => {
//        if(data.id === id) {
//          data.icon = !this.state.Contentvisible? <i className = 'fa fa-angle-down'></i> :
//          <i className = 'fa fa-angle-right'></i>
//        }

//        return data;
//     })
//     })   
//  }

  render() {
     const {projectArray} = this.props
    const {id, title, icon, aboutProject, live, git, image, stack, isPrivate} = this.props.data
      return (

         <div>
<Accordion defaultIndex= {[1]} allowToggle>
  <AccordionItem  >
    <AccordionHeader>
      <Box flex ="1" textAlign = 'left'>
        {title}
      </Box>
    </AccordionHeader>
    <div className = 'try-style'>
      <AccordionPanel pb ={4}>
        <p>Here is the content in the first button</p>
      </AccordionPanel>
    </div>
  </AccordionItem>
</Accordion> 
</div>
         

        // <div className = "project-details">
        //   <div className = "shown-content">
        //     <div className = 'title'>
        //       <span>{title}</span>
        //     </div>
        //     <div className= ''>
        //      <button style = {btnStyle}
        //       onClick = {e => {this.iconClicked.bind(this, id)(e); this.changeIcon.bind(this, id)(e)}}>{icon}</button>
        //   </div>
        //   </div>
        //   <hr></hr>
        //    <div className = 'hidden-content'  style = {this.getContentStyle()} >
        //      <div className = 'about-project'>
        //         <p>{aboutProject}</p>
        //      </div>
        //      <div className = 'pics'>
        //         <img className = 'image' src = {image} alt = "project pics"/>
        //         <p className = 'stack'>{stack}</p>
        //         <span className = "link live"><a href = {live} target='_blank' rel="noopener noreferrer"><i className = 'fas fa-code-branch fa-1x'></i></a></span>
        //        {isPrivate? '' : (<span className = "link git"><a href = {git} target='_blank' rel="noopener noreferrer"> <i className="fab fa-github fa-1x"></i></a></span>)}
        //      </div>
        //      <div className = 'project-link'>  
        //      </div>
        //   </div>
        // </div>



      )
  }
}

const btnStyle = {
    background: 'rgb(26, 26, 26)',
    color: 'white',
    border: 'none',
    fontSize: '25px'
}

export default ProjectDetails


// {/* <Accordion allowZeroExpanded>
// <AccordionItem>
//    {/* <AccordionItemHeading> */}
//     <AccordionItemButton>
//         Button 1
//     </AccordionItemButton>
//     {/* </AccordionItemHeading> */}
//     <div className = 'try-style'>
//     <AccordionItemPanel>
//         <p>Here is the content in the first button</p>
//     </AccordionItemPanel>
//     </div>
// </AccordionItem>

// <AccordionItem>
//    {/* <AccordionItemHeading> */}
//     <AccordionItemButton>
//         Button 2
//     </AccordionItemButton>
//     {/* / */}
//     <AccordionItemPanel>
//         <p>Here is the content in the second button</p>
//     </AccordionItemPanel>
// </AccordionItem>
// </Accordion>   */}


{/* <Accordion>
  <AccordionItem>Zero</AccordionItem>
  <AccordionItem>one</AccordionItem>
  <AccordionItem>Two</AccordionItem>
</Accordion> */}


