import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Home.scss'

 class Logo extends Component {
    render() {
        return (
            <div className = "home">
              <div className = "profile picture">
                <img className = 'profile-pics' src= "img/profile-pics.jpg" alt= "my pics"></img>
              </div>
              <div className = "home-content">
                <p>Hi, I'm</p>
                <span>Oluka Damilola Isaac</span><br/>
                {/* <span> Software Developer | Technical writer</span> */}
                <span> ReactJS Software Developer</span>
                <p>I am a Software Developer Based in Benin City Nigeria,I solve real life problems and bring ideas into Live products  by writing computer programs</p>
                <div className = 'link-to-project'>
                  <button><Link to = "/project">View ➜</Link></button>
                </div>
              </div>
            </div>
        )
    }
}

export default Logo
