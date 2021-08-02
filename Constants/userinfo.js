import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Asavari Ambavane",
    contact: {
        email: 'ambavaneasavari@gmail.com',
        phone: '',
        countrycode: ''
    },
    socials: [
        { type: 'github', link: 'https://github.com/AsavariA', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/asavariambavane/', icon: faLinkedinIn },
        { type: 'medium', link: 'https://ambavaneasavari.medium.com/', icon: faMediumM },
    ],
    greeting: {
        title: "Hey there, I am Asavari.",
        subtitle: "Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!"
    },
    about: {
        content: "I am Asavari, a student at VJTI, Mumbai. I am currently pursuing my bachelor's degree in electronic engineering. I aim to gain maximum technical knowledge during the course of my eduction and hopefully apply the same for the benefit of the society in future. Other than that, you are most likely to find me with a book in one hand and tea in other. I also like to groove to upbeat music whenever I feel happy!",
        resume: "https://drive.google.com/file/d/1zWIQP531V9P8ZL5aV9DDrqQIuIFoodn-/view?usp=sharing"
    },
    capabilities: [
        {
            category: "Frontend",
            skills: ["HTML5, CSS3, JS", "React JS, Next JS", "SASS", "Flutter"]
        },
        {
            category: "Backend",
            skills: ["NodeJS", "ExpressJS", "Python"]
        },
        {
            category: "Database",
            skills: ["Firebase", "MongoDB"]
        },
    ],
    education: {
        visible: false,
        educationList: [
            {
                time: 'May - Oct 2020',
                title: 'B.Tech in Electronics Engineering',
                organization: 'VJTI, Mumbai',
                description: 'Currently a sophomore at VJTI with a CGPA of 9.25'
            },
            {
                time: 'May - Oct 2020',
                title: 'B.Tech in Electronics Engineering',
                organization: 'VJTI, Mumbai',
                description: 'Currently a sophomore at VJTI with a CGPA of 9.25'
            },
            {
                time: 'May - Oct 2020',
                title: 'B.Tech in Electronics Engineering',
                organization: 'VJTI, Mumbai',
                description: 'Currently a sophomore at VJTI with a CGPA of 9.25'
            },
        ],
    },
    experience: {
        visible: false,
        experienceList: [
            {
                company: 'VJTI, Mumbai',
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
                position: 'Web Developer',
                time: 'March 2020 - May 2020',
                description: 'Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.'
            },
            {
                company: 'VJTI, Mumbai',
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
                position: 'Web Developer',
                time: 'March 2020 - May 2020',
                description: 'Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.'
            },
            {
                company: 'VJTI, Mumbai',
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
                position: 'Web Developer',
                time: 'March 2020 - May 2020',
                description: 'Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.'
            },
        ],
    },
}

export const headings = {
    workHomePage: 'Work',
    workMainPage: 'Projects and Blogs',
    capabilities: 'Capabilities',
    about: 'About Me',
    experience: 'Experiences',
    blogs: 'I write on Medium',
    contact: 'Contact Me',
}

export const ctaTexts = {
    landingCTA : 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}