import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Grid from './Grid';
// Hooks
import { useProductFetch } from '../hooks/useProductFetch';

const Product = () => {
    const { productId } = useParams();

    const {state : product, loading, error} = useProductFetch(productId);

    if (loading) return;
    if (error) return <div>Wystąpił błąd</div>

    return (
        <>
            <Grid>
                <h1>1234</h1>
            </Grid>
        </>
    )
}

export default Product;