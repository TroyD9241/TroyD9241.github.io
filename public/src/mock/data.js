import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Troy Dawson',
  subtitle: 'I am a Software Engineer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'resume.png',
  paragraphOne: 'Hello everyone 😁 my name is Troy Dawson and I\'m\ a recent graduate from App Academy who is currently looking for my first opportunity in software engineering.',
  paragraphTwo: 'I\'\m bilingual and for two years I studied and worked in Japan while pursuing my undergraduate degree.',
  paragraphThree: 'In my free time I enjoy learning about Machine Learning, DataScience, and improving my skills in Python. Outside of Tech I enjoy traveling, gaming, anime, golfing, and learning about people.',
  resume: 'https://drive.google.com/file/d/1wJ-NFFsFVAe0K3vnrtJi7GH-NZOGjaqk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Deviantart',
    info: '',
    info2: '',
    url: 'https://deviantart-aa.herokuapp.com/',
    repo: 'https://github.com/TroyD9241/Reias-Dungeon-V2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bazaar',
    info: '',
    info2: '',
    url: 'https://bazaar-aa.herokuapp.com/',
    repo: 'https://github.com/tristan-88/BaZaar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Median',
    info: '',
    info2: '',
    url: 'https://median-article-app.herokuapp.com/',
    repo: 'https://github.com/jxnprince/Median', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '262-930-4574',
  btn: 'troydawson@troyd.dev',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/troyd41/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TroyD9241',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
