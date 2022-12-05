import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./blogs/Navbar";
import Blog from "./blogs/Blog";

const Home = () => {
  return (
    <div>
    
  <Link to={'/users/login'}>Login</Link>
    </div>
    
  );
};

export default Home;
