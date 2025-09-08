import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ComingSoonModal.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            
            <div className="modal-body">
              <img 
                src="/arcadeus-logo-black-on-white-simple.svg" 
                alt="Arcadeus" 
                className="modal-logo"
              />
              
              <h1 className="coming-soon-text">COMING SOON</h1>
              
              <p className="coming-soon-subtitle">
                We're working hard to bring you this feature.
                <br />
                Stay tuned for updates!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;