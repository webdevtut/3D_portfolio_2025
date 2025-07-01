import { idea, hpe, mphasis, appic, ifanow } from "../assets/images";
import {
    angular,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Angular Developer",
        company_name: "Idealake",
        icon: idea,
        iconBg: "#accbe1",
        date: "August 2023 - Jan 2025",
        points: [
            "Developing and maintaining web applications using Angular, Node.js and other related technologies."
        ],
    },
    {
        title: "Senior Software Developer",
        company_name: "Mphasis",
        icon: mphasis,
        iconBg: "#d7dadc",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
        ],
    },
    {
        title: "Angular Developer",
        company_name: "Appic Mobile",
        icon: appic,
        iconBg: "#b7e4c7",
        date: "Jul 2021 - Dec 2021",
        points: [
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "IFANow",
        icon: ifanow,
        iconBg: "#346b4e",
        date: "Jan 2021 - May 2021",
        points: [
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Data Center Support Engineer",
        company_name: "HPE",
        icon: hpe,
        iconBg: "#000000",
        date: "September 2016 - Jan 2018",
        points: [
            "Working and maintaining Servers, Storages, Networking devices for mission critical systems.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Webdevtut',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tushar-web-dev',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Clothify',
        description: 'Developed online E-commerce website with React Hooks, Context API, Suspense, React Lazy, Redux, Redux Thunk and Redux Saga.',
        link: 'https://redux-clothify.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Happenstance',
        description: 'Full-stack Wholesome Dating and Chat Application made with Angular, .NET, Postgresql, SignalIR .',
        link: 'https://happenstance.up.railway.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Detour',
        description: 'Full stack Tourism / Travel Website made with Node.js, Pug Templates, MongoDB, Mapbox. (Advanced Redis caching and Mongo Geo-location Querying Implemented)',
        link: 'https://d-tour.up.railway.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Blogfeed',
        description: 'Blogging website made with React, Express, MongoDB.(Features : Scalable Image upload + Google OAuth 2.0 + Redis Cache)',
        link: 'https://blogfeed.onrender.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Professional Beginners',
        description: 'Blogging Website made with Angular and ngrx.',
        link: 'https://ng-redux-blogger.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Omni API Automation',
        description: 'App that creates Reusable CRUD APIs for specified Service.',
        link: 'https://omni-api-automation.vercel.app/',
    }
];