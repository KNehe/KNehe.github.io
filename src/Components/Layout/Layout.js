import React from 'react';
import Styles from'./Layout.module.scss';
import Navigation from './../Navigation/Navigation';


const Layout = props =>{


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

                <section className={Styles.AboutSection}>
                    <h4>About</h4>
                </section>

                <section className={Styles.SkillsSection}>
                <h4>Skills</h4>
                </section>

                <section className={Styles.ProjectsSection} id="projects">
                <h4>Projects</h4>
                </section>

                <section className={Styles.ContactSection} id="contact">
                <h4>Contact</h4>
                </section>

            </main>
           

        

        </React.Fragment>
     
        
    );
};

export default Layout;