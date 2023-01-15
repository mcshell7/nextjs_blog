import Heading from "./Heading";
import {useState} from "react";
import styles from "../styles/components/form.module.scss";

const Form__old = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);

    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [messageError, setMessageError] = useState('Message cannot be empty');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'message':
                setMessageDirty(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Email is not correct');
        } else {
            setEmailError('');
        }
    }
    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (e.target.value.length < 40) {
            setMessageError('The message must be at least 40 characters')
            if(!e.target.value){
                setMessageError('Message cannot be empty')
            }
        }else {
            setMessageError('');
        }
    }
    return (
        <form className="form">
            <Heading text="Contacts Form" />
            <label className="form__item">
                {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                <input
                    name="email"
                    value={email}
                    onChange={e => emailHandler(e)}
                    onBlur={e => blurHandler(e)}
                    type="email"
                    className={styles.input}
                />
            </label>
            <label className="form__item">
                {(messageDirty && messageError) && <div style={{color: "red"}}>{messageError}</div>}
                <textarea
                    value={message}
                    onChange={e => messageHandler(e)}
                    onBlur={e => blurHandler(e)}
                    name="message"
                ></textarea>
            </label>
        </form>
    );
};

export default Form__old;