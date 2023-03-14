import React, { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useOrdersFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchOrders = async (userId, orderId, page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const orders = await API.fetchUserOrders(userId, orderId, page, searchTerm);

            setState(prev => ({
                ...orders,
                results:
                    page > 1 ? [...prev.results, ...orders.results] : [...orders]
            }));
            return;
        } catch (error) {
            setError(true);
            return;
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('orderState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchOrders(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) return;

        fetchOrders(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('orderState', JSON.stringify(state));
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}



