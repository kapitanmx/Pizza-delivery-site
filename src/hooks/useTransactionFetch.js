import React, {useState, useEffect} from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useTransactionFetch = () => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchTransactions = async () => {
        try {
            setError(false);
            setLoading(true);

            const transactions = API.fetchUserTransactions();

            setState(transactions);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchTransactions();
    }, [])

    return {state, error, loading}
}
