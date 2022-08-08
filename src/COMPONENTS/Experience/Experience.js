import React, { Component } from 'react'
import './Experience.scss'
import {Link} from 'react-router-dom'

 class Experience extends Component {
    render() {
      return (
        <div>
          <div className ="experience">
            <div className ="experience-heading">
                <h2>Experience</h2>
            </div>
            <section className = "experience-content">
              <div className = "divider">
              <p>Experience</p>
              <span></span>
              </div>
              <div className = "title">
                  <p>1 .VISTAdj(part-time)<span><br/>JUNE - AUGUST 2022</span></p>
              </div>
              <article className = " description">
                  <p><span>■</span>Currently building an health-care product with patients and Doctors onboarding.</p>
              </article>
            </section>
            <br/>

            <section className = "experience-content">
              <div className = "title">
              <p>2 .Smatcity(contract)<span><br/>March - JUNE 2022</span></p>
              </div>
              <article className = " description">
                  <p><span>■</span> An online real estate platform that reduces the stress of getting and giving out accommodation to students on campuses.</p>
              </article>
            </section>
            <br/>

            <section className = "experience-content">
              <div className = "title">
                 <p>3 .Upwork<span><br/>MARCH 2021 - Till-date</span></p>
              </div>
              <article className = " description">
              <p><span>■</span> Helped clients to Elevate their business and increase sales by optimizing their existing web platform</p>
              <p><span>■</span> Built several web  platforms for client  to scale their businesses.</p> 
              </article>
            </section>
            <br/>

            <section className = "experience-content">
              <div className = "title">
                 <p>3 .Hotels.NG<span><br/>MAY - JULY 2020</span></p>
              </div>
              <article className = " description">
              <p><span>■</span> Led my frontend team on working coding challenge</p>
              <p><span>■</span> Built Hotel booking landing page with teams of frontend developer</p> 
              <p><span>■</span>Worked with backend developers to build an airtime service web app</p> 
              </article>
            </section>
            <br/>

            <section className = "experience-content">
              <div className = "title">
                  <p> 4. DevC Trainig With Andela<span><br/>SEP - NOV 2019</span></p>
              </div>
              <article className = " description">
              <p><span>■</span>I leveled up my development skills on the fundamental and core web technologies</p>
              <p><span>■</span> I learned how to manage  code projects on Git  Github</p> 
              <p><span>■</span> I Tested web user interaces , and secured web app with OWASP</p> 
              </article>
            </section>
            <br/>


            <section className = "experience-content">
              <div className = "divider">
              <p>Education</p>
              <span></span>
              </div>
              <div className = "title">
                  <p>Hacker Hero<span><br/>OCT 2021 - Present</span></p>
              </div>
              <article className = " description">
                  <p>Learnt the introduction to the intellectual enterprises of computer science and the art of programming.</p>
                  <p><span>■</span>Algorithm & Data-science</p>
              </article>
            </section><br/>

            <section className = "experience-content">
              <div className = "title">
                  <p>Udacity<span><br/>APRIL 2022 - MAY 2022</span></p>
              </div>
              <article className = " description">
                  <p>Learnt about some key concepts of object oriented programming, in the likes of  Higher order functions, Inheritance, closure and the likes</p>

                  <p><span>■</span> Javascript programming</p>
              </article>
            </section><br/>

            <section className = "experience-content">
              <div className = "title">
                  <p>CS50<span><br/>APRIL - NOV 2021</span></p>
              </div>
              <article className = " description">
              <p>Learnt the introduction to the intellectual enterprises of computer science and the art of programming.</p>
              <p><span>■</span>Introduction to Computer Science</p>
              </article>
            </section><br/>

            <section className = "experience-content">
              <div className = "title">
                  <p>Technical Writing<span><br/>JULY - SEP 2020</span></p>
              </div>
              <article className = " description">
                  <p>Learnt how to write clearer Technical Documentations and  also improve my Technical communication skills</p>

                  <p><span>■</span> Google developer Technical Writing course</p>
              </article>
            </section><br/>
             
            <section className = "experience-content">
              <div className = "divider">
              <p>Community</p>
              <span></span>
              </div>
              <div className = "title">
                  <p>Google Developers Student Club <span><br/>SEPT 2019 - PRESENT</span></p>
              </div>
              <article className = " description">
                  <p></p>
              </article>
            </section><br/>
            <div className ="download-cv">
              <a href= "My-Resume.pdf" download="isaac's resume">
            <p><i className="fa fa-download" aria-hidden="true"></i> Download Resume</p>
            </a>
            </div>
            </div>
            
          <div className="home-project">
              <Link to='/'> <button className ="experience-home"><i className = "fas fa-arrow-left"></i> Home</button></Link>
              <Link to='/project'> <button className = "experience-project">Project <i className = "fas fa-arrow-right"></i></button></Link>  
          </div>
        </div>
      )
    }
}

export default Experience
