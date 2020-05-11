import React, { useState } from 'react';
import Styles from'./Navigation.module.scss';
import HumbegerIcon from '../HumbergerIcon/HumbergerIcon';

const Navigation = props =>{

    const [ulDisplay, setUlDisplay]= useState('none');

    const onHumbergerClickedHanlder = event =>{
        
        event.preventDefault();
        
        setUlDisplay( prevValue => prevValue === 'none' ? '' : 'none');
        

    };

    return (
        
        <React.Fragment>

                    {/* Nav bar for  large devices */}
                    <nav className={Styles.LargeDevice}>

                    <div>
                        <a href="#" >My Portfolio</a>
                    </div>

                    <ul> 
                        <li><a href="#projects">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#contact">Hire me</a></li>
                    </ul>

                    </nav>

                    {/* Nav bar for small devices */}
                    <nav className={Styles.SmallDevice}>

                    <div className={Styles.Title}>

                        <a href="#" >My Portfolio</a>
                        <HumbegerIcon click={onHumbergerClickedHanlder}/>

                    </div>

                    <ul style={{ display: ulDisplay }}> 
                        <li><a href="#projects">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#contact">Hire me</a></li>
                    </ul>

                    </nav>
        </React.Fragment>
    );

};

export default Navigation;