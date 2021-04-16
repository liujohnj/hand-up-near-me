import { useParams } from "react-router-dom";
import ReturnServices from "./ReturnServices";
import { useState, useEffect } from 'react';

const EditProfile = () => {
    const [originalData, setOriginalData] = useState(null)
    const [modifiedData, setModifiedData] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: ''
    })
    const { id } = useParams();

    useEffect(() => {
       const fetchData = async () => {
           const response = await fetch(`http://localhost:5000/providers/${id}`);
           const newData = await response.json();
           setOriginalData(newData);
        };
        fetchData();
    }, [id]);

    const handleChangeTextField = e => {
        setModifiedData({ ...modifiedData, [e.target.name] : e.target.value.trim() })
    }

    const handleSubmitTextFields = (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    "name": modifiedData.name || originalData.name,
                    "address1": modifiedData.address1 || originalData.address1,
                    "address2": modifiedData.address2 || originalData.address2,
                    "city": modifiedData.city || originalData.city,
                    "state": modifiedData.state || originalData.state,
                    "zipCode": modifiedData.zipCode || originalData.zipCode
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:5000/providers/update/' + id, options)
            .then(res => res.json())
            .then(res => console.log("res: ", res));
    }

    return (
        <div className="provider-details">
            { originalData && (
                <article>
                    <form>
                        Provider Name:
                        <input type="text" size="50" name="name" value={modifiedData.name} placeholder={ originalData.name } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Street address:
                        <input type="text" size="50" name="address1" value={modifiedData.address1} placeholder={ originalData.address1 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Suite #:
                        <input type="text" size="50" name="address2" value={modifiedData.address2} placeholder={ originalData.address2 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        City:
                        <input type="text" size="50" name="city" value={modifiedData.city} placeholder={ originalData.city } onChange={handleChangeTextField}/>
                        <br />
                        <br />
                        State:
                        <input type="text" size="50" name="state" value={modifiedData.state} placeholder={ originalData.state } onChange={handleChangeTextField}/>
                        <br />
                        <br />
                        Zip code:
                        <input type="text" size="50" name="zipCode" value={modifiedData.zipCode} placeholder={ originalData.zipCode } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        <input type="submit" value="update" onClick={handleSubmitTextFields} />
                        <br />
                        <br />
                    </form>
                </article>
            )}
            <br />
            <ReturnServices provider={ originalData } />
        </div>
    );
}

export default EditProfile;