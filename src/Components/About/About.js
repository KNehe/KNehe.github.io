import React from 'react';
import Styles from './About.module.scss';
import GitHubImg from '../../Assets/coding.svg'

const about = () =>{

    return(

        <section className={Styles.AboutSection} id='about'>

                    <div className={Styles.AboutDescription}>
                        <h4>About</h4>
                        <div className={Styles.DescGroup}>
                            <img src={GitHubImg} alt='' />
                            <p  className={Styles.Text}> I'm a self motivated person who is always learning, growing, improving my skills and making sure
                                that i learn any new technology that will make me improve my services.
                                I chose software development because with the skills acquired its possible to solve problems and make
                                the world a better place.
                            I love bringing to life your ideas, goals, and dreams, nothing makes me happier.                                
                            </p>
                        </div>                   
                    </div>                 

        </section>

    );
};

export default about;