// npm i -S @react-google-maps/api
// Great value: https://react-google-maps-api-docs.netlify.app/
// Also useful: https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
// Helped also: https://developers.google.com/maps/documentation/javascript/examples/distance-matrix#maps_distance_matrix-javascript

import React from 'react';
import { GoogleMap, LoadScript, Marker, DistanceMatrixService } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const MapLocation = (props) => {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    //Longitude/Latitdude for UF CISE = 29.648530696818543, -82.34430222465772
    
    var center = {
        lat: 29.648530696818543,
        lng: -82.34430222465772
        //lat: props.provider.latitude,
        //lng: props.provider.longitude
    };

    
    if (props && props.provider) {
        center = {
            //lat: 29.648530696818543,
            //lng: -82.34430222465772
            lat: props.provider.latitude,
            lng: props.provider.longitude
        };
    }


    //providers && providers.longitude && console.log("logging providers: ", providers.longitude);
    //props && props.provider && console.log("logging provider's longitude: ", props.provider.longitude);
    //props && props.provider && console.log("logging provider's longitude: ", props.provider.longitude);

    const [myDistance, setMyDistance] = useState("");
    const [myDuration, setMyDuration] = useState("");
    const [myFrom, setMyFrom] = useState("");
    const [myTo, setMyTo] = useState("");


    const destinationIcon = "https://chart.googleapis.com/chart?" +
    "chst=d_map_pin_letter&chld=D|FF0000|000000";

    const keyAPI = process.env.REACT_APP_API_KEY
    
    return (
        <div>
            <LoadScript
                googleMapsApiKey={keyAPI}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <Marker key="Destination" position={center} icon={destinationIcon}/>
                </GoogleMap>

                
            </LoadScript>
        </div>
    )
}

export default MapLocation;