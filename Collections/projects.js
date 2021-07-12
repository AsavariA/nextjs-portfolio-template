import INZA_1 from '../styles/projects/INZA_1.jpg';
import BIZ_1 from '../styles/projects/BIZ_1.jpg';
import AHORA_1 from '../styles/projects/AHORA_2.jpg';
import PORTFOLIO_1 from '../styles/projects/PORTFOLIO_1.jpg';
import NPM1 from '../styles/projects/NPM1.jpg';
import TALK_1 from '../styles/projects/TALK_1.jpg';

export const projects = [
    {
        name: 'INZA Design Co',
        description: 'A Commercial Website for the branding agency, This website showcases beauty in minimalism. Seamless animations and pleasing color schemes truly brings about an aesthetic feel to it.',
        githubLink: '',
        projectLink: 'http://inzadesign.com/',
        tech: ['HTML5', 'CSS3', 'VanillaJS'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: INZA_1,
        id: 1
    },
    {
        name: 'The Biz Project',
        description: 'A place for all businesses. This full stack app becomes a treat for the users because of its features of creating, browsing without authentication and editing your businesses.',
        githubLink: 'https://github.com/AsavariA/the-bizness-project',
        projectLink: 'https://the-bizness-project.netlify.app/',
        tech: ['MERN Stack'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-end',
        photo: BIZ_1,
        id: 2
    },
    {
        name: 'Ahora Journal',
        description: 'The application helps the user maintain a personal record of daily happenings and reflections, plan the day and organize the tasks undertaken. It features various tools for boosting productivity.',
        githubLink: 'https://github.com/AsavariA/ahora-journal-app',
        projectLink: 'https://journal-cc843.web.app/',
        tech: ['ReactJS', 'Firebase'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: AHORA_1,
        id: 3
    },
    {
        name: 'Portfolio Website',
        description: "My very own portfolio website! It showcases my work, abilities and other things about me. It's previous version also won the E-Portfolio competition at Technovanza 2021, VJTI.",
        githubLink: 'https://github.com/AsavariA/next-website',
        projectLink: '/',
        tech: ['NextJs','Chakra UI'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-end',
        photo: PORTFOLIO_1,
        id: 4
    },
    {
        name: 'Navbar Package',
        description: 'An elegant responsive, sticky and customisable navbar package. This npm package is super easy to use! Import it in your project without any hassle and watch the magic as it happens!',
        githubLink: 'https://github.com/AsavariA/npm-package-nav',
        projectLink: 'https://www.npmjs.com/package/responsive-sticky-nav',
        tech: ['NodeJS', 'Webpack'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-start',
        photo: NPM1,
        id: 5
    },
    {
        name: 'Talkative',
        description: "Who doesn't love a good old chat application. With an intention of bringing a more modern feel to conventional chat apps, I tried my hand at an application called Talkative.",
        githubLink: 'https://github.com/AsavariA/talkative',
        projectLink: '',
        tech: ['ReactJS', 'Firebase'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-end',
        photo: TALK_1,
        id: 6
    },

]
