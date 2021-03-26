//Custom hook file so it can be used as a component
import { useState, useEffect } from 'react';



const useFetch = (url) => {      //Custom hooks must begin with the word 'use'
    const [providers, setProviders] = useState(null); //consider renaming providers to data
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for resource')
                }
                return res.json();
            })
            .then(data => {
                setProviders(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });

            return () => abortCont.abort();
    }, [url]);

    return { providers, isPending, error }
}

export default useFetch;