import validate from './validateInfo';
import useForm from './useForm';
import Heading from "./Heading";
import InputBox from "./InputBox";
import Button from "./UI/Button";

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className="form__content-left">
            <form onSubmit={handleSubmit} className='form' noValidate>
                <Heading text="Get In Touch" theme="dark" align="left" tag="h4" />
                <div className='form__item'>
                    <input
                        className="form__input"
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className='form__item'>
                    <textarea
                        className="form__input"
                        type='message'
                        name='message'
                        placeholder='Enter your message'
                        value={values.message}
                        onChange={handleChange}
                    />
                    {/*{errors.message && <p className="error">{errors.message}</p>}*/}
                </div>
                {/*<button className='' type='submit'>*/}
                {/*    Send me*/}
                {/*</button>*/}
                <Button classNames="button--submit" text="Submit Now" type="white" typeSubmit />

                {/*<span className='form-input-login'>*/}
                {/*  Already have an account? Login <a href='#'>here</a>*/}
                {/*</span>*/}
            </form>
        </div>
    );
};

export default FormSignup;