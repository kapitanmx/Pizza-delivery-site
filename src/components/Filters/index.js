import React, {useState} from 'react';
import {Wrapper, Content} from './Filters.styles';

const Filters = () => {
    const [data, setData] = useState({});
    const dataHandler = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <Wrapper>
            <Content>
                <datalist id="pizza-type">

                </datalist>
                <datalist id="price-range">

                </datalist>
                <input 
                    type="checkbox" 
                />
                <input 
                    type="checkbox" 
                />
                <input 
                    type="checkbox" 
                />
                <input 
                    type="checkbox" 
                />
            </Content>
        </Wrapper>
    );
}

export default Filters;