import React from 'react';
import { render } from '@testing-library/react';
import Projects from './../Components/Projects/Projects';

test('render projects section', ()=>{

    const { getAllByAltText , getAllByText } = render( <Projects/> );
  
    // const images = getAllByAltText(/Project/i);
    // for( const image of images){
    //   expect(image).toBeInTheDocument();
    // }
  
    const projectsWithExpressText = getAllByText(/ExpressJS/i);
    for(const project of projectsWithExpressText){
      expect(project).toBeInTheDocument();
    }
  
    const projectsWithSpringBootText = getAllByText(/Spring Boot/i);
    for(const project of projectsWithSpringBootText){
      expect(project).toBeInTheDocument();
    }
  
    const projectsWithFlutterText = getAllByText(/Flutter/i);
    for(const project of projectsWithFlutterText){
      expect(project).toBeInTheDocument();
    }
  
    const projectsWithReactText = getAllByText(/ReactJS/i);
    for(const project of projectsWithReactText){
      expect(project).toBeInTheDocument();
    }
    
  
  
  });