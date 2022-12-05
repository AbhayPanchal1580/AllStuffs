import "./App.css";
// import "./action.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/users/Login";
import Signup from "./components/users/Signup";
import Profile from "./components/users/Profile";
import Blogs from "./components/blogs/Blog";
import CreateBlog from "./components/blogs/CreateBlog";
import Single from "./components/blogs/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/users/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/signup" element={<Signup />}></Route>
        <Route path="/users/profile" element={<Profile />}></Route>
        <Route path="/blogs/getAllBlogs" element={<Blogs />}></Route>
        <Route path="/blogs/createBlog" element={<CreateBlog />}></Route>
        <Route path="/blogs/single/:id" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
