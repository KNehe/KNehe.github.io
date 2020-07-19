import React, { useState } from 'react';
import Styles from'./Navigation.module.scss';
import HumbegerIcon from '../HumbergerIcon/HumbergerIcon';
import { NavLink} from 'react-router-dom';

const Navigation = () =>{

    const [ulDisplay, setUlDisplay]= useState('none');
    const [toggle, setToggle]= useState(true);
    
        const onHumbergerClickedHanlder = event =>{
        
        event.preventDefault();
        setToggle(prev => !prev);
        
        setUlDisplay( prevValue => prevValue === 'none' ? '' : 'none');
        
    };

    const navClickHandler =  (event,elementId) =>{

        const anchor = document.querySelector(elementId);
        anchor.scrollIntoView({ behavior: 'smooth', block:'center' });
    };

    return (
        
        <React.Fragment>

                    {/* Nav bar for  large devices */}
                    <nav className={Styles.LargeDevice}>

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
                    <nav className={Styles.SmallDevice} >

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