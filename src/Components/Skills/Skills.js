import React from 'react';
import Styles from './Skills.module.scss';
import { skills as SkillData } from './../../Data/data';
import Skill from './../Skill/Skill';


const skills  = () =>{
    
    const skillList = SkillData.map( skill =>

         <Skill

          key = {skill.Id}
          Styles = {Styles}
          Title = { skill.Title}
          Description = { skill.Description }
          Image = { skill.Image}        
         
         />
        
        );

    return (
        <section className={Styles.Main} >

            <div className={Styles.Title}>
              <h4 id='skills'>Skills</h4>
            </div>
            
            <section className={Styles.Articles}>

                {skillList}

            </section>
            

        </section>
    );

};

export default skills;