import React from 'react';
const project = props =>{

    return(
        <article className={props.Styles.Project}>

            <section className={props.Styles.Top_Section}>
                <img src={props.Image} alt=''/>
            </section>

            <section className={props.Styles.Bottom_Section}>
                <div className={props.Styles.Content}>
                    <div>
                        <h4>{props.Title}</h4>
                        <p>{props.Description}</p>
                    </div>

                    <ul>
                        {props.Technologies.map( tech =>
                        <li>{tech}</li>
                        )}
                    </ul>

                    <div className={props.Styles.Links}>
                        {props.WebLink?
                            <a href={props.WebLink} target="_blank" rel="noopener noreferrer">
                                View site
                            </a>:
                            ''
                        }

                        {props.GitHubLink?                       
                            <a href={props.GitHubLink} target="_blank" rel="noopener noreferrer" >
                            View code
                            </a>:
                            ''
                        }
                        

                    </div>
                </div>

                    {/* <div className={props.Styles.Links}>
                    <div className={props.Styles.GitHub}>
                    <a href={props.GitHubLink} target="_blank" rel="noopener noreferrer" data-tip data-for='gitLogo'>
                        <img src={GitHubLogo} loading='lazy' alt="GitHubLogo"/>
                    </a>
                   
                    </div>
                </div> */}

            </section>

    </article>
    );
};

export default project;