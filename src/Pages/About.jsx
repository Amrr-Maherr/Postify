import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";

function About() {
  const [title, setTitle] = useState(""); // لإدارة عنوان المنشور
  const [body, setBody] = useState(""); // لإدارة نص المنشور

  // دالة لإضافة البوست
  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && body) {
      console.log("New Post Added: ", { title, body });
      // يمكنك هنا تنفيذ عملية إرسال البوست إلى الخادم أو إضافته إلى حالة التطبيق
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container text-center my-5"
      >
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          About Postify
        </motion.h1>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="lead mb-5"
        >
          Postify is a platform designed to share and discover engaging posts.
          It's a social space where you can explore different topics, express
          your thoughts, and interact with others through reactions and
          comments.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h5>Features:</h5>
          <ul className="list-unstyled">
            <li>- Explore posts by categories</li>
            <li>- React to posts with likes and dislikes</li>
            <li>- Share your own thoughts and opinions</li>
            <li>- Easy navigation and smooth user interface</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-5">
            We believe that sharing your ideas and reading diverse thoughts can
            help us grow and learn together. Enjoy using Postify!
          </p>
        </motion.div>

        {/* بداية حقل إضافة المنشور */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 border p-4 rounded shadow-sm"
        >
          <div className="d-flex mb-3">
            <img
              src="https://i.pinimg.com/originals/5e/7d/cf/5e7dcf7b56088a35e0269111c21d0f87.png"
              alt="User Profile"
              className="rounded-circle"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="What's on your mind?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <textarea
            className="form-control mb-3"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write something..."
          />
          <button onClick={handleAddPost} className="btn btn-primary w-100">
            Post
          </button>
        </motion.div>
          </motion.div>
          <Footer/>
    </>
  );
}

export default About;
