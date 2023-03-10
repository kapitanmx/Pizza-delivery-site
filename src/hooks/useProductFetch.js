import {useState, useEffect} from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'

export const useProductFetch = productId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(false);

                const offer = await API.fetchOffer(productId);
                setState(offer);

                setLoading(false)
            } catch (error) {
                setError(true);
            }
        };

        const sessionState = isPersistedState(productId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchProduct()
    }, [productId]);

    useEffect(() => {
        sessionStorage.setItem(productId, JSON.stringify(state));
    }, [productId, state]);

    return { state, loading, error };
}
