import NodeJs from './../Assets/nodejs-logo.png';
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
import Cloud from '../Assets/cloud.jpg';


const projects = [

    {  
        Id:11,
        Image: Python,
        Title: 'Swimmy API',
        Description: 'A Django API for a swimming pool manager to help manage their pools and expose resources to client apps.',
        Technologies: ['Python', 'Django & DRF', 'PostgreSQL'],
        GitHubLink: 'https://github.com/KNehe/swimmy',
        WebLink: ''
    },
    {  
        Id:22,
        Image: EcommerceWebImg,
        Title: "Ecommerce Web App",
        Description: 'Failitates buying and selling of goods',
        Technologies: ['Javascript', 'NextJs', 'HTML' , 'SCSS/CSS'],
        GitHubLink: 'https://github.com/KNehe/ecommerce_web',
        WebLink: 'https://ecommerce-web-woad.vercel.app/'
    }, 

    {  
        Id:33,
        Image: Typescript,
        Title: 'Ecommerce API',
        Description: 'Handles buying and selling of goods',
        Technologies: ['ExpressJs', 'Typescript', 'MongoDB'],
        GitHubLink: 'https://github.com/KNehe/Nearest_Hospitals',
        WebLink: ''
    },
    {  
        Id:44,
        Image: Python,
        Title: "Foodie",
        Description: 'A web application where users can publish recipes and favorite meals',
        Technologies: ['Python', 'Django', 'HTML/CSS'],
        GitHubLink: 'https://github.com/KNehe/foodie',
        WebLink: ''
    }, 
    
    {  
        Id:55,
        Image: AdminDashImg,
        Title: "Admin Dashboard",
        Description: 'Admin dashboard UI idea',
        Technologies: ['Javascript', 'NextJs' , 'HTML' , 'SCSS/CSS'],
        GitHubLink: 'https://github.com/KNehe/admin-dashboard',
        WebLink: 'https://admin-dashboard-20nmbu4ka.vercel.app/'
    },   
    {  
        Id:66,
        Image: EcommerceMobileImg,
        Title: 'Ecommerce Mobile App',
        Description: 'Facilitates buying and selling of goods',
        Technologies: ['Flutter', 'Stripe','Paypal'],
        GitHubLink: 'https://github.com/KNehe/Ecommerce_app',
        WebLink: ''
    },
    {  
        Id:77,
        Image: NearestHospitalsImg,
        Title: 'Nearest hospitals',
        Description: 'Find closest hospitals in your location - Mobile app',
        Technologies: ['Flutter', 'FourSquare', 'GoogleMaps'],
        GitHubLink: 'https://github.com/KNehe/Nearest_Hospitals',
        WebLink: ''
    },
    {  
        Id:88,
        Image: NodeJs,
        Title: 'Tuulye API',
        Description: 'REST API for a Restaurant',
        Technologies: ['ExpressJs', 'MongoDB', 'Javascript'],
        GitHubLink: 'https://github.com/KNehe/Tuulye-Backend',
        WebLink: ''
    },
    {  
        Id:99,
        Image: KAMOKENImg,
        Title: "KAMOKEN Certified Public Accountant",
        Description: 'Website for an Auditor',
        Technologies: ['Nextjs','HTML', 'SCSS/CSS','Javascript'],
        GitHubLink: '',
        WebLink: 'https://kamoken.org'
    },
    
];

const skills = [
   
    {
        Id: 1,
        Image: Python,
        Title: 'Python',
        Description: 'Django, Django Rest Framework, Unit Testing, Flask'
    },
    {
        Id: 2,
        Image: JS,
        Title: 'Javascript',
        Description: 'ExpressJs, ReactJs, Nextjs, Unit Testing'
    },
    {
        Id: 3,
        Image: Typescript,
        Title: 'Typescript',
        Description: 'In Express, ReactJs, Nextjs'
    },
    {
        Id: 4,
        Image: HTML,
        Title: 'Web',
        Description: 'HTML5 /CSS3 /SASS/ Bootstrap'
    },
    {
        Id: 5,
        Image: MySQL,
        Title: 'SQL',
        Description: 'MySQL, PostgreSQL'
    },
    {
        Id: 6,
        Image: MongoDB,
        Title: 'No SQL',
        Description: 'MongoDB'
    },
    {
        Id: 7,
        Image: Dart,
        Title: 'Dart',
        Description: 'Flutter, Widget $ Unit Testing'
    },
    {
        Id: 8,
        Image: GitHubImg,
        Title: 'Git',
        Description: 'GitHub'
    },
    {
        Id: 9,
        Image: CloudFirestore,
        Title: 'Firebase',
        Description: 'Cloud Firestore & Real Time Database'
    },
    {
        Id: 10,
        Image: Cloud,
        Title: 'Cloud',
        Description: 'AWS S3, Vercel'
    },
];

export  { projects, skills };