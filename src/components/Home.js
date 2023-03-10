import React, {useState} from 'react';
// Components
import Hero from './Hero';
import Section from './Section';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Button from './Button';
// Hooks
import { useProductsFetch } from '../hooks/useProductsFetch';
// Imgs
import {IMG_BASE_URL, POSTER_SIZE} from '../Config';

const Home = ({heroTitle, heroSubtitle, heroText, description}) => {
    const { 
        state,
        loading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore
    } = useProductsFetch();

    const products = [
        {
            "_id" : "1",
            "title" : "Capriciosa",
            "desc" : "Capriciosa",
            "img" : [],
        },
        {
            "_id" : "2",
            "title" : "Capriciosa",
            "desc" : "Capriciosa",
            "imgs" : [],
        },
        {
            "_id" : "3",
            "title" : "Capriciosa",
            "desc" : "Capriciosa",
            "imgs" : [],
        },
        {
            "_id" : "4",
            "title" : "Capriciosa",
            "desc" : "Capriciosa",
            "imgs" : [],
        },
        {
            "_id" : "5",
            "title" : "Capriciosa",
            "desc" : "Capriciosa",
            "imgs" : [],
        }
    ]

    const [isImg, _setIsImg] = useState(false);

    if (loading) return;

    return (
        <>
            <Hero
                title={heroTitle}
                subtitle={heroSubtitle}
                text={heroText}
                background={isImg ? `url(${IMG_BASE_URL}${POSTER_SIZE}${state.results[0].imgs[0]})` : `#000`}
                button={
                    <Button 
                        text='Zamów pizzę' 
                        callback={null} 
                        type="link"
                        link="" 
                    />
                }
            />
            <SearchBar setSearchTerm={searchTerm}/>
            <Grid title='Popularne'>
                {/* {state.results.map(product => (
                    <Thumb
                        key={product._id}
                        title={product.name}
                        desc={product.desc}
                        price={product.price}
                        img={product.imgs[0]}
                        clickable
                    />
                ))} */}
                {products.map(product => (
                    <Thumb
                        key={product._id}
                        productId={product._id}
                        title={product.title}
                        desc={product.desc}
                        clickable
                    />
                ))}
            </Grid>
        </>
    )
}

export default Home;