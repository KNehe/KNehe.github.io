import React, { useState } from 'react';
import Styles from './Contact.module.scss';

const Contact = () =>{

    const [ inputVal , setInputVal ] = useState( { email:'', message: '' });
   
    const [ error ,setError ] = useState( { email : false, message: false });
   

    const onInputChangedHandler = (event, inputName) =>{

        event.preventDefault();

        const inputValue = event.target.value;

        if( inputName === "email" ){

            setInputVal({ ...inputVal , email: inputValue });
        }

        if( inputName === "message" ){

            setInputVal({ ...inputVal , message : inputValue });
        }

    };

    const onFormSubmittedHandler = event =>{

        event.preventDefault();

        if(inputVal.email.trim() === '' && inputVal.message.trim() === '')
        {
            setError({ email: true, message: true });
            return;
        }

        if(inputVal.email.trim() === '')
        {
            setError({ email: true});
            return;
        }

        if( inputVal.message.trim() === '')
        {
            setError({ message: true });
            return;
        }

        setError({message:'', email:''});
        
    };

    return (

            <section className={Styles.Main} id='contact'>

                <h4>Contact</h4>

                <form onSubmit={onFormSubmittedHandler}>
                    
                    <label htmlFor='email'></label>
                    <input 
                      type='email' 
                      placeholder='Your Email'
                      id='email'
                      name='email'
                      className={ error.email ? Styles.InvalidInput : ''}
                      onChange={ (event)=>onInputChangedHandler(event,"email") }
                      />
                    
                    <label htmlFor='msg'></label>
                    <textarea 
                        cols="5" 
                        rows="5" 
                        id='msg'
                        name='msg'
                        placeholder="Leave a message" 
                        className={ error.message ? Styles.InvalidInput : ''}
                        onChange={ (event)=>onInputChangedHandler(event, "message") }
                        ></textarea>

                    <button type='Submit'>Send</button>

                </form>

            </section>
    );
};

export default Contact;