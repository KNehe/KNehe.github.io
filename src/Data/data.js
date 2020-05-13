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

const projects = [

    {  
        Id:1,
        Image: Tuulye,
        Description: 'Tuulye (Restaurant App) - ReactJS',
        GitHubLink: 'https://github.com/KNehe/Tuulye-FrontEnd',
        WebLink: ''
    },
     {  
        Id:2,
        Image: ShareNews,
        Description: 'Share News (Social App) - Spring Boot',
        GitHubLink: 'https://github.com/KNehe/share-news',
        WebLink: ''
    },
    {  
        Id:3,
        Image: NodeJs,
        Description: 'Tuulye (Restaurant API) - ExpressJs',
        GitHubLink: 'https://github.com/KNehe/Tuulye-Backend',
        WebLink: ''
    },
    {  
        Id:4,
        Image: ExpenseManager,
        Description: 'Expense Manager - Flutter Mobile',
        GitHubLink: 'https://github.com/KNehe/Expense-Manager',
        WebLink: ''
    }
    , {  
        Id:5,
        Image: Spring,
        Description: 'House Rent - SpringBoot Microservices',
        GitHubLink: 'https://github.com/KNehe/House-Rent-MicroServices',
        WebLink: ''
    },
    {  
        Id:6,
        Image: Spring,
        Description: 'Pharmacy System - Spring Boot API ',
        GitHubLink: 'https://github.com/KNehe/OnlineMedicineShop-Backend',
        WebLink: ''
    }
];

const skills = [
   
    {
        Id: 1,
        Image: Java,
        Title: 'Java',
        Description: 'Spring Boot'
    },
    {
        Id: 2,
        Image: JS,
        Title: 'JS',
        Description: 'Node/Express, ReactJs'
    },
    {
        Id: 3,
        Image: Dart,
        Title: 'Dart',
        Description: 'Flutter'
    },
    {
        Id: 4,
        Image: Typescript,
        Title: 'Typescript',
        Description: 'In Express'
    },
    {
        Id: 5,
        Image: HTML,
        Title: 'Web',
        Description: 'HTML5 / CSS3 / SASS'
    },
    {
        Id: 6,
        Image: Python,
        Title: 'Python',
        Description: 'Basics'
    }
];

export  { projects, skills };