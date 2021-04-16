import ProviderList from './ProviderList';
import useFetch from './useFetch';
import { useState, useEffect, useLocalStorage } from 'react';

const Search = () => {
    
    const { providers, isPending, error } = useFetch('http://localhost:5000/providers/list');
  
    const nameFromLocalStorage = localStorage.getItem('myFilterName') || "";
    const [filterName, setFilterName] = useState(nameFromLocalStorage);
    const [searchByDistance, setSearchByDistance] = useState(false);
    const [dropdown, setDropdown] = useState("32601");
        
    useEffect(() => {
        localStorage.setItem('myFilterName', filterName)
    }, [filterName]);


    const updateName = (e) => {
        setFilterName(e.target.value);
    }

    const defaultCheckboxes = {
        hookAdoption: false,
        hookChildcare: false,
        hookClothing: false,
        hookCrisisCounseling: false,
        hookDentalCare: false,
        hookDisability: false,
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
        hookPregnancyServices: false,
        hookPrescriptionAssistance: false,
        hooksShelters: false,
        hookSubstanceAbuse: false,
        hookTransportation: false,
        hookVeterans: false,
        hookVeterinary: false,
        hookVoterRegistration: false,
        hookVisionCare: false,
        hookOther: false,
    }

    const defaultStrCheckboxes = JSON.stringify(defaultCheckboxes);

    const checkboxesFromLocalStorage = JSON.parse(localStorage.getItem('myCheckboxes') || defaultStrCheckboxes);

    const [state, setState] = useState(checkboxesFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('myCheckboxes', JSON.stringify(state));
    }, [state]);

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const handleSearchByDistance = e => {
        setSearchByDistance(e.target.checked);
     };

    const handleChangeDropdown = e => {
        setDropdown(e.target.value);
        console.log("new coord: ", e);
     };

    function CalculateDistance(provider) {
        const haversine = require('haversine');
        var lat = 29.64858664180642;    // coordinates of UFCISE bldg
        var long = -82.34429149440759;

        switch (dropdown) {
            case "32601":
                lat = 29.63964;
                long = -82.32146;
                break;
            case "32603":
                lat = 29.65082;
                long = -82.35590;
                break;
            case "32605":
                lat = 29.68129;
                long = -82.38564;
                break;
            case "32606":
                lat = 29.68419;
                long = -82.44238;
                break;
            case "32607":
                lat = 29.63842;
                long = -82.42252;
                break;
            case "32608":
                lat = 2958608;
                long = -8240314;
                break;
            case "32609":
                lat = 29.75794;
                long = -82.27576;
                break;
            case "32611":
                lat = 2964487;
                long = -82.35437;
                break;
            case "32641":
                lat = 29.64289;
                long = -82.24357;
                break;
            case "32653":
                lat = 29.76660;
                long = -82.41233;
                break;
            default:
                lat = 29.64858664180642;    //coordinates of UFCISE bldg
                long = -82.34429149440759;
        }

        const start = {
            latitude: lat,
            longitude: long
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

    const handleClearSearch = e => {
       setState(defaultCheckboxes);
       setFilterName("");
       localStorage.clear();
    };

    return (
        <div className="search">
            <div className="search-sidebar">
                <div className="ui-filter-by-name">
                    <h2>Narrow my search:</h2>
                    <br />
                    <h4>Filter by name:</h4>
                    <input type="search" value={filterName} onChange={updateName}/>
                </div>

                <div className="ui-checkboxes-services">
                    <form>
                        <h4>Filter by services:</h4>
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
                                name="hookPrescriptionAssistance"
                                checked={state.hookPrescriptionAssistance}
                                onChange={handleChange}
                            />
                            Prescription Assistance
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
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="searchByDistance"
                                onChange={handleSearchByDistance}
                            />
                            Search by Distance from ZIP code:
                        </label>
                        <select value={dropdown} onChange={handleChangeDropdown}>
                            <option value="32601">32601</option>
                            <option value="32603">32603</option>
                            <option value="32605">32605</option>
                            <option value="32606">32606</option>
                            <option value="32607">32607</option>
                            <option value="32608">32608</option>
                            <option value="32609">32609</option>
                            <option value="32611">32611</option>
                            <option value="32641">32641</option>
                            <option value="32653">32653</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" value="RESET SEARCH" onClick={handleClearSearch} />
                    </form>
                </div>
            </div>
            <div className="results-area">
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                { providers && <ProviderList providers={sortedProviders.filter(
                    provider =>
                        (filterName !== "" && provider.name.toLowerCase().includes(filterName.toLowerCase())) ||
                        (
                            (!filterName && !state.hookAdoption && !state.hookChildcare &&
                                !state.hookClothing && !state.hookCrisisCounseling && !state.hookDentalCare && !state.hookDisability &&
                                !state.hookDomesticViolence && !state.hookEducation && !state.hookElderServices &&
                                !state.hookEmploymentServices && !state.hookFoodAssistance && !state.hookHIVServices &&
                                !state.hookImmigration && !state.hookInfoReferral && !state.hookMedicalCare && !state.hookMentalHealth &&
                                !state.hookPregnancyServices && !state.hookPrescriptionAssistance && !state.hookShelters &&
                                !state.hookSubstanceAbuse && !state.hookTransportation && !state.hookVeterans &&
                                !state.hookVeterinary && !state.hookVoterRegistration && !state.hookVision && !state.hookOther) ||
                            ((state.hookAdoption && provider.hasAdoption)) ||
                            ((state.hookChildcare && provider.hasChildcare)) ||
                            ((state.hookClothing && provider.hasClothing)) ||
                            ((state.hookCrisisCounseling && provider.hasCrisisCounseling)) ||
                            ((state.hookDentalCare && provider.hasDentalCare)) ||
                            ((state.hookDisability && provider.hasDisability)) ||
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
                            ((state.hookSubstanceAbuse && provider.hasSubstanceAbuse)) ||
                            ((state.hookTransportation && provider.hasTransportation)) ||
                            ((state.hookUtilities && provider.hasUtilities)) ||
                            ((state.hookVeterans && provider.hasVeterans)) ||
                            ((state.hookVeterinary && provider.hasVeterinary)) ||
                            ((state.hookVoterRegistration && provider.hasVoterRegistration)) ||
                            ((state.hookVisionCare && provider.hasVisionCare)) ||
                            ((state.hookOther && provider.hasOther))
                        )
                    )} title="Search results:" distanceFlag={searchByDistance} />}
            </div>
            
        </div>
    );
}
 
export default Search;