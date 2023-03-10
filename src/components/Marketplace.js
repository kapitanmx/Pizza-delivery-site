import React, {useState} from 'react';

import Hero from './Hero';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Button from './Button';

import {IMG_BASE_URL, POSTER_SIZE} from '../Config';

import { useProductsFetch } from '../hooks/useProductsFetch';

const Marketplace = ({heroTitle, heroSubtitle, heroText}) => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useProductsFetch();

    const [isImg, setIsImg] = useState(false);

    if (error) return <div></div>
    return (
        <>
            <Hero
                title={heroTitle}
                subtitle={heroSubtitle}
                buttonLink=''
                text={heroText}
                background={isImg ? `url(${IMG_BASE_URL}${POSTER_SIZE}${state.results[0].imgs[0]})` : `#000`}
            />
            <SearchBar />
            {/* <Grid header={searchTerm ? 'Wyniki wyszukiwania' : 'Popularne oferty'}>
                {state.results.map(offer => (
                    <Thumb
                        key={offer.id} 
                        clickable
                    />
                ))}
            </Grid> */}
            <Button />
        </>
    )
}

export default Marketplace;
