import { useState, useEffect, useRef } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
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
    }
}