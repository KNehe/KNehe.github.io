import React from 'react';
import Styles from'./Layout.module.scss';
import Navigation from './../Navigation/Navigation';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import SVG from './../../Assets/devices.svg';
import resizeWindow from './../Hooks/resizeWindow';
import Radium from 'radium';


const Layout = () =>{

    let introHeight = resizeWindow().height;

    const imgStyles ={
        width:"20em",
        height:"20em",
        padding:"1.2em",
        '@media screen and (max-width:768px)':{
            width:"10em",
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

                            <img src={SVG}  style={imgStyles} alt='devices'/>

                            <div className={Styles.IntroText} style={{margin:"0"}}>
                             <p >Hi, I'm Nehemiah.</p>
                             <p>A software Developer</p>
                            </div>                           
                        </div>
                        <button className={Styles.IntroBtn} onClick={onBtnClikedHandler}>About</button>  
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