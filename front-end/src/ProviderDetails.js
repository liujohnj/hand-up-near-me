import { useParams } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import MapLocation from "./MapLocation";
import ReturnServices from "./ReturnServices";
import useFetch from "./useFetch";
import { apiDomain } from './apiDomain'
import { Form, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProviderDetails = () => {
    const { id } = useParams();

    const isProduction = apiDomain();
    //const { providers, error, isPending } = useFetch(isProduction + '/providers/' + id)
    const { providers, error, isPending } = useFetch('/providers/' + id)  //heroku

    return (
        <div className="provider-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { providers && (
                <article>
                    <Button variant="outline-primary" size="sm" href="/search">Back to search results</Button>{' '}
                    <br />
                    <br />
                    <h2>{ providers.name }</h2>
                    <p>{ providers.address1 }</p>
                    <p>{ providers.address2 }</p>
                    <p>{ providers.city + ", " + providers.state + " " + providers.zipCode }</p>
                    <p>{ "Tel: " + providers.phone }</p>
                    <p>{ providers.url }</p>
                    <br />
                    <p>{ providers.text1 }</p>
                </article>
            )}
            <br />
            <ReturnServices provider={ providers } />
            <MapLocation provider={ providers } />
            <br />
            <Button variant="outline-primary" size="sm" href="/search">Back to search results</Button>{' '}
        </div>
    );
}
 
export default ProviderDetails;