import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./blogs/Navbar";
import Blog from "./blogs/Blog";

const Home = () => {
  return (
    <div>
      <Blog />
    </div>
    
  );
};

export default Home;
