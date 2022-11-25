import axios from "axios";
import { React, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../blogs/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const navigate = useNavigate();

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

  const viewBlog = (abc) => {
    console.log('hello on click ')
    console.log(`abc: ${abc}`)
    // console.log(`blogs id: ${data.id}`)
    // navigate('/blogs/getBlog')
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
  {blogs.map((blog)=>{
    return(
      <><h5>{blog.title}</h5><p>{blog.contents}</p></>
    )
  })}
</div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
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
        </table>
      </div>
    </div>
  );
};

export default Blog;