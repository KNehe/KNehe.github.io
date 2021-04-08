import Tuulye from './../Assets/tuulye.PNG';
import ShareNews from './../Assets/sharenews.PNG';
import Spring from './../Assets/spring.png';
import NodeJs from './../Assets/nodejs-logo.png';
import ExpenseManager from './../Assets/ExpenseManager.png';
import Java from './../Assets/java.png';
import JS from './../Assets/js.png';
import HTML from './../Assets/html.png';
import Dart from './../Assets/dart.png';
import Python from './../Assets/python.png';
import Typescript from './../Assets/ts.png';
import MongoDB from './../Assets/mongodb.png';
import MySQL from './../Assets/mysql.svg';
import CloudFirestore from './../Assets/cloudfirestore.png';
import GitHubImg from '../Assets/github_logo.png'



const projects = [
    {  
        Id:1,
        Image: Spring,
        Description: 'House Rent - SpringBoot Microservices',
        GitHubLink: 'https://github.com/KNehe/House-Rent-MicroServices',
        WebLink: ''
    },
    {  
        Id:2,
        Image: Spring,
        Description: 'ChatApp API - Spring Boot',
        GitHubLink: 'https://github.com/KNehe/Chat-app-api',
        WebLink: ''
    },
    {  
        Id:3,
        Image: Spring,
        Description: 'Pharmacy System - Spring Boot API ',
        GitHubLink: 'https://github.com/KNehe/OnlineMedicineShop-Backend',
        WebLink: ''
    },
    {  
        Id:4,
        Image: JS,
        Description: 'MovieAPI - Express GraphQL',
        GitHubLink: 'https://github.com/KNehe/MovieAPI',
        WebLink: ''
    },
    {  
        Id:5,
        Image: Tuulye,
        Description: 'Tuulye (Restaurant App) - ReactJS',
        GitHubLink: 'https://github.com/KNehe/Tuulye-FrontEnd',
        WebLink: ''
    },
     {  
        Id:6,
        Image: ShareNews,
        Description: 'Share News (Social App) - Spring Boot',
        GitHubLink: 'https://github.com/KNehe/share-news',
        WebLink: ''
    },
    {  
        Id:7,
        Image: NodeJs,
        Description: 'Tuulye (Restaurant API) - ExpressJs',
        GitHubLink: 'https://github.com/KNehe/Tuulye-Backend',
        WebLink: ''
    },
    {  
        Id:8,
        Image: ExpenseManager,
        Description: 'Expense Manager - Flutter Mobile',
        GitHubLink: 'https://github.com/KNehe/Expense-Manager',
        WebLink: ''
    },
    {  
        Id:9,
        Image: JS,
        Description: 'Pharmacy -Angular',
        GitHubLink: 'https://github.com/KNehe/OnlineMedicineShop-FrontEnd',
        WebLink: ''
    }
   
    
];

const skills = [
   
    {
        Id: 1,
        Image: Java,
        Title: 'Java',
        Description: 'Spring Boot, Unit Testing'
    },
    {
        Id: 2,
        Image: JS,
        Title: 'Javascript',
        Description: 'ExpressJs, ReactJs, Unit Testing'
    },
    {
        Id: 3,
        Image: Dart,
        Title: 'Dart',
        Description: 'Flutter, Widget $ Unit Testing'
    },
    {
        Id: 4,
        Image: Typescript,
        Title: 'Typescript',
        Description: 'In Express $ ReactJs'
    },
    {
        Id: 5,
        Image: HTML,
        Title: 'Web',
        Description: 'HTML5 /CSS3 /SASS'
    },
    {
        Id: 6,
        Image: Python,
        Title: 'Python',
        Description: 'Basics'
    },
    {
        Id: 7,
        Image: MySQL,
        Title: 'SQL',
        Description: 'MySQL, PostgreSQL'
    },
    {
        Id: 8,
        Image: MongoDB,
        Title: 'No SQL',
        Description: 'MongoDB'
    },
    {
        Id: 9,
        Image: CloudFirestore,
        Title: 'Firebase',
        Description: 'Cloud Firestore & Real Time Database'
    },
    {
        Id: 10,
        Image: GitHubImg,
        Title: 'Git',
        Description: 'GitHub'
    }
];

export  { projects, skills };