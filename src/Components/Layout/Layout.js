import React from 'react';
import Styles from'./Layout.module.scss';
import Navigation from './../Navigation/Navigation';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import resizeWindow from './../Hooks/resizeWindow';
import Radium from 'radium';
import ProgrammingSVG from '../../Assets/programming.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Layout = () =>{

    let introHeight = resizeWindow().height;

    const imgStyles ={
        width:"25em",
        height:"25em",
        paddingLeft:"1em",
        opacity:'.6',
        '@media screen and (max-width:768px)':{
            paddingBottom:'1em',
            height:"10em"
        }
    }
    
    const onBtnClikedHandler =  event =>{

            event.preventDefault();
                        
            window.scrollTo({
                top: introHeight - 50,
                behavior: 'smooth',
              });        
        
    };    
    

    return(

        <React.Fragment>

            <Navigation/>

            <main className={Styles.Global} >

                <section className={Styles.IntroWrapper} style={ {height: introHeight}}>
                    <div className={Styles.Intro}>
                        <div className={Styles.IntroMessage}>

                            <div className={Styles.IntroText} style={{margin:"0"}}>
                                <p >Hi, I'm Nehemiah.</p>
                                <p>A software Developer</p>
                                </div> 

                            <img src={ProgrammingSVG}  style={imgStyles} alt='devices'/>
                          
                        </div>
                        <div className={Styles.IntroBtn} onClick={onBtnClikedHandler}>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>  
                    </div>                  
                </section>

                <About/>

                <Skills/>

                <Projects/>

                <Contact/>

                <Footer/>

            </main>

        </React.Fragment>
     
        
    );
};

export default Radium(Layout);