import React from 'react';
import { render , fireEvent } from '@testing-library/react';
import Contact from './../Components/Contact/Contact';


test('renders contact section',()=>{

    const { getByText , getByPlaceholderText } = render( <Contact/> );

    const title = getByText(/Contact/i);

    expect(title).toBeInTheDocument();

    const emailInput = getByPlaceholderText(/e.g johndoe@gmail.com/i);
    expect(emailInput).toBeInTheDocument();

    const messageInput  = getByPlaceholderText(/Leave a message/i);
    expect(messageInput).toBeInTheDocument();

    const submitButton = getByText(/send/i);
    expect(submitButton).toBeInTheDocument();

});

test('should enter text into inputs', ()=> {
  
    const { container, getByPlaceholderText , getByText } = render( <Contact/> );
    
    const emailInput = getByPlaceholderText(/e.g johndoe@gmail.com/i);

    fireEvent.change( emailInput ,{
        target:{
            value:'email@gmail.com'
        }
    });

    expect(emailInput.value).toBe('email@gmail.com');
    
    const messageInput =  getByPlaceholderText(/Leave a message/i);

    fireEvent.change( messageInput,{
        target:{
            value:'message'
        }
    });

    expect(messageInput.value).toBe('message');
});

test('should show red border when form submitted with empty inputs', ()=> {
  
    const {  getByPlaceholderText , getByText } = render( <Contact/> );
    
    const emailInput = getByPlaceholderText(/e.g johndoe@gmail.com/i);

    fireEvent.change( emailInput ,{
        target:{
            value:''
        }
    });

    expect(emailInput.value).toBe('');
    
    const messageInput =  getByPlaceholderText(/Leave a message/i);

    fireEvent.change( messageInput,{
        target:{
            value:''
        }
    });

    expect(messageInput.value).toBe('');

    fireEvent.click( getByText(/Send/i) );
    
    expect(emailInput).toHaveClass('InvalidInput');
});