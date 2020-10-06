import React  from 'react';
import './Mobile.css';
import { NavLink } from 'react-router-dom';


const Mobile = (props) => {
  return (
    <div>
      <div style ={props.style}>
        <div className = "mobile-nav"> 
          <ul>
            <li><NavLink to = "/" exact id = "home" rel= "index" activeClassName = "active"><i className ='fas FaIcon'></i></NavLink></li>
            <li><NavLink to = "/about" exact id = "about" rel= "about" activeClassName = "active"><i className ='far FaIcon'></i></NavLink></li>
            <li><NavLink to = "/experience" exact id = "experience" rel= "experience" activeClassName = "active"><i className ='fas FaIcon'></i></NavLink></li>
            <li><NavLink to = "/project" exact id = "project" rel= "project" activeClassName = "active"><i className ='fas FaIcon'></i></NavLink></li>
            <li><NavLink to = "/contact" exact id = "contact" rel= "contact" activeClassName = "active"><i className ='far  FaIcon'></i></NavLink></li>
          </ul>
        </div> 
      </div>
    </div>
            
  )
}
export default Mobile;