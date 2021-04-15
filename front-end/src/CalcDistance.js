import React from 'react';

const CalcDistance = (props) => {
    const haversine = require('haversine');

    //Fixed coordinates are for UF CISE
    const start = {
        latitude: 29.64858664180642,    //coordinates for UF CISE bldg
        longitude: -82.34429149440759
    }
    
    var end = {
        latitude: 29.64858664180642,    //coordinates for UF CISE bldg
        longitude: -82.34429149440759
    }

    if (props && props.provider) {
        end = {
            latitude: props.provider.latitude,
            longitude: props.provider.longitude
        }
    }
    
    const distance = haversine(start, end, {unit: 'mile'}).toFixed(2);
    console.log(props);
    console.log(end);

    return (
        <div>
            {distance}
        </div>
        
    );
}
 
export default CalcDistance;