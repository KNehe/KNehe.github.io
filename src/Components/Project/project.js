import React from 'react';

const project = props =>{

    return(
        <article className={props.Styles.Project}>

        <div className={props.Styles.ProjectImg}>
            <img src={props.Image} alt="Project"/>
        </div>

        <div className={props.Styles.Description}>
            <h4>{props.Description}</h4>
        </div>

        <div className={props.Styles.ButttonSec}>
            <a href={props.GitHubLink} target="blank">View on GitHub</a>
        </div>

    </article>
    );
};

export default project;