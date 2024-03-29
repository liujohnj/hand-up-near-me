import ProviderList from './ProviderList';
import useFetch from './useFetch';

const Browse = () => {
    //const { providers, isPending, error } = useFetch('http://localhost:5000/providers');
    const { providers, isPending, error } = useFetch('/providers');

    return (
        <div className="browse">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {providers && <ProviderList providers={providers} title="All Providers:" />}
        </div>
    );
}
 
export default Browse;