// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
//import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
//import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
//import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
//import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
//import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
//import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Stop Watch', //project name
        description: '', //project description
        githubLink: 'https://github.com/BhathiyaPrasad/stopwatch.git', //github repo link
        projectLink: '', //deployed project link
        tech: ['HTML', 'CSS', 'Javascripts'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1], //list of names of images from above imports.
    },
    {
        name: 'Small Question Page',
        description: '',
        githubLink: 'https://github.com/BhathiyaPrasad/Quiz-App.git',
        projectLink: '/',
        tech: ['HTML', 'CSS', 'Javascripts'],
        photo: [PROJECT2_1],
    },
    {
        name: 'Simple Calculator',
        description: '',
        githubLink: 'https://github.com/BhathiyaPrasad/simple-calculator.git',
        projectLink: '/',
        tech: ['HTML', 'CSS', 'Javascripts'],
        photo: [PROJECT3_1],
    },
]
