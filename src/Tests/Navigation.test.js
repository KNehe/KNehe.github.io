import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './../Components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';


test('render navigation', ()=>{
    
    const appToRender  = (

        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
    );

    const { getAllByText } = render( appToRender );

    const navTitles = getAllByText(/My Portfolio/i);
    for( const navTitle of navTitles){
        expect(navTitle).toBeInTheDocument();
    }

    const navLinks1 = getAllByText(/Projects/i);
    for( const navLink of navLinks1){
        expect(navLink).toBeInTheDocument();
    }


    const navLinks2 = getAllByText(/About/i);
    for( const navLink of navLinks2){
        expect(navLink).toBeInTheDocument();
    }

    const navLinks3 = getAllByText(/Skills/i);
    for( const navLink of navLinks3){
        expect(navLink).toBeInTheDocument();
    }
    

    const navLinks4 = getAllByText(/Contact/i);
    for( const navLink of navLinks4){
        expect(navLink).toBeInTheDocument();
    }

});