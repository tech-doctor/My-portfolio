import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Mobile from '../Mobile Header/Mobile.js'


class Header extends Component {
  constructor(props){
    super(props)
      this.state = {
        Mobilevisible: false,
        // NavIcon: 'fas fa-bars'

      }
  }
  
   getstyle = () => {
     return{
       display: this.state.Mobilevisible? 
       '' : 'none',
     }
   }

   onClick = () => {
     this.setState({Mobilevisible: !this.state.Mobilevisible})
   }
  //  closeNav = () => {
  //    this.setState({NavIcon: 'fas fa-times'})
  //  }


    

    render() {
      return (
        <div className = "all-header">
        <div className = " header">
          <div className = "logo">
            <h1><Link to = "/">Isaac.</Link></h1>
          </div>
          <div className = "nav-bar">
          <ul>
            <li className = "nav-content"><Link to = "/">Home</Link></li>
            <li className = "nav-content"><Link to = "/about">About</Link></li>
            <li className = "nav-content"><Link to = "/experience">Experience</Link></li>
            <li className = "nav-content"><Link to = "/project">Project</Link></li>
            <li className = "nav-content"><Link to = "/contact">Contact</Link></li>  
            <button className = 'fas fa-bars'
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
