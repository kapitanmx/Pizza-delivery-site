import React, {useState, useEffect, useRef} from 'react';
// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <input
                    type='text'
                    placeholder='Wyszukaj ofertę'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;