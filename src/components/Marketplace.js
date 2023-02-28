import React from 'react';

import Hero from './Hero';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Button from './Button';

import { useProductsFetch } from '../hooks/useProductsFetch';

const Marketplace = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch();

    if (error) return <div></div>
    return (
        <>
            <Hero />
            <SearchBar />
            <Grid header={searchTerm ? 'Wyniki wyszukiwania' : 'Popularne oferty'}>
                {state.results.map(offer => (
                    <Thumb
                        key={offer.id} 
                        clickable
                    />
                ))}
            </Grid>
            <Button />
        </>
    )
}

export default Marketplace;
