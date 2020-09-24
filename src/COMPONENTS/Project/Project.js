import React, { Component } from 'react'
import uuid from 'react-uuid'
import Details from './ProjectDetails'

export class Project extends Component {
     constructor(props){
        super(props)
        this.state = {
            projects: [
                {
                    id: uuid(),
                    title: 'Todo-list',
                    icon: <i className = 'fa fa-angle-right'></i>,
                    aboutProject: `About this project`,
                    image: 'img/Todo.jpg',
                    live: 'URL',
                    git: 'gitURl',
                    stack: 'React + Sass',
                    isPrivate: false
                },

                {
                    id: uuid(),
                    title: 'Movie-search',
                    icon: <i className = 'fa fa-angle-right'></i>,
                    aboutProject: `About this project`,
                    image: 'img/Movie.jpg',
                    live: 'URL',
                    git: 'gitURl',
                    stack: 'HTML + CSS + Javascript',
                    isPrivate: false
                },

                {
                    id: uuid(),
                    title: 'Geosearch',
                    icon: <i className = 'fa fa-angle-right'></i>,
                    aboutProject: `About this project`,
                    image: 'img/Geosearch.jpg',
                    live: 'URL',
                    stack: 'HTML + CSS + Javascript',
                    git: 'gitURl',
                    isPrivate: false
                },
            ]
        }
     }



    render() {
      const  {projects} = this.state;
        return (
            <div>
                 {projects.map((project) =>
                  ( <Details key={project.id} data={project} 
                   projectArray = {this.state.projects}

                  /> ))}
            </div>
        )
    }
}

export default Project
