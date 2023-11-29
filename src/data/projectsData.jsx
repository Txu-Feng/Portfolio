import ArgentBank from '../assets/projects/Argent-Bank.webp';
import ArgentBank2 from '../assets/projects/Argent-Bank2.webp';
import Kaza from '../assets/projects/Kasa.webp';
import Kaza2 from '../assets/projects/Kasa2.webp';
import Ohmyfood from '../assets/projects/Ohmyfood.webp';
import Ohmyfood2 from '../assets/projects/Ohmyfood2.webp';
import Booki from '../assets/projects/Booki.webp';
import Booki2 from '../assets/projects/Booki2.webp';



const ProjectsData = [
    {
        id : 1,
        title : "Argent Bank",
        description : "As a front-end developer at Argent Bank, I built the front-end of a React web application. I also used Redux to manage the application's state. The application allows users to visit the home page, log in, view their profile, and log out. I applied Green Code best practices by optimizing images and creating reusable components. I also created Swagger documentation for managing future transactions.",
        images : [ArgentBank, ArgentBank2],
        github : "https://github.com/Txu-Feng/ArgentBank",
        website : "",
        technologies : ["react" , "redux", "sass"]
    },
    {
        id : 2,
        title : "Kaza",
        description : "I joined the Kasa team as a freelance front-end developer to participate in the complete redesign of their website. Kasa is a leading peer-to-peer apartment rental company in France, which decided to modernize its platform. My main mission was to develop the entire front-end application using React, following Figma mockups and ensuring code quality.",
        images : [Kaza, Kaza2],
        github : "https://github.com/Txu-Feng/kaza",
        website : "",
        technologies : ["react" , "sass"]
    },
    {
        id : 3,
        title : "Omyfood",
        description : "As a junior developer at OhMyFood, I contributed to the development of a mobile-first website that allows customers to explore menus from gourmet restaurants in Paris, with the ability to pre-compose their meals. This project helped OhMyFood establish itself in the Parisian dining market, focusing on smooth animations to enhance the user experience.",
        images : [Ohmyfood, Ohmyfood2],
        github : "https://github.com/Txu-Feng/omyfood",
        website : "https://txu-feng.github.io/omyfood/",
        technologies : ["html" , "css", "sass"]
    },
    {
        id : 4,
        title : "Booki",
        description : "As a front-end developer, I was responsible for integrating the user interface of the Booki website. Working closely with the UI designer and the company's CTO, I transformed mockups into HTML and CSS code. The end result was a user-friendly experience and a functional website.",
        images : [Booki, Booki2],
        github : "https://github.com/Txu-Feng/booki",
        website : "https://txu-feng.github.io/booki/",
        technologies : ["html" , "css"]
    }
];

export default ProjectsData;