import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const current = new Date();
const newDate= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState("");
  // const [date, setDate] = useState("");

  const navigate = useNavigate();

  const current = new Date();
const date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onChangeTags = (e) => {
    setTags(e.target.value);
  };

  function onSubmit() {
    axios
      .post("http://localhost:3000/blogs", {
        title: title,
        contents: contents,
        tags: tags,
        date :date
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.alert("Blogs created Successfully...!!!");
        navigate("/blogs/getAllBlogs");
      })
      .catch((error) => {
        console.log(error);
        window.alert("server error...!!!");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: "50px", maxWidth: "80%" }}>
      <div className="m-5 mt-1" style={{ textAlign: "center" }}>
        <div className="p-5">
          <h3> Create Blog Page </h3>

          <label className="m-1 row mt-3 font-weight-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            className="m-1 row form-control"
            required
          ></input>

          <label className="m-1 row mt-3 font-weight-bold">Contents</label>
          <textarea
            
            value={contents}
            onChange={onChangeContents}
            className="m-1 row form-control"
            required
            rows={10}
          ></textarea>

          <label className="m-1 row mt-3 font-weight-bold">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={onChangeTags}
            className="m-1 row form-control"
            required
          ></input>

          <div className="text-center">
            <button
              className="row mt-2 btn btn-success row "
              onClick={onSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateBlog;
