import React, { Component } from 'react';
import './Success.css'

class Success extends Component {
    render() {
        return (
            
            <div className ="success">
             <div className = "success-content">
            <i className= 'fas fa-check fa-2x'></i>
                <h1>Your message was sent successfully</h1>
                <p>I will get back to you as soon as i get the message, thanks for reaching out</p>
                </div>
                <div>
                    <button className ="back-contact" onClick= {this.props.submitted.bind()}>DONE</button>
                </div>
            </div>
        )
    }
}

export default Success
