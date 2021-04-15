

import { useParams } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import MapLocation from "./MapLocation";
import ReturnServices from "./ReturnServices";
import useFetch from "./useFetch";
import { useState, useEffect, useLocalStorage } from 'react';


const EditProfile = () => {
    const { id } = useParams();
    const { providers, error, isPending } = useFetch('http://localhost:8000/providers/' + id)

    /*
    const fs = require('fs');
    fs.readfile('./data/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file from disk: ${err}');
        } else {
            const databases = JSON.parse(data);
            databases.forEach(dbf => {
                console.log('${dbf.id}: ${dbf.name}');
            });
        }
    });
    */
    
    /*
    const defaultStrCheckboxes = JSON.stringify(defaultCheckboxes);

    const checkboxesFromLocalStorage = JSON.parse(localStorage.getItem('myCheckboxes') || defaultStrCheckboxes);
    const [state, setState] = useState(checkboxesFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('myCheckboxes', JSON.stringify(state))
    }, [state]);

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    */
    return (
        <div className="provider-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { providers && (
                <article>
                    <form>
                        <label>
                            Provider Name:
                            <br/>
                            <input type="text" size="50" name="name" placeholder={ providers.name } />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                    <br/>
                    <br/>

                    <p>{ providers.address1 }</p>
                    <p>{ providers.address2 }</p>
                    <p>{ providers.city + ", " + providers.state + " " + providers.zipCode }</p>
                    <p>{ "Tel: " + providers.phone }</p>
                    <br />
                    <form>
                        <label>
                            Text1:
                            <br/>
                            <textarea rows="5" cols="80" name="text1" placeholder={ providers.text1 } />
                            <br/>
                            <input type="submit" value="Submit" />
                        </label>
                    </form>

                    <form>
                    <label>
                        <input
                            type="checkbox"
                            name="hookChildcare"
                            checked={providers.hasAdoption}
                            //onChange={handleChange}
                        />
                        Adoption
                    </label>
                    </form>
                </article>
            )}
            <br />
            <ReturnServices provider={ providers } />
            <MapLocation provider={ providers } />
        </div>
    );
}
 
export default EditProfile;