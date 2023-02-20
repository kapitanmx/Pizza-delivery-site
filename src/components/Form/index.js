import React, {useState, useEffect} from 'react';
import Button from './Button';
import {Wrapper, Content} from './Form.styles';

const Form = ({title, type, fields}) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [inputError, setInputError] = useState(false);

    const fetchFormData = () => {}

    const handleInput = target => {
        target.preventDefault();
        if (target.value !== target.regex) {
            setInputError(true)
            return
        }
        setInputError(false)
        setData(values => ({ ...values, [target.name] : target.value }))
        return
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