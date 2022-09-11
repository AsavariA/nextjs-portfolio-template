//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Bhathiya Prasad", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'Bhathiyaprasad217@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '0704894572', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+9a' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Bhathiya.",
        subtitle: "Beginner in Web development"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Frontend", // eg.frontend, backend, devops etc
            skills: ["Html", "CSS", "Javascript"] //eg. react, html, python etc.
        },
        // {
        //     category: "Category",
        //     skills: ["Skillset2", "Skillset2", "Skillset2"]
        // },
        // {
        //     category: "Category",
        //     skills: ["Skillset3", "Skillset3", "Skillset3"]
        // },
        // {
        //     category: "Category",
        //     skills: ["Skillset4", "Skillset4", "Skillset4"]
        // },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Im 20 years old student who Finished My Advanced level Examination. With the school knowledge i started to follow some online courses for learn programming language i like to be a creative web developer",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2018', //timespan
                title: 'Finished ordinary level examination with english medium', //eg. BTech in Compuster Engineering
                organization: 'Nalanda Central College Minuwangoda', //eg. VJTI, Mumbai
                // description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2022',
                title: 'Finished Advanced level examination ',
                organization: 'Sri Gnanodaya Central college',
    //             description: 'Lorem ipsum dolor sit amet consectetur'
    //         },
    //         {
    //             time: 'May - Oct 2020',
    //             title: 'Degree name',
    //             organization: 'School Name',
    //             description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Easy Tech Solutions', //company name eg.Microsoft
                companylogo: '', //companylogo
                position: 'Assistant CCTV oparetor', //post you held eg.Senior SDE
                time: 'March 2021 - August 2022', //timespan
                description: '' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            // {
            //     company: 'Dunder Mifflin',
            //     companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
            //     position: 'Regional Manager',
            //     time: 'March 2020 - May 2020',
            //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            // },
            // {
            //     company: 'Dunder Mifflin',
            //     companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
            //     position: 'Regional Manager',
            //     time: 'March 2020 - May 2020',
            //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            // },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    //blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = 
{
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
