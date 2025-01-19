import NavBar from "../Components/NavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [SearchValue,setSearchValue] = useState("")

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    posts.forEach((post) => {
      axios
        .get(`https://dummyjson.com/posts/${post.id}/comments`)
        .then((response) => {
          setComments((prevComments) => ({
            ...prevComments,
            [post.id]: response.data.comments,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [posts]);
  const fil = posts.filter((post) => {
    return post.title.includes(SearchValue.toLocaleLowerCase())
  })

  return (
    <>
      <NavBar />
      <div className="container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center my-5"
        >
          Welcome to Postify!
        </motion.h1>

        {/* Search Bar */}
        <div className="search-container my-4 d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50 search-input"
            placeholder="Search for posts..."
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        {/* Posts */}
        <div className="row d-flex justify-content-center">
          {fil.length === 0 ? (
            <div className="col-12 text-center mt-5">
              <h4>No posts found. Try a different search.</h4>
              <p className="text-muted">
                It looks like there are no posts matching your search criteria.
                Please try searching for something else.
              </p>
            </div>
          ) : (
            <>
              {fil.map((post) => (
                <div
                  key={post.id}
                  className="col-xl-4 col-lg-6 col-md-6 col-12 my-3"
                >
                  <div className="card shadow-lg border-light post-card">
                    <div className="card-body">
                      <h5 className="card-title post-title">{post.title}</h5>
                      <div className="d-flex justify-content-between mb-3">
                        {post.reactions ? (
                          <>
                            <span className="reactions-text">
                              Likes: {post.reactions.likes}
                            </span>
                            <span className="reactions-text">
                              Dislikes: {post.reactions.dislikes}
                            </span>
                          </>
                        ) : (
                          <span>No reactions available</span>
                        )}
                      </div>
                      <p className="card-text post-body">{post.body}</p>

                      {/* Comments Section */}
                      <div className="comments-section mt-4">
                        <h6>Comments:</h6>
                        {comments[post.id] ? (
                          <ul className="list-unstyled comments-list">
                            {comments[post.id].map((comment) => (
                              <li key={comment.id} className="comment-item">
                                <div className="comment-header">
                                  <strong>{comment.user.fullName}</strong>
                                  <span className="text-muted">
                                    @{comment.user.username}
                                  </span>
                                </div>
                                <p className="comment-body">{comment.body}</p>
                                <span className="likes-count">
                                  Likes: {comment.likes}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>Loading comments...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
