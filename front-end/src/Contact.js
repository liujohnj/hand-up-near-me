//Installed:
//  npm i use-position --save
//  Portions of this came from: https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de

//Also installed:
//  npm install react-geocode react-google-autocomplete react-google-maps --save
//  Followed guide from: https://www.youtube.com/watch?v=Alz13kGluL8
//  Used code from: https://tomchentw.github.io/react-google-maps/

//Latest issue ... which npm package???
//  react-google-maps versus google-maps-react versus google-map-react ... they are all different
//  This article jumbles the first two:  https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
//  Perhaps the second one doesn't exist???

import { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DistanceMatrixService } from "react-google-maps";
import Geocode from "react-geocode";
import MapLocation from './MapLocation';


const Contact = () => {

    //Longitude/Latitdude for UF CISE = 29.648530696818543, -82.34430222465772
    //const [userLatitude, setUserLatitude] = useState("29.648530696818543");
    //const [userLongitude, setUserLongitude] = useState("-82.34430222465772");
    //const [error, setError] = useState(null);
    
    /* Have to be careflu with this ... don't want to re-render map and trigger
    Google maps API key

    const watch = true;
    const {
        userLatitude,
        userLongitude,
        speed,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch, {enableHighAccuracy: true});
    */

    /* Did not use this part at all
    const onChange = ({coords}) => {
        setPosition({
            userLatitude: coords.userLatitude,
            userLongitude: coords.userLongitude,
        })
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect (() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported');
            return;
        }
        watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);
    */
    /*
    const keyAPI = process.env.REACT_APP_API_KEY;
    console.log("My Key = ", keyAPI);
    Geocode.setApiKey(keyAPI);

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat: parseFloat(userLatitude), lng: parseFloat(userLongitude) }}
        >
          <Marker
            position={{ lat: parseFloat(userLatitude), lng: parseFloat(userLongitude) }}
          />
        </GoogleMap>
      ));
    */
    //const DistanceMatrixService = {}

    return (
        <div className="Contact">
            <h2>Contact us</h2>
            <MapLocation />
            {/*
            <div className="myLocation">
                <code>
                    userLatitude: {userLatitude}<br/>
                    userLongitude: {userLongitude}<br/>
                </code>
            </div>
            <div className="map">
                <MapWithAMarker
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keyAPI}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            */}
                {/*
                <DistanceMatrixService
                    options={{
                        destinations: [{lat:29.656212698502582, lng:-82.32376229461262}],
                        origins: [{lat:parseFloat(userLatitude), lng: parseFloat(userLongitude)}],
                        travelMode: "DRIVING",
                    }}
                    callback = {(response) => {console.log(response)}}
                />
                */}
            {/*</div>*/}
            
        </div>
    );
}

export default Contact;