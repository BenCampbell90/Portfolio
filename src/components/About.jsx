/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w 3xl leading-[30px]">
        Hello! I'm a passionate web developer with a robust foundation in key technologies, driven by a diverse range of projects that showcase my
        skills. Proficient in crafting captivating user interfaces with React, I thrive on making websites dynamic and engaging. While my experience
        primarily stems from personal projects, I've successfully navigated both frontend and backend development. Leveraging Node.js, I manage
        server-side operations, and MongoDB serves as a reliable repository for efficient data storage and management. My proficiency in JavaScript,
        HTML, and CSS forms the backbone of my dedication to creating visually appealing and functional websites. Although I may lack industry
        experience, I am excited about the prospect of contributing my skills to a dynamic team within a professional setting. My journey in web
        development revolves around blending creativity with coding to construct seamless web experiences that leave a lasting impression. I am eager
        to bring my project experience and enthusiasm to a role where I can continue learning and making meaningful contributions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
