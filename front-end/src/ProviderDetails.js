import { useParams } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import MapLocation from "./MapLocation";
import ReturnServices from "./ReturnServices";
import useFetch from "./useFetch";

const ProviderDetails = () => {
    const { id } = useParams();
    const { providers, error, isPending } = useFetch('http://localhost:5000/providers/' + id)

    return (
        <div className="provider-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { providers && (
                <article>
                    <h2>{ providers.name }</h2>
                    <p>{ providers.address1 }</p>
                    <p>{ providers.address2 }</p>
                    <p>{ providers.city + ", " + providers.state + " " + providers.zipCode }</p>
                    <p>{ "Tel: " + providers.phone }</p>
                    <br />
                    <p>{ providers.text1 }</p>
                </article>
            )}
            <br />
            <ReturnServices provider={ providers } />
            <MapLocation provider={ providers } />
        </div>
    );
}
 
export default ProviderDetails;