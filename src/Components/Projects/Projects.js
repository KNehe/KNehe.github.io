import React from 'react';
import Styles from './Projects.module.scss';
import Project from './../Project/project';
import { projects as ProjectData} from './../../Data/data';


const projects = () =>{

    const projects = ProjectData.map( project =>

        <Project 
            key = {project.Id}
            Image = {project.Image}
            Title = {project.Title}
            Description={project.Description}
            Technologies={project.Technologies}
            WebLink={project.WebLink}
            GitHubLink = {project.GitHubLink}
            Styles={Styles}/>
    );

    return(
        <div className={Styles.Main} >

           <div className={Styles.Title}>
              <h4 id='projects'>Projects</h4>
            </div>
            
            <div className={Styles.Projects}>

                {projects}             

            </div>

        </div>
    );
};

export default projects;