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
import KAMOKENImg from '../Assets/KAMOKEN_screenshot.PNG'
import EcommerceWebImg from '../Assets/Ecommerce-web.png'
import AdminDashImg from '../Assets/admin-dashboard.png'
import EcommerceMobileImg from '../Assets/Ecommerce-mobile.png'
import NearestHospitalsImg from '../Assets/nearest_hospitals.png'
import SpringCloudImg from '../Assets/springcloud.png'


const projects = [
    
    {  
        Id:1,
        Image: KAMOKENImg,
        Title: "KAMOKEN Certified Public Accountant",
        Description: 'Website for an Auditor',
        Technologies: ['Nextjs','HTML', 'SCSS/CSS','Javascript'],
        GitHubLink: '',
        WebLink: 'https://kamoken.org'
    },
    {  
        Id:2,
        Image: AdminDashImg,
        Title: "Admin Dashboard",
        Description: 'Admin dashboard UI idea',
        Technologies: ['Javascript', 'NextJs' , 'HTML' , 'SCSS/CSS'],
        GitHubLink: 'https://github.com/KNehe/admin-dashboard',
        WebLink: 'https://admin-dashboard-20nmbu4ka.vercel.app/'
    },  
    {  
        Id:3,
        Image: EcommerceWebImg,
        Title: "Ecommerce Web App",
        Description: 'Failitates buying and selling of goods',
        Technologies: ['Javascript', 'NextJs', 'HTML' , 'SCSS/CSS'],
        GitHubLink: 'https://github.com/KNehe/ecommerce_web',
        WebLink: 'https://ecommerce-web-woad.vercel.app/'
    },  
    {  
        Id:4,
        Image: Typescript,
        Title: 'Ecommerce API',
        Description: 'Handles buying and selling of goods',
        Technologies: ['ExpressJs', 'Typescript', 'MongoDB'],
        GitHubLink: 'https://github.com/KNehe/Nearest_Hospitals',
        WebLink: ''
    },

    {  
        Id:5,
        Image: ShareNews,
        Title: 'Share news',
        Description: 'Web app for sharing events',
        Technologies: ['Spring Boot', 'WebSockets','Thymleaf', 'HTML/CSS', 'MySQL', 'JQuery'],
        GitHubLink: 'https://github.com/KNehe/share-news',
        WebLink: ''
    },
    {  
        Id:6,
        Image: EcommerceMobileImg,
        Title: 'Ecommerce Mobile App',
        Description: 'Facilitates buying and selling of goods',
        Technologies: ['Flutter', 'Stripe','Paypal'],
        GitHubLink: 'https://github.com/KNehe/Ecommerce_app',
        WebLink: ''
    },
    {  
        Id:7,
        Image: NearestHospitalsImg,
        Title: 'Nearest hospitals',
        Description: 'Find closest hospitals in your location - Mobile app',
        Technologies: ['Flutter', 'FourSquare', 'GoogleMaps'],
        GitHubLink: 'https://github.com/KNehe/Nearest_Hospitals',
        WebLink: ''
    },
   
     
    {  
        Id:8,
        Image: SpringCloudImg,
        Title: 'House Rent',
        Description: 'Web services for house renting app',
        Technologies: ['Spring Boot', 'Spring Cloud', 'MySQL'],
        GitHubLink: 'https://github.com/KNehe/House-Rent-MicroServices',
        WebLink: ''
    },
    {  
        Id:9,
        Image: Tuulye,
        Title: 'Tuulye',
        Description: 'Website app for a restaurant',
        Technologies: ['ReactJs', 'Javascript', 'CSS', 'HTML'],
        GitHubLink: 'https://github.com/KNehe/Tuulye-FrontEnd',
        WebLink: 'https://tuulye-front-end.vercel.app/'
    }, 
    {  
        Id:10,
        Image: JS,
        Title: 'MovieAPI',
        Description: "API for movie app",
        Technologies: ['GraphQL','ExpressJs', 'Javascript', 'MongoDB'],
        GitHubLink: 'https://github.com/KNehe/MovieAPI',
        WebLink: ''
    },
    {  
        Id:11,
        Image: ExpenseManager,
        Title: 'Expense Manager - Flutter Mobile',
        Description: 'Mobile app for managing expenses',
        Technologies: ['Flutter', 'CloudFireStore', 'FirebaseAuth'],
        GitHubLink: 'https://github.com/KNehe/Expense-Manager',
        WebLink: ''
    },
    
    {  
        Id:12,
        Image: Spring,
        Title: 'ChatApp API',
        Description: 'REST API to facilate chats',
        Technologies: ['Spring Boot', 'MySQL'],
        GitHubLink: 'https://github.com/KNehe/Chat-app-api',
        WebLink: ''
    },
    {  
        Id:13,
        Image: Spring,
        Title: 'Pharmacy System - Spring Boot API ',
        Description: 'REST API to facilitate buying and selling of medicine',
        Technologies: ['Spring Boot', 'Stripe', 'MySQL'],
        GitHubLink: 'https://github.com/KNehe/OnlineMedicineShop-Backend',
        WebLink: ''
    },
  

    {  
        Id:14,
        Image: NodeJs,
        Title: 'Tuulye API',
        Description: 'REST API for a Restaurant',
        Technologies: ['ExpressJs', 'MongoDB', 'Javascript'],
        GitHubLink: 'https://github.com/KNehe/Tuulye-Backend',
        WebLink: ''
    },
   
   
    
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
        Description: 'ExpressJs, ReactJs, Nextjs, Unit Testing'
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
        Description: 'In Express, ReactJs, Nextjs'
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