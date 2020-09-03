import React from 'react';
import GitHubLogo from './../../Assets/github.svg';
import ReactToolTip from 'react-tooltip';

const project = props =>{

    return(
        <article className={props.Styles.Project}>

        <div className={props.Styles.Description}>
            <h4>{props.Description}</h4>
        </div>

        <div className={props.Styles.Links}>
            <div className={props.Styles.GitHub}>
            <a href={props.GitHubLink} target="_blank" rel="noopener noreferrer" data-tip data-for='gitLogo'>
                <img src={GitHubLogo} loading='lazy' alt="GitHubLogo"/>
            </a>
            <ReactToolTip id='gitLogo' backgroundColor='#D74034' effect='float'>
                <span>View on GitHub</span>
            </ReactToolTip>
            </div>
        </div>
    </article>
    );
};

export default project;