import React from 'react';
import { render} from '@testing-library/react';
import Layout from './../Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import {StyleRoot}from 'radium';


test('renders intro', ()=>{

    const appToRender = (
        <BrowserRouter>
        <StyleRoot>
            <Layout/>
        </StyleRoot> 
         </BrowserRouter>
    );

    const { getByText } = render( appToRender  );

    const firstParagraph = getByText(/Hi, I'm Nehemiah/i);
    expect(firstParagraph).toBeInTheDocument();

    const secondParagraph = getByText(/A software Developer/i);
    expect(secondParagraph).toBeInTheDocument();


});
