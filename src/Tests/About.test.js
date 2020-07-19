import React from 'react';
import { render } from '@testing-library/react';
import About from '../Components/About/About';


test('renders about section', () => {

  const { getByText } = render( <About/> );

  const title = getByText(/About/i);
  expect(title).toBeInTheDocument(); 

  const  paragrpah = getByText(/I'm /i);
  expect(paragrpah).toBeInTheDocument();
  
  
});

