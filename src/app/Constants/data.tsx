import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdAnalytics } from "react-icons/md";
import { FaJava } from "react-icons/fa";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "About",
    link: "about",
  },
  {
    _id: 1003,
    title: "Features",
    link: "features",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Resume",
    link: "resume",
  },
  {
    _id: 1007,
    title: "Contact",
    link: "contact",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Project Management",
    des: "Want to gain real-life experience of managing a complete software project cycle.",
  },
  {
    id: 2,
    icon: <FaJava />,
    title: "Java Development",
    des: "Having 1.8 years of experience in Spring boot and devloped various rest API and created microservices for client purpose.",
  },
  {
    id: 3,
    icon: <CgWebsite />,
    title: "Web Development",
    des: "Have completed certification related to web development course and 2.8 years of experience. Have developed various projects, please check them on my github.",
  },
  {
    id: 4,
    icon: <MdAnalytics />,
    title: "Data Analyst",
    des: "Interested in learning data extraction,cleaning, pattern identification & web scrapping skills",
  },
  {
    id: 5,
    icon: <AiFillAppstore />,
    title: "App Development",
    des: "Will learn this soon in near future !",
  },
  {
    id: 6,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Will learn this soon in near future !",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Medical Chatbot",
    des: "This is a Medical related chatbot application using HTML, CSS, Javascript and Zoho Delgue for chatbot creation.",
    src: "medibot",
    githubLink: "https://github.com/premsn-1226/medibot",
    websiteLink: "https://miracle-medibot.glitch.me/home.html",
  },
  {
    id: 2,
    title: "Sample E-commerce",
    des: "This is a E-commerce application for serving house hold works. It is developed using HTML, CSS, Javascript.",
    src: "ecommerce",
    githubLink: "https://github.com/premsn-1226/2gather-website-",
    websiteLink: "https://bookeasy-web.glitch.me/homepage.html",
  },
  {
    id: 3,
    title: "Weather App",
    des: "This is a weather website developed using HTML,CSS,Bootstrap,React.js and OpenWeather API.",
    src: "weather",
    githubLink: "https://github.com/premsn-1226/weather-app",
    websiteLink: "",
  },
  {
    id: 4,
    title: "To Do List",
    des: "This is a To Do List application developed using Next.js and Rest API using spring boot and MongoDB.",
    src: "todolist",
    githubLink: "https://github.com/premsn-1226/ToDoListApp",
    websiteLink: "https://github.com/premsn-1226/ToDoListRestAPI",
  },
  {
    id: 5,
    title: "Student Management",
    des: "This is a Student Management website developed using React.js and Rest API using Spring Boot and H2 database.",
    src: "student",
    githubLink: "https://github.com/premsn-1226/ReactProjectCurdOperation",
    websiteLink: "https://github.com/premsn-1226/CRUDSpringBoot",
  },
  {
    id: 6,
    title: "Game",
    des: "This is the first game application developed using HTML, CSS and Javascript",
    src: "game",
    githubLink: "https://github.com/premsn-1226/first_game",
    websiteLink: "",
  },
];

export const educationData = [
  {
    id: 1,
    title: "BE in Electrical and Electronics Engineering",
    subTitle: "Sri Eshwar College of Enginnering (2017 - 2021)",
    result: "7.7 GPA",
    des: "Located in Coimbatore, Tamil Nadu. Studied Electrical & coding related concepts etc.",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    subTitle: "ELGI Matriculation Higher Secondary School (2015 - 2017)",
    result: "85.6%",
    des: "Located in Coimbatore, Tamil Nadu. Studied in this school from 11th to 12th std.",
  },
  {
    id: 3,
    title: "Primary & Secondary School Education",
    subTitle:
      "Nirmala Matha Convent Matriculation Higher Secondary School (2004 - 2015)",
    result: "93%",
    des: "Located in Coimbatore, Tamil Nadu. Studied in this school from Nursery to 10th std.",
  },
];

export const experienceData = [
  {
    title: "ASSOCIATE SOFTWARE ENGINEER",
    subTitle: "ACCENTURE - (24/12/2021 - Present)",
    result: "REMOTE (BANGALORE)",
    des: "Skills: Version Control · Representational State Transfer (REST) · Algorithms · XML · TypeScript · Regression Testing · IBM FileNet · Postman API · Debugging Code · Software Deployment · Application Monitoring · Coding Practices · Communication · Core Java · Git · AngularJS · Front-End Development · Microsoft Azure · REST APIs · Java · Microservices · Spring Boot",
  },
  {
    title: "SOFTWARE ENGINEER",
    subTitle: "TECHJAYS - (15/04/2021 - 15/09/2021) [5 MONTHS]",
    result: "REMOTE (COIMBATORE)",
    des: "SKILLS : Version Control · Algorithms · electron · Postman API · Debugging · Coding Practices · Web Development · Responsive Web Design · Communication · Git · HTML5 · Cascading Style Sheets (CSS) · React.js · bootstrap · JavaScript",
  },
  {
    title: "SOFTWARE ENGINEER INTERN",
    subTitle: "TECHJAYS - (15/10/2020 - 15/04/2021)  [6 MONTHS]",
    result: "REMOTE (COIMBATORE)",
    des: "SKILLS : Version Control · Algorithms · electron · Postman API · Debugging · Coding Practices · Web Development · Responsive Web Design · Communication · Git · HTML5 · Cascading Style Sheets (CSS) · React.js · bootstrap · JavaScript",
  },
];

export const certificateData = [
  {
    title: " Angular Intermediate Assessment",
    subTitle: "HackerRank - (Issued on 15th July 2023)",
    src: "angular",
    result: "Online",
  },
  {
    title: " Responsive Web Design",
    subTitle: "FreeCodeCamp - (Issued on 18th April 2020)",
    src: "web",
    result: "Online",
  },
  {
    title: " React + Redux",
    subTitle: "SoloLearn - (Issued on 20th November 2020)",
    src: "react",
    result: "Online",
  },
];
