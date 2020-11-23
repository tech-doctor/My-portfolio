import React, { Component } from 'react'
import Form from './Form/Form'
import Map from './Map/GoogleMap'


class Contact extends Component {
    render() {
        return (
            <div className = 'contact'>
                <Form/>
                <Map/>     
            </div>
        )
    }
}

export default Contact
