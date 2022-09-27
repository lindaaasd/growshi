import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Footer</h1>
    </motion.section>
  );
};

export default Footer;
