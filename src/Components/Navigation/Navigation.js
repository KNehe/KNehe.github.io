import React, { useState } from 'react';
import Styles from'./Navigation.module.scss';
import HumbegerIcon from '../HumbergerIcon/HumbergerIcon';
import { NavLink} from 'react-router-dom';

const Navigation = () =>{

    const [ulDisplay, setUlDisplay]= useState('none');

    const onHumbergerClickedHanlder = event =>{
        
        event.preventDefault();
        
        setUlDisplay( prevValue => prevValue === 'none' ? '' : 'none');
        

    };

    const navClickHandler =  (event,elementId) =>{

        const anchor = document.querySelector(elementId);
        anchor.scrollIntoView({ behavior: 'smooth', block:'center' });
    }


    return (
        
        <React.Fragment>

                    {/* Nav bar for  large devices */}
                    <nav className={Styles.LargeDevice}>

                    <div>
                        <a  >My Portfolio</a>
                    </div>

                    <ul> 
                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#about')}
                                 to="/about"
                                 exact
                                 activeClassName={Styles.ActiveLink}>
                                     About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#skills')}
                                 to="/skills"
                                 exact
                                 activeClassName={Styles.ActiveLink}>
                                     Skills
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#projects')}
                                 to="/projects"
                                 exact
                                 activeClassName={Styles.ActiveLink}>
                                     Projects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#contact')}
                                 to="/contact"
                                 exact
                                 activeClassName={Styles.ActiveLink}>
                                     Contact
                            </NavLink>
                        </li>
                    </ul>

                    </nav>

                    {/* Nav bar for small devices with different activeClassName */}
                    <nav className={Styles.SmallDevice}>

                    <div className={Styles.Title}>

                        <a href="#" >My Portfolio</a>
                        <HumbegerIcon click={onHumbergerClickedHanlder}/>

                    </div>

                    <ul style={{ display: ulDisplay }}> 
                    <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#about')}
                                 to="/about"
                                 exact
                                 activeClassName={Styles.ActiveLinkSmall}>
                                     About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#skills')}
                                 to="/skills"
                                 exact
                                 activeClassName={Styles.ActiveLinkSmall}>
                                     Skills
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#projects')}
                                 to="/projects"
                                 exact
                                 activeClassName={Styles.ActiveLinkSmall}>
                                     Projects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler(event,'#contact')}
                                 to="/contact"
                                 exact
                                 activeClassName={Styles.ActiveLinkSmall}>
                                     Contact
                            </NavLink>
                        </li>
                    </ul>

                    </nav>
        </React.Fragment>
    );

};

export default Navigation;