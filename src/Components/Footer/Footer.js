import React from 'react';
import Styles from './Footer.module.scss';

const footer = ()=>{
    
    const currentYear = new Date().getFullYear();
    return(
        <footer className={Styles.Footer}>
            <h4> &copy; {currentYear} - Nehemiah Kamolu</h4>
        </footer>
    );
};

export default footer;