import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setuserEmail(e.target.value);
  };

  const onChangeupassword = (e) => {
    setuserPassword(e.target.value);
  };

  const onSubmit = () => {
    
    axios
      .post("http://localhost:3000/users/login", {
        email: userEmail,
        password: userPassword,
      })
      
      .then((response) => {
        const data = response.data;
    console.log(data);

      

        //export the fname to blogs pages.
        window.alert("Login Successful ...!!!");
        navigate("/#");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Login Failed...!!!");
      });
  };

  return (
    <div className="container" style={{ padding: "100px", maxWidth: "50%" }}>
      <div className="m-5 mt-1" style={{ textAlign: "center" }}>
        <div className="border border-success p-5">
          <h3>Login </h3>
          <label className="m-1 row">Email : </label>
          <input
            type="email"
            value={userEmail}
            onChange={onChangeEmail}
            className="m-1 row form-control"
            placeholder="Email"
            required
          ></input>
          <label className="m-1 row">Password :</label>
          <input
            type="password"
            value={userPassword}
            onChange={onChangeupassword}
            className="m-1 row form-control"
            placeholder="Password  "
            required
          ></input>
          <div className="text-center">
            <button
              className="row mt-2 btn btn-success row "
              onClick={onSubmit}
              type="submit"
            >
              Login
            </button>
          </div>
          <h6 className="mt-3">
            Don't have account? <Link to="/users/signup"> Sign Up</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
