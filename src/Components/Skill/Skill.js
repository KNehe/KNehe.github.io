import React from 'react';

const skill = props =>{

    return (

          <article className={props.Styles.Language}>
                
          <div className={props.Styles.Logo}>

               <img src={props.Image} alt="Skill"/>

          </div>
          
          <div className={props.Styles.Content}>
            <h4>{props.Title}</h4>
            <p>{props.Description}</p>
          </div>
          
      </article>

    );
};

export default skill;