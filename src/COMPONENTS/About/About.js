import React, { Component } from 'react'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className = "About">
               <div className = " About-heading">
               <h2>ABOUT ME</h2>
               <hr id ="line"></hr>
               </div>
               <div className = "about-content">
               <p>Hi, i am a Software developer that turn ideas into live products, and also solve real life problems by writing programs on the computer.</p> 
               
               <p>As a well organised person and a problem solver, I enjoy working on ambitious projects with positive people to create things that live on the computer. My main area of specialisation is the frontend(client side of the web) with the utmost goal to providing  an almost perfect user experience</p>
               <p></p>
               <p>I am a  passionate developer  community memeber that loves to make contributions on  opensource  projects. I also love discussing about tech and how the world can be changed through it</p>
               <p>I'm currently  a student of  the <a href = "https://www.uniben.edu/" target='_blank' title = "Uniben" rel="noopener noreferrer">University of Benin</a> therefore, remote employment is preferrred</p>
               <p>An SEO expert</p>
               <p>I have a great time management skill and the ability to deliver before deadlines.</p>
               </div>
                <div className = 'tech'>
                    <p>Here are the technologies  I recently worked with:</p>
                    <ul>
                        <li>
                        JavaScript(ES6+)
                        </li>
                        <li> 
                            HTML & CSS
                        </li>

                        <li> 
                            SASS
                        </li>

                        <li> 
                            ReactJS
                        </li>
                        <li> 
                            Wordpress
                        </li>
                        <li> 
                           Firebase
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About
