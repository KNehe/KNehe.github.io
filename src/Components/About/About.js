import React from 'react';
import Styles from './About.module.scss';

const about = () =>{

    return(

        <section className={Styles.AboutSection} id='about'>

                    <div className={Styles.AboutDescription}>
                        <h4>About</h4>
                        <div className={Styles.Text}>
                        <p> I'm a self motivated person who is always learning, growing, improving my skills and making sure
                            that i learn any new technology that will make me improve my services.
                            I chose software development career because with the skills acquired its possible to solve problems and make
                            the world a better place.
                        I love bringing to life your ideas, goals, and dreams, nothing makes me happier.
                        Over the years, developing software has continued to be  one of my top passsions. I've 
                            been doing it for more than 3years. I have created APIs, web and mobile apps.
                            
                        </p>
                        </div>                   
                    </div>                 

        </section>

    );
};

export default about;