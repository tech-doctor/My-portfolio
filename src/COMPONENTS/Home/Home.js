import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

 class Logo extends Component {
    render() {
        return (
            <div className = "home">
              <div className = "profile picture">
                <img className = 'profile-pics' src= "img/PROFILE PICS.jpg" alt= "my picture"></img>
             </div>
              <div className = "home-content">
                <p>Hi, my name is</p>
                  <h3>Oluka Damilola Isaac</h3>
                  <p> Software Developer | Technical writer</p>
                  <p>I am a Software Developer Based in Benin City Nigeria,I solve real life problems and bring ideas into Live products  by writing computer programs</p>
                 <div className = 'link-to-project'>
                  <button><Link to = "/project">View ➜</Link></button>
                  </div>
                  {/* <div className ="mobile-social">
                  <a href='https://github.com/tech-doctor' target='_blank' title = "Github" rel="noopener noreferrer"><i className = 'fab fa-github'></i></a>

                  <a href='https://twitter.com/Rh_izaac' target='_blank' title = "Twitter" rel="noopener noreferrer"><i className = 'fab fa-twitter'></i></a>

                  <a href='https://www.linkedin.com/in/oluka-damilola-isaac-b50783174/' target='_blank' title = "LinkedIn" rel="noopener noreferrer"><i className = 'fab fa-linkedin'></i></a>
         
                  <a href='https://web.facebook.com/oluka.isaac.583' target='_blank' title = "Facebook" rel="noopener noreferrer"><i className = 'fab fa-facebook'></i></a>
          
                 <a href='https://www.instagram.com/risux_iz/' target='_blank' title = "Instagram" rel="noopener noreferrer"><i className = 'fab fa-instagram'></i></a>
           
           
        </div> */}
              </div>
            </div>
        )
    }
}

export default Logo
