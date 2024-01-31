import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  metaversus,
  tshirt,
  dalle,
  grocery,
  threejs,
  vba,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: '3D Models',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Excel Programmer',
    icon: creator,
  },
];

const technologies = [
  //{
  //name: 'HTML 5',
  //icon: html,
  //},
  //{
  //name: 'CSS 3',
  //icon: css,
  //},
  {
    name: 'JavaScript',
    icon: javascript,
  },
  //{
  //name: 'TypeScript',
  //icon: typescript,
  //},
  {
    name: 'React JS',
    icon: reactjs,
  },
  //{
  //name: 'Redux Toolkit',
  //icon: redux,
  //},
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  //  },
  //  {
  //  name: 'git',
  //  icon: git,
  // },
  //  {
  //  name: 'figma',
  //   icon: figma,
  //  },
  //  {
  //  name: 'vba',
  // icon: vba,
  //  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'MPD',
    icon: '',
    iconBg: '#383E56',
    date: 'Jan 2022 - Current',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Metaversus',
    description: 'Demo website that showcases a landing page with custom animations.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/BenCampbell90/nextjs-metaverse',
    live_site_link: 'https://serene-churros-49d1d2.netlify.app',
  },
  {
    name: 'T-Shirt',
    description:
      'Demo web application that allows users to customise a 3D T-Shirt. This project showcases the use of 3D models and their interactivity',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
    ],
    image: tshirt,
    source_code_link: 'https://github.com/BenCampbell90/T-Shirt',
    live_site_link: 'https://tranquil-florentine-dd2fa1.netlify.app',
  },
  {
    name: 'Dalle Mock',
    description:
      'Demo web application that allows users to create images using AI prompts, and post them for the community to see. This project showcases the use of frontend, servers and databases to create and store data that can be rendered by the user.',
    tags: [
      {
        name: 'mernStack',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
    ],
    image: dalle,
    source_code_link: 'https://github.com/BenCampbell90/dall.e-MERN',
    live_site_link: 'https://flourishing-bavarois-b311ce.netlify.app',
  },
  {
    name: 'Grocery Bud',
    description: 'A grocery list app',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'toastify',
        color: 'green-text-gradient',
      },
    ],
    image: grocery,
    source_code_link: 'https://github.com/BenCampbell90/grocery-bud-localStorage/tree/main',
    live_site_link: 'https://melodic-dusk-4702b9.netlify.app',
  },
];

export { services, technologies, experiences, testimonials, projects };
