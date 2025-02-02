import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariant}
      className="home container"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
