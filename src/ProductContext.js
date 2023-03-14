import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <ProductContext.Provider value={[state, setState]}>{children}</ProductContext.Provider>
    );
};

export default ProductProvider;