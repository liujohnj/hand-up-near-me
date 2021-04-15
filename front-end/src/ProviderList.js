import { Link } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import ReturnServices from "./ReturnServices";

const ProviderList = ({ providers, title }) => {    // destructured vs props
    //const providers = props.providers;
    //const title = props.title;         removed this at one point

    /*
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
        providers.map((provider) => (
            provider.distanceCrow = CalculateDistance(provider)
        ))
    };
    assignDistance();

    console.log("My sortable list: ", providers);

    

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
    */
    return (
        <div className = "provider-list">
            <h2>{ title }</h2>
            {providers && providers.map((provider) => (   //checks to avoid null errors
                <div className="provider-preview" key={provider && provider._id}>
                    <Link to={ `/providers/${provider && provider._id}` }>
                        <h2> { provider && provider.name }</h2>
                        <p>{ provider && provider.address1 }</p>
                        <p>{ provider && provider.address2 }</p>
                        <p>{ provider && (provider.city + ", " + provider.state + " " + provider.zipCode) }</p>
                        <p>{ provider && ("Tel: " + provider.phone) }</p>
                        <br />
                        <p>{ provider && ("Distance as the crow flies: " + provider.distanceCrow + " miles")}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
//<CalcDistance provider={provider} /> miles
export default ProviderList;