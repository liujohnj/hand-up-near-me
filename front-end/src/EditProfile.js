import { useParams } from "react-router-dom";
import ReturnServices from "./ReturnServices";
import { useState, useEffect } from 'react';

const EditProfile = () => {
   
    const [providers, setProviders] = useState([]);
    const { id } = useParams();
    const url = ('http://localhost:5000/providers/' + id);

    useEffect(() => {
       const fetchData = async () => {
           const response = await fetch(url);
           const newData = await response.json();
           setProviders(newData);
        };
        fetchData();
    }, []);

    const options = {
        method: 'POST',
        body: JSON.stringify(
            {
                "name":providers.name,
                "address1":providers.address1,
                "address2":providers.address2,
                "city":providers.city,
                "state":providers.state,
                "zipCode":providers.zipCode
            }),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleChangeTextField = e => {
        setProviders({ [e.target.name] : e.target.value });
    }

    const handleSubmitTextFields = e => {
        fetch('http://localhost:5000/providers/update/' + id, options)
            .then(res => res.json())
            .then(res => console.log("res: ", res));
    }
    
    return (
        <div className="provider-details">
            { providers && (
                <article>
                    <form>
                        Provider Name:
                        <input type="text" size="50" name="name" placeholder={ providers.name } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Street address:
                        <input type="text" size="50" name="address1" placeholder={ providers.address1 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Suite #:
                        <input type="text" size="50" name="address2" placeholder={ providers.address2 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        City:
                        <input type="text" size="50" name="icity" placeholder={ providers.city } onChange={handleChangeTextField}/>
                        <br />
                        <br />
                        State:
                        <input type="text" size="50" name="istate" placeholder={ providers.state } onChange={handleChangeTextField}/>
                        <br />
                        <br />
                        Zip code:
                        <input type="text" size="50" name="zipCode" placeholder={ providers.zipCode } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        <input type="submit" value="update" onClick={handleSubmitTextFields} />
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