import { React, useState } from "react";
import { navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../blogs/Navbar";

const Profile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [gender, setgender] = useState("");
  const [DateofBirth, setDateOfBirth] = useState("");

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

  const onChangeCity = (e) => {
    setcity(e.target.value);
  };

  const onChangeState = (e) => {
    setstate(e.target.value);
  };

  const onChangeCountry = (e) => {
    setcountry(e.target.value);
  };

  const onChangepostalCode = (e) => {
    setpostalCode(e.target.value);
  };

  const onChangeDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  const onChangeGender = (e) => {
    setgender(e.target.value);
  };

  function onSubmit() {
    axios
      .patch("http://localhost:3000/users/profile/2", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
        DateOfBirth: DateofBirth,
        gender: gender,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        window.alert("server error ....try again...!!!");
      });
    window.alert("update Successful...!!!");
  }

  return (
    <div className="container">
    <Navbar/>
    
    <div className="m-5 mt-1">
      <div className="border border-success p-5">
        <h3> Update User </h3>

        <label className="m-1 row">First Name : </label>
        <input
          type="text"
          value={firstName}
          onChange={onChangeFirstname}
          className="m-1 row form-control"
          placeholder="Enter first name"
          required
        ></input>

        <label className="m-1 row">Last Name : </label>
        <input
          type="text"
          value={lastName}
          onChange={onChangeLastname}
          className="m-1 row form-control"
          placeholder="Enter last name"
          required
        ></input>

        <label className="m-1 row">Email Id :</label>
        <input
          type="mail"
          value={email}
          onChange={onChangeEmail}
          className="m-1 row form-control"
          placeholder="Enter Mail Id  "
          required
        ></input>

        <label className="m-1 row">Password : </label>
        <input
          type="text"
          value={password}
          onChange={onChangePassword}
          className="m-1 row form-control"
          placeholder="Enter password here"
          required
        ></input>

        <label className="m-1 row">City : </label>
        <input
          type="text"
          value={city}
          onChange={onChangeCity}
          className="m-1 row form-control"
          placeholder="Enter city here"
          required
        ></input>

        <label className="m-1 row">State : </label>
        <input
          type="text"
          value={state}
          onChange={onChangeState}
          className="m-1 row form-control"
          placeholder="Enter state here"
          required
        ></input>

        <label className="m-1 row">Country : </label>
        <input
          type="text"
          value={country}
          onChange={onChangeCountry}
          className="m-1 row form-control"
          placeholder="Enter country here"
          required
        ></input>

        <label className="m-1 row">Postal Code : </label>
        <input
          type="text"
          value={postalCode}
          onChange={onChangepostalCode}
          className="m-1 row form-control"
          placeholder="Enter postal Code here"
          required
        ></input>

        <label className="m-1 row">Date of Birth : </label>
        <input
          type="text"
          value={DateofBirth}
          onChange={onChangeDateOfBirth}
          className="m-1 row form-control"
          placeholder="Enter Date of birth here"
          required
        ></input>

        <label className="m-1 row">Gender : </label>
        <input
          type="text"
          value={gender}
          onChange={onChangeGender}
          className="m-1 row form-control"
          placeholder="Enter Gender here"
          required
        ></input>

        <div className="text-center">
          <button
            className="row mt-2 btn btn-success row "
            onClick={onSubmit}
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
