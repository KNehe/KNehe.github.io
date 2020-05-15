import React from 'react';
import { render } from '@testing-library/react';
import About from '../Components/About/About';


test('renders about section', () => {

  const { getByText , getByAltText } = render( <About/> );

  const title = getByText(/About/i);
  expect(title).toBeInTheDocument(); 

  const alt = getByAltText(/Nehemiah/i);
  expect(alt).toBeInTheDocument();

  const  paragrpah1 = getByText(/My name/i);
  expect(paragrpah1).toBeInTheDocument();
  
  const  paragrpah2 = getByText(/I create websites/i);
  expect(paragrpah2).toBeInTheDocument();

  const  paragrpah3 = getByText(/I love/i);
  expect(paragrpah3).toBeInTheDocument();
  
});

