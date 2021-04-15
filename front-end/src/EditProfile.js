import { useParams } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import MapLocation from "./MapLocation";
import ReturnServices from "./ReturnServices";
import useFetch from "./useFetch";
import { useState, useEffect, useLocalStorage } from 'react';
//import axios from 'axios';




const EditProfile = () => {
    const { id } = useParams();
    const { providers, error, isPending } = useFetch('http://localhost:5000/providers/' + id)


    const [zipcode, setzipCode] = useState("33701");
  
    const mypost = {
        zipCode: zipcode
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(mypost),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleChangeZipCode = e => {
        setzipCode(e.target.value);
        console.log("one: ", zipcode);
       
    }

    const handleSubmit = e => {
        fetch('http://localhost:5000/providers/update/607786327c5e2f902d2d55f0', options)
            .then(res => res.json())
            .then(res => console.log("res: ", res));
        console.log("two: ", zipcode);
    }


    return (
        <div className="provider-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { providers && (
                <article>
                    <form onSubmit={handleSubmit}>
                        Provider Name:
                        <input type="text" size="50" name="name" placeholder={ providers.name } />
                        <br />
                        <br />
                        Street address:
                        <input type="text" size="50" name="address1" placeholder={ providers.address1 } />
                        <br />
                        <br />
                        Suite #:
                        <input type="text" size="50" name="address2" placeholder={ providers.address2 } />
                        <br />
                        <br />
                        City:
                        <input type="text" size="50" name="city" placeholder={ providers.city } />
                        <br />
                        <br />
                        State:
                        <input type="text" size="50" name="state" placeholder={ providers.state } />
                        <br />
                        <br />
                        Zip code:
                        <input type="text" size="50" name="zip" placeholder={ providers.zipCode } onChange={handleChangeZipCode} />
                        <input type="submit" value="update" />
                        <br />
                        <br />
                    </form>
                </article>
            )}
            <br />
            <ReturnServices provider={ providers } />
        </div>
    );
}
 
export default EditProfile;