import React from 'react'
import uuid from 'react-uuid'

const aboutUberclone = `An exact copy of the uber web app, with about 70 -75% of its functionality.The aim is to get good at some typescript concept typescript`

const aboutMagicMind = `An app that detects the number of human faces present in a picture and specifies the face area on load`

const aboutMovieSearch = `The aim of this project was to build a web app which displays  the  contents of movies searched by  users. Contents like the Trailer, storyline summary, year of production, and rating are displayed to the users. This interface was built with the Data collected from the International Movie Database(IMBD).`

const aboutGeoserch = "Geosearch allows users to search  for places and extract information such as Map, Temperatures and local weather condition.An extra features which allows easy interconversion between celsius and fahrenheit was also included"

const aboutReelio = "Reelio is a product that allows Retailers run their businesses anywhere. They can manage their orders, engage customers, and receive payments for their goods all in one place."

const aboutFElearn= 'An online platform that allow users to learn the core web frontend technologies(HTML, CSS, Javascript) in Pidgin. Users are able to watch courses directly on the platform, add to cart, checkout and make payment(test mode) for their desired courses to have full access.'

const aboutReactSlider = 'React slider is a react developer tool library  developed with the aim of improving frontend developers productivity' 

 const aboutMadeInNigeria = 'This is one of my Open source project that I contributed to. It is a curation List of awesome tools built by Nigerians that can be used by anybody and from anywhere in the world.'

const ProjectData = [
    {
        id: uuid(),
        title: 'Uber-clone',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutUberclone,
        image: 'img/uber.png',
        live: 'https://m-uber-clone.netlify.app/',
        stack: 'Reactjs + Typescript',
        git: 'https://github.com/tech-doctor/uber-clone',
        isPrivate: false
    },
    {
        id: uuid(),
        title: 'FElearn',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutFElearn,
        image: 'img/FElearn.jpg',
        live: 'https://fe-learn.netlify.app/',
        stack: 'Reactjs + Redux',
        git: 'https://github.com/tech-doctor/onlineCourse',
        isPrivate: false
    },
    {
        id: uuid(),
        title: 'React-slider',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutReactSlider,
        image: 'img/React-slider.png',
        live: 'https://react-cards-slider.netlify.app/',
        stack: 'Reactjs + Typescript',
        git: 'https://github.com/tech-doctor/react-card-slider',
        isPrivate: false
    },
    {
        id: uuid(),
        title: 'Made in Nigeria',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutMadeInNigeria,
        image: 'img/made-in-nigeria.png',
        live: 'https://www.madeinnigeria.dev/',
        stack: 'contributor',
        git: 'https://github.com/tech-doctor/made-in-nigeria',
        isPrivate: false
    },
    
    {
        id: uuid(),
        title: 'Reelio',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutReelio,
        image: 'img/Reelio.png',
        live: 'https://reelio-4w3qiyhp4-tech-doctor.vercel.app/',
        stack: 'Nexjs + Typescript',
        isPrivate: true
    },
    {
        id: uuid(),
        title: 'Magic-mind',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutMagicMind,
        image: 'img/magic-mind.jpg',
        live: 'https://magic-mind.netlify.app/',
        git: 'https://github.com/tech-doctor/Face-Recognition-App',
        stack: 'ReactJS + Context Api',
        isPrivate: false
    },
    {
        id: uuid(),
        title: 'Movie-search',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutMovieSearch,
        image: 'img/Movie.jpg',
        live: 'https://moviesearchproject.netlify.app/',
        git: 'https://github.com/tech-doctor/Movie-search-app',
        stack: 'HTML + CSS + Javascript',
        isPrivate: false
    },
    // {
    //     id: uuid(),
    //     title: 'Geosearch',
    //     icon: <i className = 'fa fa-angle-right'></i>,
    //     aboutProject: aboutGeoserch,
    //     image: 'img/Geosearch.jpg',
    //     live: 'https://personalgeosearch.netlify.app/',
    //     stack: 'HTML + CSS + Javascript',
    //     git: 'https://github.com/tech-doctor/Geosearch',
    //     isPrivate: false
    // },
]




export default ProjectData;