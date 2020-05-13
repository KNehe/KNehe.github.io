import React from 'react';
import Styles from'./Layout.module.scss';
import Navigation from './../Navigation/Navigation';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';


const layout = () =>{


    return(

        <React.Fragment>

            <Navigation/>

            <main>

                <section className={Styles.IntroWrapper}>
                    <div className={Styles.Intro}>
                      <p style={{ marginTop:'1rem'}}>Hi, I'm Nehemiah.</p>
                      <p>A software Developer</p>
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