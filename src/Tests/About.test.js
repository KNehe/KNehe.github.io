import React from 'react';
import { render } from '@testing-library/react';
import About from '../Components/About/About';
import {StyleRoot}from 'radium';



test('renders about section', () => {

  const { getByText } = render( <StyleRoot><About/></StyleRoot> );

  const title = getByText(/About/i);
  expect(title).toBeInTheDocument(); 

  const  paragrpah = getByText(/I'm /i);
  expect(paragrpah).toBeInTheDocument();
  
  
});

