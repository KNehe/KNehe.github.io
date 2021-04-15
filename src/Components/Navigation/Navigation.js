import React, { useEffect, useState } from 'react';
import Styles from'./Navigation.module.scss';
import HumbegerIcon from '../HumbergerIcon/HumbergerIcon';
import { NavLink} from 'react-router-dom';
import resizeWindow from './../Hooks/resizeWindow';


const Navigation = () =>{
    
    const [ulDisplay, setUlDisplay]= useState({
        transform: 'translateY(-10px)',
        opacity: '0'
    });

    const [toggle, setToggle]= useState(true);

    const [ showShadow, setNavShadow] = useState(false);

    let introHeight = resizeWindow().height;

    useEffect(()=>{
        setToggle(true)
    },[])
    
    const onHumbergerClickedHanlder = event =>{
        
        event.preventDefault();

        setToggle(prev => !prev);
        
        if(ulDisplay.transform === 'translateY(-10px)'){

            setUlDisplay({
                transform: 'translateY(0px)',
                opacity:'1'
            });

        }else if (ulDisplay.transform === 'translateY(0px)') {

            setUlDisplay({
                transform: 'translateY(-10px)',
                opacity: '0'
            });
        }
        
    };

    const navClickHandler =  (event,elementId) =>{
        event.preventDefault();

        if(elementId === "#about"){
            
            window.scrollTo({
                top: introHeight - 50,
                behavior: 'smooth',
              });

        }else{

            const anchor = document.querySelector(elementId);
            
            anchor.scrollIntoView({ behavior: 'smooth', block:'center' });

              setUlDisplay({
                transform: 'translateY(-10px)',
                opacity: '0'
            });

            setToggle(prev => !prev);
        }
    };

    const navClickHandler2 =  event =>{

        event.preventDefault();
                        
        window.scrollTo({
            top: introHeight - 50,
            behavior: 'smooth',
          }); 

        setUlDisplay({
                transform: 'translateY(-10px)',
                opacity: '0'
        });

        setToggle(prev => !prev);
    }


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

                        <a href="/">Nehemiah Kamolu</a>

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

                        <a href="/" >Nehemiah Kamolu</a>
                        <HumbegerIcon click={onHumbergerClickedHanlder} toggle={toggle}/>

                    </div>

                    </nav>
                    
                    <div className={Styles.smallNavUl}>
                    <ul style={ulDisplay} > 
                    <li>
                            <NavLink 
                                 onClick={ (event) => navClickHandler2(event,'#about')}
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
                    </div>
        </React.Fragment>
    );

};

export default Navigation;