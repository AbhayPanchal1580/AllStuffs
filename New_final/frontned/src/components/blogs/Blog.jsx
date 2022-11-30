import axios from "axios";
import { React, useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Navbar from "../blogs/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  // const navigate = useNavigate();

  const getAllBlogs = () => {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setBlogs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div>
    //   <div className="m-5 mt-1">
    //     <div className="border border-success p-5">
    //       <p>{blogs[0].title}</p>
    //       <p>{blogs[0].contents}</p>
    //       <p>{blogs[0].tags}</p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Navbar />
      <div className="container" style={{ padding: "50px", maxWidth: "80%" }}>
        <nav className="m-5 mt-1" style={{ textAlign: "center" }}>
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="container">
          {blogs.map((blog) => {
            return (
              <div
                className="container mt-2 p-3"
                style={{
                  border: "2px solid",
                  padding: "10px",
                  overflow: "hidden",
                }}
              >
                <h3>
                  <b>{blog.title}</b>
                </h3>
                <b>Created on:</b> {blog.date}
                <p style={{ marginTop: "5px" }}>{blog.contents}</p>
                <div className="readmore">
                  {" "}
                  <Link to={{ pathname: `/blogs/single/${blog.id}` }}>
                    {" "}
                    <b>Read more...</b>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Title</th>
              <th>Contents</th>
              <th>Tags</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => {
              return (
                <tr>
                  <td>{blog.id}</td>
                  <td>{blog.date}</td>
                  <td>{blog.title}</td>
                  <td>{blog.contents}</td>
                  <td>{blog.tags}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={viewBlog(blog.id)}
                    >
                      View Blog
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Blog;
