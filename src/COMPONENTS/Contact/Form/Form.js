import React, { Component } from 'react'
import './Form.css'
import Success from './Success/Success'
import Address from '../Address/Address'

class ContactForm extends Component {
     constructor(props){
         super(props);
         this.submitForm = this.submitForm.bind(this);
         this.state = {
            status: "",
            loading: false
         };
        
     }

    render() {
        const { status, loading } = this.state;
        return (
            <div className = 'first-div'>
            <div className = 'form'>
                <form action = "https://formspree.io/moqpaqov" method="POST"  onSubmit = {this.submitForm}>
                  <div className = 'name'>
                   <input required type = "text" name = "name" placeholder = 'Name'/>
                  </div>
                  <div className = 'email'>
                   <input required type = "email" name = "email" placeholder = 'Email'/>
                  </div>
                  <div className = 'message'>
                   <textarea  required  name="message" rows="10"  minLength="30" placeholder = 'Message'/>
                  </div>
                    <button className = "button" type = "submit">{ !loading ? "Send" : <i className = "fas fa-ellipsis-h"></i>}</button>
                    {status === 'SUCCESS' ? <Success submitted = {this.setStatus.bind(this)}/>: ""}
                    {status === 'ERROR' &&      <p style={{textAlign: 'center', color: 'red', fontSize: '20px'}} className = "error-message">Ooops!  There was an error.</p>}  
                </form>
            </div> 
              <div>
                  <Address/>
              </div> 
            </div>      
        );
    }

    submitForm(event) {
        event.preventDefault();
         const form = event.target;
         //console.log(form.reset())
         const data = new FormData(form);
         console.log(data)
         const request = new XMLHttpRequest();
         request.open(form.method, form.action);
         request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = () => {
            if(request.readyState !== XMLHttpRequest.DONE) 
             return 
             if(request.status === 200) {
                 form.reset();
                 this.setState({ status: "SUCCESS", loading: false});     
             }
             else {
                 this.setState ({ status: "ERROR", loading: false});
             }
        };
        request.send(data)
    }
    
     setStatus() {
         this.setState({status: ""});
     }
}


export default ContactForm


//  NOTE: XMLHttpRequest.DONE = 4