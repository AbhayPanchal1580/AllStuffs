import axios from "axios";
import { React, useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Navbar from "../blogs/Navbar";

const Blog = () => {
  

  useEffect(() => {
    getGithubData();
  }, []);

  // const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  const getGithubData = () => {

    let endpoints = [
      "http://localhost:3000/blogs",
      "http://localhost:3000/users/getAllUsers"
    ];
    
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: blogs}, {data: users}] )=> {
      setBlogs(blogs)
      setUsers(users)
      console.log(blogs[0])
      console.log(users[0])
    });
    
  };
  function truncateCharCount(text, length) {
    if (text.length > length) {
      return text.substr(0, length) + '...'
    }
  
    return text
  }
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
          <div className="container-fluid">
            
          </div>
        </nav>
        <div className="container">
        <form className="d-flex mb-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success ml-5" type="submit">
                Search
              </button>
            </form>
          {blogs.map((blog) => {
            return (
              <div
                className="content mt-2 p-3"
                style={{
                  border: "2px solid",
                  padding: "10px",
                  overflow: "hidden",
                }}
               >
                <h3>
                  <b>{truncateCharCount(blog.title,50)}</b>
                </h3>
                Created by <b>{localStorage.getItem('username')}</b> on {blog.date}
                <p className='ellipsis' style={{ marginTop: "5px" }}>{truncateCharCount(blog.contents,300)}</p>
                
                  {" "}
                  <Link to={{ pathname: `/blogs/single/${blog.id}` }}>
                    {" "}
                    <b>Read more...</b>
                  </Link>
               
              </div>
            );
          })}
        </div>
        {/* <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  
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
