import { Link } from "react-router-dom";
import CalcDistance from "./CalcDistance";
import ReturnServices from "./ReturnServices";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProviderList = ({ providers, title, distanceFlag }) => {    // destructured vs props
    
    return (
        <div className = "provider-list">
            <h2>{ title }</h2>
            {(providers.length === 0) && <Alert variant={'danger'}>No matches found!  Please expand your search criteria.</Alert>}
            {providers && providers.map((provider) => (   //checks to avoid null errors
                <div className="provider-preview" key={provider && provider._id}>
                    <Link to={ `/providers/${provider && provider._id}` }>
                        <h2> { provider && provider.name }</h2>
                        <p>{ provider && provider.address1 }</p>
                        <p>{ provider && provider.address2 }</p>
                        <p>{ provider && (provider.city + ", " + provider.state + " " + provider.zipCode) }</p>
                        <p>{ provider && ("Tel: " + provider.phone) }</p>
                        <br />
                        <p>{ provider && distanceFlag && ("Distance: " + provider.distanceCrow + " miles")}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
//<CalcDistance provider={provider} /> miles
export default ProviderList;