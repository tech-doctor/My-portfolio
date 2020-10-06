import React, {Component} from 'react';
import Home from '../COMPONENTS/Home/Home';
import About from '../COMPONENTS/About/About';
import Experience from '../COMPONENTS/Experience/Experience';
import Project from '../COMPONENTS/Project/Project';
import Contact from '../COMPONENTS/Contact/Contact';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Header from '../COMPONENTS/Header/Main Header/Header'
import Logo from '../COMPONENTS/Home/Home'
import './App.css';

//class Logo extends Component
class App extends Component {

   state ={
     loading: true
   };

   componentDidMount() {
     demoAsyncCall().then(() => this.setState({loading: false}));
   }


  render(){
    const { loading } = this.state;
      
    if(loading) {
      return <div className = "loading"></div>
    }
  return (
    <div>
    <Router>
      <div >
        <Header/>
        <div className="navBar">
          <Switch>
            <Route path = "/" exact render = {() => ( <Logo/>)}/>
            <Route path = "/" exact render = {() => ( <Home/>)}/>

            <Route path = "/about" exact render = { () =>  (<About/>) }/>

            <Route path = "/experience" exact render = { () => (<Experience/>) }/>

            <Route path = "/project" exact render = {() => (<Project/>) }/>

            <Route path = "/contact" exact render = {() => ( <Contact/>)}/>
          </Switch>
        </div>
      </div>
    </Router>
       
        <div className ="mobile-social">
                  <a href='https://github.com/tech-doctor' target='_blank' title = "Github" rel="noopener noreferrer"><i className = 'fab fa-github'></i></a>
                  <a href='https://twitter.com/Rh_izaac' target='_blank' title = "Twitter" rel="noopener noreferrer"><i className = 'fab fa-twitter'></i></a>
                  <a href='https://www.linkedin.com/in/oluka-damilola-isaac-b50783174/' target='_blank' title = "LinkedIn" rel="noopener noreferrer"><i className = 'fab fa-linkedin'></i></a>
                  <a href='https://web.facebook.com/oluka.isaac.583' target='_blank' title = "Facebook" rel="noopener noreferrer"><i className = 'fab fa-facebook'></i></a>
                 {/* <a href='https://www.instagram.com/risux_iz/' target='_blank' title = "Instagram" rel="noopener noreferrer"><i className = 'fab fa-instagram'></i></a> */}
        </div>


      <div className = 'access'>
      <div className ="footer">
        <div className ="social">
          <a href='https://www.instagram.com/risux_iz/' target='_blank' title = "Instagram" rel="noopener noreferrer"><i className = 'fab fa-instagram'></i></a>
          <a href='https://web.facebook.com/oluka.isaac.583' target='_blank' title = "Facebook" rel="noopener noreferrer"><i className = 'fab fa-facebook'></i></a>
          <a href='https://www.linkedin.com/in/oluka-damilola-isaac-b50783174/' target='_blank' title = "LinkedIn" rel="noopener noreferrer"><i className = 'fab fa-linkedin'></i></a>
          <a href='https://twitter.com/Rh_izaac' target='_blank' title = "Twitter" rel="noopener noreferrer"><i className = 'fab fa-twitter'></i></a>
          <a href='https://github.com/tech-doctor' target='_blank' title = "Github" rel="noopener noreferrer"><i className = 'fab fa-github'></i></a>
        </div>
        <div className ="mail">
          <p>hilghsilk2damson@gmail.com</p>
        </div>
      </div>
      <div className = "vertical-flex">
        <div className = "v1">

        </div>
        <div className = "v2">

        </div>
      </div>
      
    </div>
    
    </div>
    
  );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 4000))
}

export default App;
