import classes from './contact.module.css';
import { useState, useReducer } from 'react';

const Contact = () => {
    const [isSuccess, setSuccess] = useState();
    const [showErrorMsg, setErrorMsg] = useState();
    const initialState = {
        name: '',
        email: '',
        msg: '',
        nameValid: true,
        emailValid: true,
        msgValid: true
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(String(email).toLowerCase());
        return isValid;
    }

    const updateFormState = (state, action) => {
        switch (action.type) {
            case 'name':
                if (action.payload.length > 2) {
                    return {
                        ...state,
                        name: action.payload,
                        nameValid: true
                    }

                } else {
                    return {
                        ...state,
                        name: action.payload,
                        nameValid: false
                    }
                }
            case 'email':
                if (validateEmail(action.payload)) {
                    return {
                        ...state,
                        email: action.payload,
                        emailValid: true
                    }

                } else {
                    return {
                        ...state,
                        email: action.payload,
                        emailValid: false
                    }
                }
            case 'msg':
                if (action.payload.length > 1) {
                    return {
                        ...state,
                        msg: action.payload,
                        msgValid: true
                    }

                } else {
                    return {
                        ...state,
                        msg: action.payload,
                        msgValid: false
                    }
                }
            default:
                return initialState;
        }
    }
    const [formState, setFormState] = useReducer(updateFormState, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.name.length > 2 && validateEmail(formState.email) && formState.msg.length > 1) {
            setFormState({ type: 'reset' });
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false)
            }, 1000)
        }
        else {
            setErrorMsg(true)
        }
    }

    const handleEmailClick=(e)=>{
        e.preventDefault();
        window.location.href = 'mailto:singhsomnath1998@gmail.com?subject=Want to say hi!';
    }
    return (
        <section className={classes.contactSection}>
            <div className={classes.infodiv}>
                <div data-aos="fade-down" data-aos-duration="1500" className={classes.contactDiv}>
                    <h4>CONNECT</h4>
                    <h1>Get in touch, let’s work together.</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className={classes.addressDiv}>
                    <h4>ADDRESS</h4>
                    <h1>Ghaziabad, India</h1>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"
                className={classes.inputsDiv}>
                {/* <div className={classes.inputDiv}>
                    <label>Name</label>
                    <input value={formState.name} type="text" style={{borderColor:`${formState.nameValid ? `` : `red`}`}}
                     onChange={(e) => {
                        setFormState({ type: 'name', payload: e.target.value })
                    }}></input>
                </div>
                <div className={classes.inputDiv}>
                    <label>Email</label>
                    <input value={formState.email} type="email" style={{borderColor:`${formState.emailValid ? `` : `red`}`}}
                     onChange={(e) => {
                        setFormState({ type: 'email', payload: e.target.value })
                    }}></input>
                </div>
                <div className={classes.inputDiv}>
                    <label>Message</label>
                    <input value={formState.msg} type="textarea" style={{borderColor:`${formState.msgValid ? `` : `red`}`}}
                    onChange={(e) => {
                        setFormState({ type: 'msg', payload: e.target.value })
                    }}></input>
                </div>

                <button type="button" className={classes.button} onClick={handleSubmit}>Send Message</button>

                {isSuccess && <div className={classes.successMsg}>
                    <h4>Hi, i got your message. I would be very happy to connect with you.</h4>
                </div>} */}
                <div className={classes.linkedIn}>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/somnath1998/">
                        <h1>linkedIn</h1>
                    </a>
                </div>
                <div className={classes.instagram}>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/_ssomnath/">
                        <h1>instagram</h1>
                    </a>
                </div>
                <div className={classes.email} onClick={handleEmailClick}>
                    <h1>email</h1>
                </div>
            </div>
        </section>
    )
}

export default Contact;