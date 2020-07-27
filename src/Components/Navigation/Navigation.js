import React, { useState } from 'react';
import Styles from'./Navigation.module.scss';
import HumbegerIcon from '../HumbergerIcon/HumbergerIcon';
import { NavLink} from 'react-router-dom';

const Navigation = () =>{

    const [ulDisplay, setUlDisplay]= useState('none');
    const [toggle, setToggle]= useState(true);

    const [ showShadow, setNavShadow] = useState(false);
    
        const onHumbergerClickedHanlder = event =>{
        
        event.preventDefault();
        setToggle(prev => !prev);
        
        setUlDisplay( prevValue => prevValue === 'none' ? '' : 'none');

         if(toggle){
            setNavShadow(true);
        }
        
    };

    const navClickHandler =  (event,elementId) =>{

        const anchor = document.querySelector(elementId);
        anchor.scrollIntoView({ behavior: 'smooth', block:'center' });
    };

    window.onscroll = ()=>{
      if(window.pageYOffset > 50){
          setNavShadow(true);
      }else{
          setNavShadow(false);

      }
    };

    return (
        
        <React.Fragment>

                    {/* Nav bar for  large devices */}
                    <nav className={Styles.LargeDevice} style={{ boxShadow: showShadow? '1px 2px 8px rgba(215, 64, 52, 0.4)': ''}}>

                    <div>

                        <a>Nehemiah Kamolu</a>

                    </div>

                    <ul> 
                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#about')}
                                 to="/about"
                                 exact
                                 >
                                     About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#skills')}
                                 to="/skills"
                                 exact
                                 >
                                     Skills
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#projects')}
                                 to="/projects"
                                 exact
                                 >
                                     Projects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#contact')}
                                 to="/contact"
                                 exact
                                 >
                                     Contact
                            </NavLink>
                        </li>
                    </ul>

                    </nav>

                    {/* Nav bar for small devices with different activeClassName */}
                    <nav className={Styles.SmallDevice} style={{ boxShadow: showShadow? '1px 2px 8px rgba(215, 64, 52, 0.4)': ''}} >

                    <div className={Styles.Title}>

                        <a href="#" >Nehemiah Kamolu</a>
                        <HumbegerIcon click={onHumbergerClickedHanlder} toggle={toggle}/>

                    </div>

                    <ul style={{ display: ulDisplay }}> 
                    <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#about')}
                                 to="/about"
                                 exact
                                 >
                                     About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#skills')}
                                 to="/skills"
                                 exact
                                 >
                                     Skills
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#projects')}
                                 to="/projects"
                                 exact
                                 >
                                     Projects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#contact')}
                                 to="/contact"
                                 exact
                                 >
                                     Contact
                            </NavLink>
                        </li>
                    </ul>

                    </nav>
        </React.Fragment>
    );

};

export default Navigation;