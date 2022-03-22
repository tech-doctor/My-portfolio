import React, { Component } from 'react'
import './About.scss'
import {Link} from 'react-router-dom'

class About extends Component {
    render() {
        return (
          <div className = "about">
          <div className = " about-heading">
            <h2>ABOUT ME</h2>
            <hr id ="line"></hr>
          </div>
          <div className = "about-content">
            <p>I'm a Software developer with over 3 years of general software development experience and about 2 years of experience writing Javascript and ReactJs.</p> 
            <p>I build product with an on-page optimization to produce relevant search results and positive user experience, growing site traffic, lead volume and brand awareness and also increase the web visibility within the search engine, which ultimately results in incresed traffic and more sales</p>
            <p>As a well organised person and a problem solver, I enjoy working on ambitious projects with positive people to create things that live on the computer. My main area of specialisation is the frontend(client side of the web) with the utmost goal to providing  an almost perfect user experience</p>
            <p>I am a  passionate developer  community member that loves to make contributions on  opensource  projects.
            I also love discussing about tech and how the world can be changed through it</p>
            <p>I have a great time management skill and the ability to deliver before deadlines.</p>
          </div>
          <div className = "tech">
            <p>Here are the technologies  I've worked with:</p>
            <div className =" tech-content">
              <div className = "tech-1">
              <i className = "fas fa-caret-right"><span>HTML & CSS3/SCSS</span></i><br/>
                <i className = "fas fa-caret-right"><span>JavaScript/Typescript</span></i><br/> 
              </div>
              <div className = "tech-2">
                <i className = "fas fa-caret-right"><span>ReactJS & Redux</span></i><br/>
                <i className = "fas fa-caret-right"><span>TailwindCSS</span></i><br/>
              </div>
              <div className = "tech-3">
                <i className = "fas fa-caret-right"><span>Styled Component</span></i><br/>
                <i className = "fas fa-caret-right"><span>Firebase</span></i>
              </div>
            </div>
          </div>

          <div className ="get-in-touch">
            <button><Link to = "/contact">GET IN TOUCH</Link></button>
          </div>
        </div>
        
        )
    }
}

export default About
