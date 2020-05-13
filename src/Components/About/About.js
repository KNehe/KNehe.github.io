import React from 'react';
import Styles from './About.module.scss';
import Picture from './../../Assets/pic.jpg';


const about = () =>{

    return(

        <section className={Styles.AboutSection} id='about'>

                    <div className={Styles.AboutPic}>
                        <img src={Picture} alt="Nehemiah" />
                    </div>

                    <div className={Styles.AboutDescription}>
                        <h4>About</h4>
                        <p>My name is Nehemiah Kamolu.</p>
                         <p>I create websites, web and mobile applications , and APIs.</p> 
                        <p>I love bringing to life your ideas, goals, and dreams, nothing makes me happier.</p>                    
                    </div>                 

        </section>

    );
};

export default about;