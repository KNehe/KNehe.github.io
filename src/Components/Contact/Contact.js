import React, { useState } from 'react';
import Styles from './Contact.module.scss';
import TwitterLogo from './../../Assets/twitter.svg';
import FacebookLogo from './../../Assets/facebook.svg';
import LinkedInLogo from './../../Assets/linkedin-logo.svg';
import InstagramLogo from './../../Assets/instagram.svg';
import ReactToolTip from 'react-tooltip';
import axios from './../Axios/axios';


const Contact = () =>{

    const [ inputVal , setInputVal ] = useState( { email:'', message: '' });
   
    const [ error ,setError ] = useState( { email : false, message: false });

    const [ buttonTxt , setBtnText ] = useState('Send Message');

    const [ messageTxt , setMgText ] = useState('');

    const [formRef,setFormRef] = useState({});
    
    const [ messageTxtStyles , setMessageTxtStyle] = useState('');
   

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

        setBtnText('Sending ...');
        
        const data = {
            "from": inputVal.email,
            "subject": "Email from portfolio",
            "message": inputVal.message
           };

        axios.post("/contactus/sendmail", data)
        .then(res=>{
        
        setBtnText('Send Message');
        setMessageTxtStyle(Styles.MessageSuccess);
        setMgText('Email Sent');
 
        formRef.reset();

         return setTimeout(()=>{
            setMgText(''); 
        },5000);

        })
        .catch(err =>{
               
            setBtnText('Send Message');

            setMessageTxtStyle(Styles.MessageError);

            setMgText('An error occured please try again'); 

               formRef.reset();

               return setTimeout(()=>{
                      setMgText(''); 
              },5000);
        });
        
    };

    return (

            <section className={Styles.Main} id='contact'>

                     <h4>Contact</h4>

                <div className={Styles.InnerDiv}>

                <form onSubmit={onFormSubmittedHandler} ref={ (el) => setFormRef(el) }>
                    
                    <label htmlFor='email'></label>
                    <input 
                      type='email' 
                      placeholder='Your Email'
                      id='email'
                      name='email'
                      required
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
                        required
                        ></textarea>

                    <button type='Submit'>{buttonTxt}</button>

                    {
                        messageTxt ?
                    <small className={messageTxtStyles}>{messageTxt}</small>:
                        ''
                    }


                </form>
                
                <div className={Styles.SocialLinks}>

                    <a data-tip data-for='twitter' href="https://twitter.com/kamolu_Nehe" target="_blank" rel="noopener noreferrer"><img src={TwitterLogo} style={{ width:"2em", height:"2em"}} alt="Twitter"/></a>
                    <a data-tip data-for='facebook'href="https://www.facebook.com/ne.he.547/" target="blank" rel="noopener noreferrer"><img src={FacebookLogo} style={{ width:"2em", height:"2em"}} alt="Facebook"/></a>
                    <a data-tip data-for='instagram' href="https://www.instagram.com/kamolu_nehe/" target="blank" rel="noopener noreferrer"><img src={InstagramLogo} style={{ width:"2em", height:"2em"}} alt="Instagram"/></a>
                    <a data-tip data-for='linkedin' href="https://www.linkedin.com/in/kamolu-nehemiah-266a86142/" target="blank" rel="noopener noreferrer"><img src={LinkedInLogo} style={{ width:"2em", height:"2em"}} alt="LinkedIn"/></a>
                </div>
                </div>

                <ReactToolTip id='twitter' backgroundColor='#D74034' effect='float'>
                         <span>Twitter</span>
                </ReactToolTip>

                <ReactToolTip id='facebook' backgroundColor='#D74034' effect='float'>
                         <span>Facebook</span>
                </ReactToolTip>

                <ReactToolTip id='instagram' backgroundColor='#D74034' effect='float'>
                         <span>Instagram</span>
                </ReactToolTip>

                <ReactToolTip id='linkedin' backgroundColor='#D74034' effect='float'>
                         <span>LinkedIn</span>
                </ReactToolTip>
                
            </section>
    );
};

export default Contact;