import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-dark text-white text-center py-3 mt-5"
    >
      <div className="container">
        <p className="mb-1">&copy; 2025 Postify. All Rights Reserved.</p>
        <p className="mb-0">
          <Link className="text-white" to="/about">
            About Us
          </Link>{" "}
          |{" "}
          <Link className="text-white" to="/">
            Privacy Policy
          </Link>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
