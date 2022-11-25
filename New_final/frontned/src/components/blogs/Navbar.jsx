import React from "react";
import "./Navbar.css";

const Navbar = () => {
  
  return (
    <div className="container">
      <div style={{ textAlign: "end"}}>
        <div class="dropdown">
          <button class="dropbtn">Welcome</button>
          <div class="dropdown-content">
            <a href="/blogs/createBlog">Create Blog</a>
            <a href="/blogs/getAllBlogs">Display all blogs</a>
            <a href="/users/profile">Profile</a>
            <a href="/users/login">Logout</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h3 style={{ textAlign: "center", color: "red" }}>My blogs</h3>

          <p style={{ textAlign: "center", color: "orange" }}>
            This is demo application
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
