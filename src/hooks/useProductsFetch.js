import { useState, useEffect, useRef } from 'react';
import API from '../API';
import { isPersistedState } from '../heplers'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useProductsFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchOffers = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const offers = await API.fetchOffers(searchTerm, page);

            setState(prev => ({
                ...offers,
                results:
                    page > 1 ? [...prev.results, offers.results] : [...offers.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchOffers(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) return;

        fetchOffers(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}
}