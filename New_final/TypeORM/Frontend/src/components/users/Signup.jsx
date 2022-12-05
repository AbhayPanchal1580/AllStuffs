import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// alter table users alter gender set default '';

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();

  const onChangeFirstname = (e) => {
    setfirstName(e.target.value);
  };

  const onChangeLastname = (e) => {
    setlastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };

  const onChangePassword = (e) => {
    setpassword(e.target.value);
  };

  const onChangeConfirmpassword = (e) => {
    setConfirmpassword(e.target.value);
  };

  function onSubmit() {
    if (password === confirmPassword) {
      axios
        .post("http://localhost:3000/users/signup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          window.alert("Registration Successful...!!!");
          navigate("/users/login");
        })
        .catch((error) => {
          console.log(error);
          window.alert("server error...!!!");
        });
    } else {
      window.alert("Enter the same Password...!!!");
    }
  }

  return (
    <div className="container" style={{ padding: "100px", maxWidth: "60%" }}>
      <div className="m-5 mt-1" style={{ textAlign: "center" }}>
        <div className="border border-success p-5">
          <h3> Signup </h3>

          <label className="m-1 row">First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onChangeFirstname}
            className="m-1 row form-control"
            placeholder="Your First Name"
            required
          ></input>

          <label className="m-1 row">Last Name : </label>
          <input
            type="text"
            value={lastName}
            onChange={onChangeLastname}
            className="m-1 row form-control"
            placeholder="Your Last Name"
            required
          ></input>

          <label className="m-1 row">Email :</label>
          <input
            type="mail"
            value={email}
            onChange={onChangeEmail}
            className="m-1 row form-control"
            placeholder="Your Email  "
            required
          ></input>

          <label className="m-1 row">Password : </label>
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="m-1 row form-control"
            placeholder="Password"
            required
          ></input>

          <label className="m-1 row">Confirm Password : </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={onChangeConfirmpassword}
            className="m-1 row form-control"
            placeholder="Confirm Password"
            required
          ></input>

          <div className="text-center">
            <button
              className="row mt-3 btn btn-success row "
              onClick={onSubmit}
              type="submit"
            >
              Register
            </button>
            <h6 className="mt-3">
              Already have an account? <Link to="/users/login"> Sign in?</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
