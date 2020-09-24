import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from  'google-maps-react';
import './GoogleMap.css'

 class GoogleMap extends Component {
    render() {
        return (
            <div className ='map'>
               <Map 
                   google = {this.props.google}
                   zoom = {15}
                    style = {mapStyles}
                   initialCenter = {{lat: 6.3350, lng: 5.6037}}
               >
               <Marker 
                 position = {{ lat : 6.3337,  lng: 5.6001}}
                 />
                 </Map>
                 
            </div>
        )
    }
}

const mapStyles = {
    width: '75%',
    margin: 'auto',
    height: '50%'
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIoT3wEQz1O36uz-NVe9NWk0vZztHG5TA'
}) (GoogleMap);


