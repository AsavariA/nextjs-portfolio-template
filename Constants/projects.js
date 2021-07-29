import INZA_1 from '../styles/projects/INZA_1.jpg';
import INZA_2 from '../styles/projects/INZA_2.jpg';
import INZA_3 from '../styles/projects/INZA_3.jpg';
import BIZ_1 from '../styles/projects/BIZ_1.jpg';
import BIZ_2 from '../styles/projects/BIZ_2.jpg';
import BIZ_3 from '../styles/projects/BIZ_3.jpg';
import AHORA_1 from '../styles/projects/AHORA_1.jpg';
import AHORA_2 from '../styles/projects/AHORA_2.jpg';
import AHORA_3 from '../styles/projects/AHORA_3.jpg';
import PORTFOLIO_1 from '../styles/projects/PORTFOLIO_1.jpg';
import PORTFOLIO_2 from '../styles/projects/PORTFOLIO_2.gif';
import PORTFOLIO_3 from '../styles/projects/PORTFOLIO_3.jpg';
import NPM1 from '../styles/projects/NPM1.jpg';
import NPM2 from '../styles/projects/NPM2.gif';
import NPM3 from '../styles/projects/NPM3.gif';
import TALK_1 from '../styles/projects/TALK_1.jpg';
import TALK_2 from '../styles/projects/TALK_2.jpg';
import TALK_3 from '../styles/projects/TALK_3.jpg';
import POT_1 from '../styles/projects/POT_1.jpg';
import POT_2 from '../styles/projects/POT_2.jpg';
import POT_3 from '../styles/projects/POT_3.jpg';

export const projects = [
    {
        name: 'INZA Design Co',
        description: 'A Commercial Website for the branding agency, This website showcases beauty in minimalism. Seamless animations and pleasing color schemes truly brings about an aesthetic feel to it.',
        githubLink: '',
        projectLink: 'http://inzadesign.com/',
        tech: ['HTML5', 'CSS3', 'VanillaJS'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: [INZA_1, INZA_2, INZA_3],
        id: 1
    },
    {
        name: 'Place of Thoughts',
        description: 'Blogging website. With an interface similar to Medium, this web app facilitates publishing your pieces and grouping them in categories. You can even save and comment on blogs you like!',
        githubLink: 'https://github.com/AsavariA/place-of-thoughts',
        projectLink: 'https://placeofthoughts.netlify.app/',
        tech: ['MERN Stack'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-end',
        photo: [POT_1, POT_2, POT_3],
        id: 2
    },
    {
        name: 'The Biz Project',
        description: 'A place for all businesses. This full stack app becomes a treat for the users because of its features of creating, browsing without authentication and editing your businesses.',
        githubLink: 'https://github.com/AsavariA/the-bizness-project',
        projectLink: 'https://the-bizness-project.netlify.app/',
        tech: ['MERN Stack'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: [BIZ_1, BIZ_2, BIZ_3],
        id: 3
    },
    {
        name: 'Ahora Journal',
        description: 'The application helps the user maintain a personal record of daily happenings and reflections, plan the day and organize the tasks undertaken. It features various tools for boosting productivity.',
        githubLink: 'https://github.com/AsavariA/ahora-journal-app',
        projectLink: 'https://journal-cc843.web.app/',
        tech: ['ReactJS', 'Firebase'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-end',
        photo: [AHORA_1, AHORA_2, AHORA_3],
        id: 4
    },
    {
        name: 'Portfolio Website',
        description: "My very own portfolio website! It showcases my work, abilities and other things about me. It's previous version also won the E-Portfolio competition at Technovanza 2021, VJTI.",
        githubLink: 'https://github.com/AsavariA/next-website',
        projectLink: '/',
        tech: ['NextJs','Chakra UI'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: [PORTFOLIO_1, PORTFOLIO_2, PORTFOLIO_3],
        id: 5
    },
    {
        name: 'Navbar Package',
        description: 'An elegant responsive, sticky and customisable navbar package. This npm package is super easy to use! Import it in your project without any hassle and watch the magic as it happens!',
        githubLink: 'https://github.com/AsavariA/npm-package-nav',
        projectLink: 'https://www.npmjs.com/package/responsive-sticky-nav',
        tech: ['NodeJS', 'Webpack'],
        borderRadius: '0 0 50px 0',
        justifyContent: 'flex-end',
        photo: [NPM1, NPM2, NPM3],
        id: 6
    },
    {
        name: 'Talkative',
        description: "Who doesn't love a good old chat application. With an intention of bringing a more modern feel to conventional chat apps, I tried my hand at an application called Talkative.",
        githubLink: 'https://github.com/AsavariA/talkative',
        projectLink: '',
        tech: ['ReactJS', 'Firebase'],
        borderRadius: '50px 0 0 0',
        justifyContent: 'flex-start',
        photo: [TALK_1, TALK_2, TALK_3],
        id: 7
    },
]
