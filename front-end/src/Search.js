import ProviderList from './ProviderList';
import useFetch from './useFetch';
import { useState, useEffect } from 'react';
import { FaHandsHelping, FaGithub } from 'react-icons/fa';

const Search = () => {
    const { providers, isPending, error } = useFetch('http://localhost:8000/providers')
    console.log("Providers= ", providers);

    const [filterName, setFilterName] = useState("");
    const [service, setService] = useState("");

    const updateName = (e) => {
        setFilterName(e.target.value);
    }

    const [state, setState] = useState({
        hookAdotpion: false,
        hookBurial: false,
        hookChildcare: false,
        hookClothing: false,
        hookCrisisCounseling: false,
        hookDentalCare: false,
        hookDisability: false,
        hookDisaster: false,
        hookDomesticViolence: false,
        hookEducation: false,
        hookElderServices: false,
        hookEmploymentServices: false,
        hookFoodAssistance: false,
        hookHIVServices: false,
        hookImmigration: false,
        hookInfoReferral: false,        
        hookMedicalCare: false,
        hookMentalHealth: false,
        hookOther: false,
        hookPregnancyServices: false,
        hookPrescriptionAssistance: false,
        hooksShelters: false,
        hookSocialSecurity: false,
        hookSubstanceAbuse: false,
        hookTransportation: false,
        hookUtilities: false,
        hookVeterans: false,
        hookVeterinary: false,
        hookVoterRegistration: false,
        hookVisionCare: false
    })

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    function CalculateDistance(provider) {
        const haversine = require('haversine');

        const start = {
            latitude: 29.64858664180642,    //coordinates for UF CISE bldg
            longitude: -82.34429149440759
        }
        
        const end = {
            latitude: provider.latitude,
            longitude: provider.longitude
        }
        
        const distance = haversine(start, end, {unit: 'mile'}).toFixed(2);
        return distance;
    }

    function assignDistance() {
        providers && providers.map((provider) => (
            provider.distanceCrow = CalculateDistance(provider)
        ))
    };

    assignDistance();
    console.log("My original, sortable list: ", providers);

    function sortByDistance(property) {
        return function(a,b) {
            if(a[property] > b[property])
                return 1;
            else if(a[property] < b[property])
                return -1;
            return 0;
        }
    }
    const sortedProviders = [].concat(providers).sort(sortByDistance("distanceCrow"));
    console.log("My new sorted list: ", sortedProviders);
    console.log("Hopefully still my original list: ", providers);

    return (
        <div className="search">
            <div className="search-sidebar">
                <div className="ui-filter-by-name">
                    <h2>Narrow my search:</h2>
                    <br />
                    <h4>Filter by name:</h4>
                    <input type="search" value={filterName} onChange={updateName}/>
                </div>

                {/*
                <div className="ui-filter-by-services">
                    <label>Services:</label>
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value="null">select one</option>
                        <option value="medical care">medical care</option>
                        <option value="clothing">clothing</option>
                    </select>
                </div>
                */}

                <div className="ui-checkboxes-services">
                    <form>
                        <h4>By services:</h4>
                        <label>
                            <input
                                type="checkbox"
                                name="hookAdoption"
                                checked={state.hookAdoption}
                                onChange={handleChange}
                            />
                            Adoption
                        </label>
                        <br />
                        {/*
                        <label>
                            <input
                                type="checkbox"
                                name="hookBurial"
                                checked={state.hookBurial}
                                onChange={handleChange}
                            />
                            Burial
                        </label>
                        <br />
                        */}
                        <label>
                            <input
                                type="checkbox"
                                name="hookChildcare"
                                checked={state.hookChildcare}
                                onChange={handleChange}
                            />
                            Childcare
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookClothing"
                                checked={state.hookClothing}
                                onChange={handleChange}
                            />
                            Clothing
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookCrisisCounseling"
                                checked={state.hookCrisisCounseling}
                                onChange={handleChange}
                            />
                            Crisis Counseling
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookDentalCare"
                                checked={state.hookDentalCare}
                                onChange={handleChange}
                            />
                            Dental Care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookDisability"
                                checked={state.hookDisability}
                                onChange={handleChange}
                            />
                            Disability
                        </label>
                        <br />
                        {/*
                        <label>
                            <input
                                type="checkbox"
                                name="hookDisaster"
                                checked={state.hookDisaster}
                                onChange={handleChange}
                            />
                            Disaster
                        </label>
                        <br />
                        */}
                        <label>
                            <input
                                type="checkbox"
                                name="hookDomesticViolence"
                                checked={state.hookDomesticViolence}
                                onChange={handleChange}
                            />
                            Domestic Violence
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookEducation"
                                checked={state.hookEducation}
                                onChange={handleChange}
                            />
                            Education
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookElderServices"
                                checked={state.hookElderServices}
                                onChange={handleChange}
                            />
                            Elder Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookEmploymentServices"
                                checked={state.hookEmploymentServices}
                                onChange={handleChange}
                            />
                            Employment Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookFoodAssistance"
                                checked={state.hookFoodAssistance}
                                onChange={handleChange}
                            />
                            Food assistance
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookHIVServices"
                                checked={state.hookHIVServices}
                                onChange={handleChange}
                            />
                            HIV Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookImmigration"
                                checked={state.hookImmigration}
                                onChange={handleChange}
                            />
                            Immigration
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookInfoReferral"
                                checked={state.hookInfoReferral}
                                onChange={handleChange}
                            />
                            Info/Referral
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookMedicalCare"
                                checked={state.hookMedicalCare}
                                onChange={handleChange}
                            />
                            Medical care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookMentalHealth"
                                checked={state.hookMentalHealth}
                                onChange={handleChange}
                            />
                            Mental Health
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookPregnancyServices"
                                checked={state.hookPregnancyServices}
                                onChange={handleChange}
                            />
                            Pregnancy Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookPrescriptionServices"
                                checked={state.hookPrescriptionServices}
                                onChange={handleChange}
                            />
                            Prescription Services
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookShelters"
                                checked={state.hookShelters}
                                onChange={handleChange}
                            />
                            Shelters
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookSocialSecurity"
                                checked={state.hookSocialSecurity}
                                onChange={handleChange}
                            />
                            Social Security
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookSubstanceAbuse"
                                checked={state.hookSubstanceAbuse}
                                onChange={handleChange}
                            />
                            Substance Abuse
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookTransportation"
                                checked={state.hookTransportation}
                                onChange={handleChange}
                            />
                            Transportation
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookUtilities"
                                checked={state.hookUtilities}
                                onChange={handleChange}
                            />
                            Utilities
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookVeterans"
                                checked={state.hookVeterans}
                                onChange={handleChange}
                            />
                            Veterans
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookVeterinary"
                                checked={state.hookVeterinary}
                                onChange={handleChange}
                            />
                            Veterinary
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookVoterRegistration"
                                checked={state.hookVoterRegistration}
                                onChange={handleChange}
                            />
                            Voter Registration
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookVisionCare"
                                checked={state.hookVisionCare}
                                onChange={handleChange}
                            />
                            Vision Care
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="hookOther"
                                checked={state.hookOther}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                        <br />
                    </form>
                </div>
            </div>
            <div className="results-area">
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                { <ProviderList providers={sortedProviders.filter(
                    provider =>
                        (filterName !== "" && provider.name.toLowerCase().includes(filterName.toLowerCase())) ||
                        (
                            (!filterName && !state.hookAdoption && !state.hookBurial && !state.hookChildcare && !state.hookClothing &&
                                !state.hookClothing && !state.hookCrisisCounseling && !state.hookDentalCare && !state.hookDisability &&
                                !state.hookDisaster && !state.hookDomesticViolence && !state.hookEducation && !state.hookElderServices &&
                                !state.hookEmploymentServices && !state.hookFoodAssistance && !state.hookHIVServices &&
                                !state.hookImmigration && !state.hookInfoReferral && !state.hookMedicalCare && !state.hookMentalHealth &&
                                !state.hookPregnancyServices && !state.hookPrescriptionAssistance && !state.hookShelters &&
                                !state.hookSocialSecurity && !state.hookSubstanceAbuse && !state.hookTransportation && !state.hookUtilities &&
                                !state.hookVeterans && !state.hookVeterinary && !state.hookVoterRegistration && !state.hookOther) ||
                            ((state.hookAdoption && provider.hasAdoption)) ||
                            ((state.hookBurial && provider.hasBurial)) ||
                            ((state.hookChildcare && provider.hasChildcare)) ||
                            ((state.hookClothing && provider.hasClothing)) ||
                            ((state.hookCrisisCounseling && provider.hasCrisisCounseling)) ||
                            ((state.hookDentalCare && provider.hasDentalCare)) ||
                            ((state.hookDisability && provider.hasDisability)) ||
                            ((state.hookDisaster && provider.hasDisaster)) ||
                            ((state.hookDomesticViolence && provider.hasDomesticViolence)) ||
                            ((state.hookEducation && provider.hasEducation)) ||
                            ((state.hookElderServices && provider.hasElderServices)) ||
                            ((state.hookEmploymentServices && provider.hasEmploymentServices)) ||
                            ((state.hookFoodAssistance && provider.hasFoodAssistance)) ||
                            ((state.hookHIVServices && provider.hasHIVServices)) ||
                            ((state.hookImmigration && provider.hasImmigration)) ||
                            ((state.hookInfoReferral && provider.hasInfoReferral)) ||
                            ((state.hookMedicalCare && provider.hasMedicalCare)) ||
                            ((state.hookMentalHealth && provider.hasMentalHealth)) ||
                            ((state.hookPregnancyServices && provider.hasPregnancyServices)) ||
                            ((state.hookPrescriptionAssistance && provider.hasPrescriptionAssistance)) ||
                            ((state.hookShelters && provider.hasShelters)) ||
                            ((state.hookSocialSecurity && provider.hasSocialSecurity)) ||
                            ((state.hookSubstanceAbuse && provider.hasSubstanceAbuse)) ||
                            ((state.hookTransportation && provider.hasTransportation)) ||
                            ((state.hookUtilities && provider.hasUtilities)) ||
                            ((state.hookVeterans && provider.hasVeterans)) ||
                            ((state.hookVeterinary && provider.hasVeterinary)) ||
                            ((state.hookVoterRegistration && provider.hasVoterRegistration)) ||
                            ((state.hookVisionCare && provider.hasVisionCare))
                        )
                    )} title="Search:" />}
            </div>
            
        </div>
    );
}
 
export default Search;