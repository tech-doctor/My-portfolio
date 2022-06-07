import React from 'react'
import uuid from 'react-uuid'

const aboutUberclone = `An exact copy of the uber web app, with about 70 -75% of its functionality.The aim is to get good at some typescript concept typescript`

const aboutMagicMind = `An app that detects the number of human faces present in a picture and specifies the face area on load`

const aboutMovieSearch = `The aim of this project was to build a web app which displays  the  contents of movies searched by  users. Contents like the Trailer, storyline summary, year of production, and rating are displayed to the users. This interface was built with the Data collected from the International Movie Database(IMBD).`

const aboutGeoserch = "Geosearch allows users to search  for places and extract information such as Map, Temperatures and local weather condition.An extra features which allows easy interconversion between celsius and fahrenheit was also included"

const aboutMyPortfolio = "My official portfolio website which contains my experiences, projects i have worked on and other little information about me."



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
    {
        id: uuid(),
        title: 'My portfolio',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutMyPortfolio,
        image: 'img/portfolio.png',
        live: 'https://olukaisaac.netlify.app/',
        git: 'https://github.com/tech-doctor/My-portfolio',
        stack: 'ReactJS + SCSS',
        isPrivate: false
    },
    {
        id: uuid(),
        title: 'Geosearch',
        icon: <i className = 'fa fa-angle-right'></i>,
        aboutProject: aboutGeoserch,
        image: 'img/Geosearch.jpg',
        live: 'https://personalgeosearch.netlify.app/',
        stack: 'HTML + CSS + Javascript',
        git: 'https://github.com/tech-doctor/Geosearch',
        isPrivate: false
    },
]




export default ProjectData;