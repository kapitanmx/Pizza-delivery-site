import {useState, useEffect} from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'

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
                setState(offer);

                setLoading(false)
            } catch (error) {
                setError(true);
            }
        };

        const sessionState = isPersistedState(offerId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchOffer()
    }, [offerId]);

    useEffect(() => {
        sessionStorage.setItem(offerId, JSON.stringify(state));
    }, [offerId, state]);

    return { state, loading, error };
}
