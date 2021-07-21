import React from "react";
import UserData from "./UserData";

export default function Form() {
  const [data, setData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    school: "",
    subject: "",
    country: "",
  });

  const [show, setShow] = React.useState(true);

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Here");
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="form">
      <h1>Create an account</h1>
      <p className="signin-link">
        Already have an account? <a href="/">Sign in</a>
      </p>
      <form onSubmit={handleSubmit}>
        {show && (
          <div>
            <div className="input-container">
              <label>Email address</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="input-container">
              <div className="group">
                <div className="col">
                  <label>First name</label>
                  <input type="text" name="fname" onChange={handleChange} />
                </div>
                <div className="col">
                  <label>Last name</label>
                  <input type="text" name="lname" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="input-container">
              <label>School</label>
              <input type="text" name="school" onChange={handleChange} />
            </div>
            <div className="input-container">
              <label>Subject</label>
              <input type="subject" name="subject" onChange={handleChange} />
            </div>
            <div className="input-container">
              <label>Country/Region</label>
              <input type="subject" name="country" onChange={handleChange} />
            </div>
          </div>
        )}
        {!show && <UserData {...data} />}
        <div className="info">
          <p>React Assignment 2, Form Submission:</p>
          <ul>
            <li>
              Ronit Kashyap, <span className="blue">20181CSE0599</span>
            </li>
            <li>
              This form accepts input from the user and uses{" "}
              <span className="blue">React.useState()</span> to store and
              display that data.
            </li>
          </ul>
        </div>
        <div className="submit">
          <button type="submit">{show ? "Submit Data" : "Reset Data"}</button>
        </div>
      </form>
    </div>
  );
}
