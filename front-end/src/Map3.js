// npm i -S @react-google-maps/api
// Great value: https://react-google-maps-api-docs.netlify.app/
// Also useful: https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
// Helped also: https://developers.google.com/maps/documentation/javascript/examples/distance-matrix#maps_distance_matrix-javascript

import React from 'react';
import { GoogleMap, LoadScript, Marker, DistanceMatrixService } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const Map3 = () => {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    //Longitude/Latitdude for UF CISE = 29.648530696818543, -82.34430222465772
    const center = {
        lat: 29.648530696818543,
        lng: -82.34430222465772
    };
    
    const [myDistance, setMyDistance] = useState("");
    const [myDuration, setMyDuration] = useState("");
    const [myFrom, setMyFrom] = useState("");
    const [myTo, setMyTo] = useState("");

    const originIcon = "https://chart.googleapis.com/chart?" +
    "chst=d_map_pin_letter&chld=O|FFFF00|000000";

    const destinationIcon = "https://chart.googleapis.com/chart?" +
    "chst=d_map_pin_letter&chld=D|FF0000|000000";

    function getDistance(response, status) {
        if (status === 'OK') {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
      
          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            for (var j = 0; j < results.length; j++) {
              var element = results[j];
              var distance = element.distance.text;
              var duration = element.duration.text;
              var from = origins[i];
              var to = destinations[j];
              console.log("i = ", i, "and j = ", j);
              console.log("element: ", element);
              console.log("distance: ", distance);
              console.log("duration: ", duration);
              console.log("from: ", from);
              console.log("to: ", to);
              setMyDistance(distance);
              setMyDuration(duration);
              setMyFrom(from);
              setMyTo(to);

            }
          }
        }
      }

    const keyAPI = process.env.REACT_APP_API_KEY
    
    return (
        <div>
            <LoadScript
                googleMapsApiKey={keyAPI}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <Marker key="My location" position={{lat:29.648530696818543, lng:-82.34430222465772}} icon={originIcon}/>
                    <Marker key="Destination" position={{lat:29.656212698502582, lng:-82.32376229461262}} icon={destinationIcon}/>
                </GoogleMap>

                
                <DistanceMatrixService
                    options={{
                        destinations: [{lat:29.656212698502582, lng:-82.32376229461262}],
                        origins: [{lat:29.648530696818543, lng:-82.34430222465772}],
                        travelMode: "DRIVING",
                    }}
                    callback = {getDistance}
                />
                <h4>Travel details:</h4>
                <p>My approximate location: {myFrom}</p>
                <p>My destination: {myTo}</p>
                <p>Distance: {myDistance}</p>
                <p>Duration: {myDuration}</p>
                
            </LoadScript>
        </div>
    )
}

export default Map3;