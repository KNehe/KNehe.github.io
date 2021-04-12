import React from 'react';
import { render } from '@testing-library/react';
import Skills from './../Components/Skills/Skills';

test(' renders skills section', ()=>{
  
    const { getByText , getAllByAltText , getAllByText } = render( <Skills/> );
  
    const  title = getByText(/Skills/i);
    expect(title).toBeInTheDocument();
  
    const  alts = getAllByAltText(/Skill/i);
  
    for( const alt of alts){
      expect(alt).toBeInTheDocument();
    }
  
    const  javaSkill = getByText('Java'); 
    expect(javaSkill).toBeInTheDocument();
    
    const  javaSkillDesc = getByText(/Spring Boot/i);
    expect(javaSkillDesc).toBeInTheDocument();
  
    const  jsTexts = getAllByText(/JS/i);
    for(const js of jsTexts){
      expect(js).toBeInTheDocument();
    }
  
    const jsDesc = getByText(/ExpressJs, ReactJs, Nextjs, Unit Testing/i);
    
    expect(jsDesc).toBeInTheDocument();
  
    const dartText = getByText(/Dart/i);
    expect(dartText).toBeInTheDocument();
  
    const dartDesc = getByText(/Flutter/i);
    expect(dartDesc).toBeInTheDocument();
  
    const tsText = getByText(/Typescript/i);
    expect(tsText).toBeInTheDocument();
  
    const tsDesc = getByText(/In Express/i);
    expect(tsDesc).toBeInTheDocument();
  
    const webText = getByText(/Web/i);
    expect(webText).toBeInTheDocument();
  
    const webDesc = getByText(/HTML5 \/CSS3 \/SASS/i);
    expect(webDesc).toBeInTheDocument();
  
    const pythonText = getByText(/Python/i);
    expect(pythonText).toBeInTheDocument();
  
    const pythonDesc = getByText(/Basics/i);
    expect(pythonDesc).toBeInTheDocument();
    
    
  
  });