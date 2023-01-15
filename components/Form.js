import { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Heading from "./Heading";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}

            </div>
        </>
    );
};

export default Form;