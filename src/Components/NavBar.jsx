import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <div className="container">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link className="navbar-brand" to="/">
            Postify
          </Link>
        </motion.div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <motion.ul
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="navbar-nav ms-auto"
          >
            <li className="nav-item">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link className="nav-link" to="/">
                  <i className="fas fa-home me-2"></i>Home
                </Link>
              </motion.div>
            </li>
            <li className="nav-item">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link className="nav-link" to="/about">
                  <i className="fas fa-info-circle me-2"></i>About
                </Link>
              </motion.div>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
