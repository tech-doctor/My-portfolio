import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Mobile from '../Mobile Header/Mobile.js'


class Header extends Component {
  constructor(props){
    super(props)
      this.state = {
        Mobilevisible: false,
      }
  }
  
    
// onMouseMove = (id) => {
// const elementsIndex = this.state.icon.findIndex(
// element => element.id === id )
// console.log(elementsIndex)
// let newArray = [...this.state.icon]
// newArray[elementsIndex] = {...newArray[elementsIndex],
//  home: 'Home'}
//  this.setState({icon: newArray}    
// }


// onMouseMove = () => {
//   this.setState({icon: this.state.icon.map((data, i) => {
//     //console.log(this.state.icon[i].id)
//      const id = uuid();
//     console.log(id)
//     if(data.id == id) {
//       data.home =  'Home'
//       data.about = 'About'
//       data.experience = 'Experience'
//       data.project = 'Project'
//       data.contact = 'Contact'
//     }     
//        return data;
//   })
//   })  
// }

   getstyle = () => {
     return{
       display: this.state.Mobilevisible? 
       '' : 'none',
     }
   }

   onClick = () => {
     this.setState({Mobilevisible: !this.state.Mobilevisible})
   }
    

    render() {
      return (
        <div className = "all-header">
        <div className = " header">
          <div className = "logo">
            <h3><Link to = "/">Logo</Link></h3>
          </div>
          <div className = "nav-bar">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/experience">Experience</Link></li>
            <li><Link to = "/project">Project</Link></li>
            <li><Link to = "/contact">Contact</Link></li>  
            <button className = "fas fa-bars"
             onClick = {this.onClick}
             style = {barStyle}
             >
            </button>
          </ul>
          </div>
        </div>
          <div className = "mobile">
          <Mobile style  = {this.getstyle()}/>
          </div>
        </div>
      )
    }
}

const barStyle = {
  background: 'rgb(19, 19, 19)',
  color: 'white',
  fontSize : '25px',
  border: 'none',
  cursor: 'pointer'
}

export default Header
