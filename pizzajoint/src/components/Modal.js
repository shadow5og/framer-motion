import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const backdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <motion.div
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="backdrop"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
