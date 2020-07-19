import React from 'react';
import Styles from'./Layout.module.scss';
import Navigation from './../Navigation/Navigation';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import SVG from './../../Assets/devices.svg';

const layout = () =>{

    const onBtnClikedHandler =  (event,elementId) =>{
        const anchor = document.querySelector("#about");
        anchor.scrollIntoView({ behavior: 'smooth', block:'center' });
    };

    return(

        <React.Fragment>

            <Navigation/>

            <main className={Styles.Global} >

                <section className={Styles.IntroWrapper} >
                    <div className={Styles.Intro}>
                        <div className={Styles.IntroMessage}>

                            <div>
                            <img src={SVG}  style={{ width:"20em", height:"20", padding:"1.2em"}} alt='devices'/>
                            </div>

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

export default layout;