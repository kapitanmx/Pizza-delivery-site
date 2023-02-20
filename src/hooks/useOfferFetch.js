import {useState, useEffect} from 'react'
import API from '../../API'

export const useOfferFetch = offerId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                setLoading(true);
                setError(false);

                const offer = await API.fetchOffer(offerId);
                setState({...offer});

                setLoading(false)
            } catch (error) {
                setError(true);
            }
        };
        fetchOffer()
    }, [offerId])

    return { state, loading, error };
}