import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const EditProfile = () => {
    const [originalData, setOriginalData] = useState(null);

    const [modifiedData, setModifiedData] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        latitude: 0.0,
        longitude: 0.0,
        phone: '',
        url: '',
        email: '',
        text1: '',
        text2: '',
        imageUrl: ''
    });

    const [modifiedCheckboxes, setModifiedCheckboxes] = useState({
        hasAdoption: false,
        hasChildcare: false,
        hasClothing: false,
        hasCrisiCounseling: false,
        hasDentalCare: false,
        hasDisability: false,
        hasDomesticViolence: false,
        hasEducation: false,
        hasElderServices: false,
        hasEmploymentServices: false,
        hasFoodAssistance: false,
        hasHIVServices: false,
        hasImmigration: false,
        hasInfoRefferal: false,
        hasMedicalCare: false,
        hasLegalAid: false,
        hasMentalHealth: false,
        hasPregnancyServices: false,
        hasPrescriptionAssistance: false,
        hasShelters: false,
        hasSubstanceAbuse: false,
        hasTransportation: false,
        hasVeterans: false,
        hasVoterRegistration: false,
        hasVisionCare: false,
        hasOther: false
    });

    const { id } = useParams();

    useEffect(() => {
       const fetchData = async () => {
           const response = await fetch(`http://localhost:5000/providers/${id}`);
           const newData = await response.json();
           setOriginalData(newData);
           setModifiedCheckboxes(newData);
        };
        fetchData();
    }, [id]);

    const handleChangeTextField = e => {
        setModifiedData({ ...modifiedData, [e.target.name] : e.target.value });
    };

    const handleChangeCheckbox = e => {
        setOriginalData({ ...originalData, [e.target.name] : e.target.checked });
        setModifiedCheckboxes({ ...modifiedCheckboxes, [e.target.name] : e.target.checked });
    };

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
                    "zipCode": modifiedData.zipCode || originalData.zipCode,
                    "latitude": modifiedData.latitude || originalData.latitude,
                    "longitude": modifiedData.longitude || originalData.longitude,
                    "phone": modifiedData.phone || originalData.phone,
                    "url": modifiedData.url || originalData.url,
                    "email": modifiedData.email || originalData.email,
                    "text1": modifiedData.text1 || originalData.text1,
                    "text2": modifiedData.text2 || originalData.text2,
                    "imageUrl": modifiedData.imageUrl || originalData.imageUrl,
                    "hasAdoption": modifiedCheckboxes.hasAdoption,
                    "hasChildcare": modifiedCheckboxes.hasChildcare,
                    "hasClothing": modifiedCheckboxes.hasClothing,
                    "hasCrisiCounseling": modifiedCheckboxes.hasCrisiCounseling,
                    "hasDentalCare": modifiedCheckboxes.hasDentalCare,
                    "hasDisability": modifiedCheckboxes.hasDisability,
                    "hasDomesticViolence": modifiedCheckboxes.hasDomesticViolence,
                    "hasEducation": modifiedCheckboxes.hasEducation,
                    "hasElderServices": modifiedCheckboxes.hasElderServices,
                    "hasEmploymentServices": modifiedCheckboxes.hasEmploymentServices,
                    "hasFoodAssistance": modifiedCheckboxes.hasFoodAssistance,
                    "hasHIVServices": modifiedCheckboxes.hasHIVServices,
                    "hasImmigration": modifiedCheckboxes.hasImmigration,
                    "hasInfoRefferal": modifiedCheckboxes.hasInfoRefferal,
                    "hasMedicalCare": modifiedCheckboxes.hasMedicalCare,
                    "hasLegalAid": modifiedCheckboxes.hasLegalAid,
                    "hasMentalHealth": modifiedCheckboxes.hasMentalHealth,
                    "hasPregnancyServices": modifiedCheckboxes.hasPregnancyServices,
                    "hasPrescriptionAssistance": modifiedCheckboxes.hasPrescriptionAssistance,
                    "hasShelters": modifiedCheckboxes.hasShelters,
                    "hasSubstanceAbuse": modifiedCheckboxes.hasSubstanceAbuse,
                    "hasTransportation": modifiedCheckboxes.hasTransportation,
                    "hasVeterans": modifiedCheckboxes.hasVeterans,
                    "hasVoterRegistration": modifiedCheckboxes.hasVoterRegistration,
                    "hasVisionCare": modifiedCheckboxes.hasVisionCare,
                    "hasOther": modifiedCheckboxes.hasOther
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:5000/providers/update/' + id, options)
            .then(res => res.json())
            .then(res => console.log("res: ", res));
        console.log("orig: ", originalData);
        console.log("mod check: ", modifiedCheckboxes);
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
                        Latitude:
                        <input type="text" size="50" name="latitude" value={modifiedData.latitude} placeholder={ originalData.latitude } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Longitude:
                        <input type="text" size="50" name="longitude" value={modifiedData.longitude} placeholder={ originalData.longitude } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Phone:
                        <input type="text" size="50" name="phone" value={modifiedData.phone} placeholder={ originalData.phone } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        URL:
                        <input type="text" size="50" name="url" value={modifiedData.url} placeholder={ originalData.url } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        email:
                        <input type="text" size="50" name="email" value={modifiedData.email} placeholder={ originalData.email } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Text Block #1:
                        <input type="text" style={{verticalAlign:"top", width:"400px", height:"50px"}} name="text1" value={modifiedData.text1} placeholder={ originalData.text1 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Text Block #2:
                        <input type="text" size="50" name="text2" value={modifiedData.text2} placeholder={ originalData.text2 } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        Image URL:
                        <input type="text" size="50" name="imageUrl" value={modifiedData.imageUrl} placeholder={ originalData.imageUrl } onChange={handleChangeTextField} />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h3>Services:</h3>
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                                name="hasAdoption"
                                checked= {originalData.hasAdoption || modifiedCheckboxes.hasAdoption }
                                onChange={handleChangeCheckbox}
                            />
                            Adoption
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasChildcare"
                                checked= {originalData.hasChildcare || modifiedCheckboxes.hasChildcare }
                                onChange={handleChangeCheckbox}
                            />
                            Childcare
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasClothing"
                                checked= {originalData.hasClothing || modifiedCheckboxes.Clothing }
                                onChange={handleChangeCheckbox}
                            />
                            Clothing
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasCrisisCounseling"
                                checked= {originalData.hasCrisisCounseling || modifiedCheckboxes.hasCrisisCounseling }
                                onChange={handleChangeCheckbox}
                            />
                            Crisis Counseling
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasDentalCare"
                                checked= {originalData.hasDentalCare || modifiedCheckboxes.hasDentalCare }
                                onChange={handleChangeCheckbox}
                            />
                            Dental Care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasDisability"
                                checked= {originalData.hasDisability || modifiedCheckboxes.hasDisability }
                                onChange={handleChangeCheckbox}
                            />
                            Disability
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasDomesticViolence"
                                checked= {originalData.hasDomesticViolence || modifiedCheckboxes.hasDomesticViolence }
                                onChange={handleChangeCheckbox}
                            />
                            Domestic Violence
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasEducation"
                                checked= {originalData.hasEducation || modifiedCheckboxes.hasEducation }
                                onChange={handleChangeCheckbox}
                            />
                            Education
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasElderServices"
                                checked= {originalData.hasElderServices || modifiedCheckboxes.hasElderServices }
                                onChange={handleChangeCheckbox}
                            />
                            Elder Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasEmploymentServices"
                                checked= {originalData.hasEmploymentServices || modifiedCheckboxes.hasEmploymentServices }
                                onChange={handleChangeCheckbox}
                            />
                            Employment Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasFoodAssistance"
                                checked= {originalData.hasFoodAssistance || modifiedCheckboxes.hasFoodAssistance }
                                onChange={handleChangeCheckbox}
                            />
                            Food Assistance
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasHIVServices"
                                checked= {originalData.hasHIVServices || modifiedCheckboxes.hasHIVServices }
                                onChange={handleChangeCheckbox}
                            />
                            HIV Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasImmigration"
                                checked= {originalData.hasImmigration || modifiedCheckboxes.hasImmigration }
                                onChange={handleChangeCheckbox}
                            />
                            Immigration
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasInfoReferral"
                                checked= {originalData.hasInfoReferral || modifiedCheckboxes.hasInfoReferral }
                                onChange={handleChangeCheckbox}
                            />
                            Info/Referral
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasMedicalCare"
                                checked= {originalData.hasMedicalCare || modifiedCheckboxes.hasMedicalCare }
                                onChange={handleChangeCheckbox}
                            />
                            Medical Care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasLegalAid"
                                checked= {originalData.hasLegalAid || modifiedCheckboxes.hasLegalAid }
                                onChange={handleChangeCheckbox}
                            />
                            Legal Aid
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasMentalHealth"
                                checked= {originalData.hasMentalHealth || modifiedCheckboxes.hasMentalHealth }
                                onChange={handleChangeCheckbox}
                            />
                            Mental Health
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasPregnancyServices"
                                checked= {originalData.hasPregnancyServices || modifiedCheckboxes.hasPregnancyServices }
                                onChange={handleChangeCheckbox}
                            />
                            Pregnancy Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasPrescriptionAssistance"
                                checked= {originalData.hasPrescriptionAssistance || modifiedCheckboxes.hasPrescriptionAssistance }
                                onChange={handleChangeCheckbox}
                            />
                            Prescription Assistance
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasShelters"
                                checked= {originalData.hasShelters || modifiedCheckboxes.hasShelters }
                                onChange={handleChangeCheckbox}
                            />
                            Shelters
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasSubstanceAbuse"
                                checked= {originalData.hasSubstanceAbuse || modifiedCheckboxes.hasSubstanceAbuse }
                                onChange={handleChangeCheckbox}
                            />
                            Substance Abuse
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasTransportation"
                                checked= {originalData.hasTransportation || modifiedCheckboxes.hasTransportation }
                                onChange={handleChangeCheckbox}
                            />
                            Transportation
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasVeterans"
                                checked= {originalData.hasVeterans || modifiedCheckboxes.hasVeterans }
                                onChange={handleChangeCheckbox}
                            />
                            Veterans
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasVeterinary"
                                checked= {originalData.hasVeterinary || modifiedCheckboxes.hasVeterinary }
                                onChange={handleChangeCheckbox}
                            />
                            Veterinary
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasVoterRegistration"
                                checked= {originalData.hasVoterRegistration || modifiedCheckboxes.hasVoterRegistration }
                                onChange={handleChangeCheckbox}
                            />
                            Voter Registration
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasVisionCare"
                                checked= {originalData.hasVisionCare || modifiedCheckboxes.hasVisionCare }
                                onChange={handleChangeCheckbox}
                            />
                            Vision Care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hasOther"
                                checked= {originalData.hasOther || modifiedCheckboxes.hasOther }
                                onChange={handleChangeCheckbox}
                            />
                            Other
                        </label>
                        <br />
                        <br />
                        <input type="submit" value="SAVE" onClick={handleSubmitTextFields} />
                    </form>
                </article>
            )}
        </div>
    );
}

export default EditProfile;