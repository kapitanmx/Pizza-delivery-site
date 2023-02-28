import React, {useState} from 'react';
import Button from './Button';
import {Wrapper, Content} from './Form.styles';

const Form = ({title, type, fields}) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [inputError, setInputError] = useState(false);

    const fetchFormData = () => {}

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchFormData(data);
        return
    }

    return (
        <Wrapper>
            <Content>
                <h1>{title}</h1>
                <form onSubmit={handleSubmit}>
                    {fields.map(field => (
                        <>
                            <input
                                type={field.type} 
                                name={field.name}
                                placeholder={field.name}
                                regex={field.regex}
                                required minlength={field.min_length}
                                onChange={(e) => handleInput(e.target)}
                                error={inputError}
                            />
                            {inputError && <p style="color: red;">{field.errorMsg}</p>}
                        </>
                    ))}
                    <Button
                        text="Zatwierdź" 
                        type="submit" 
                        callback={handleSubmit}
                    />
                    {error && <p style="color: red;">Błąd</p>}
                </form>
            </Content>
        </Wrapper>
    );
}

export default Form;