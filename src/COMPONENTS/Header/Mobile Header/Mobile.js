import React, { Component } from 'react';
import './Mobile.css';
import uuid from 'react-uuid'
import { Link } from 'react-router-dom';
//import MobileDetails from './MobileDetails'

class Mobile extends Component {
    constructor(props)  {
        super(props)
        this.state = {
          icons: [ 
            {
              id: uuid(),
              home: <i className ='fas fa-home'></i>
            },
    
            {
              id: uuid(),
              about: <i className ='far fa-user'></i>
            },
    
            {
              id: uuid(),
              experience: <i className ='fas fa-cog'></i>
            },
            {
              id: uuid(),
              project: <i className ='fas fa-laptop-code'></i>
            },
            {
              id: uuid(),
              contact: <i className ='far fa-envelope'></i>
            },  
          ] ,

          isClicked : false            
        }
      }

     
        onMouseMove = (id) => {
          this.setState({icons: this.state.icons.map(data => {
             if(data.id === id) {
               data.home = 'Home';
               data.about = 'About'
               
             }
             console.log(data.id)
             console.log(id)
             return data;
          })
          })    
       }   


    render() {
        const {icons, id} = this.state
         const mapArray = icons.map((icon, id) => {
          return icon
        }
         )

        return (
           <div>
           <div style ={this.props.style}>
             <div className = "mobile-nav">
              
              <ul>
                <li><Link to = "/"  onMouseMove = {this.onMouseMove.bind(this,id )}>{mapArray[0].home}</Link></li>
                <li><Link to = "/about" onMouseMove = {this.onMouseMove.bind(this, id)}>{mapArray[1].about}</Link></li>
                <li><Link to = "/experience" onMouseMove = {this.onMouseMove.bind(this, id)}>{mapArray[2].experience}</Link></li>
                <li><Link to = "/project" onMouseMove = {this.onMouseMove.bind(this, id)}>{mapArray[3].project}</Link></li>
                <li><Link to = "/contact" onMouseMove = {this.onMouseMove.bind(this, id)}>{mapArray[4].contact}</Link></li>
              </ul>
              
               
               </div>
               </div>
               </div>

               
            
        )
    }
}

export default Mobile


// onMouseMove = {this.onMouseMove}
//  style ={this.props.style}

// ( <MobileDetails id={icon.id} data={icon} 
//   //iconArray = {this.state.icons}
   
//  /> )