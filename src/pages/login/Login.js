import React, { useState } from "react";
import Button from "../../components/button/Button";
import alertify from "alertifyjs";
import "./Login.css";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const userObject = JSON.parse(localStorage.getItem("userObject"));

    if (
      userObject.email === loginForm.email &&
      userObject.password === loginForm.password
    ) {
      props.onLogin();
      localStorage.setItem("user", JSON.stringify(loginForm));
      alertify.success("Logged in successfully!");
    } else {
      alertify.error("This user doesn't exit!");
      return;
    }
  };

  return (
    <div className="login__container">
      <form onSubmit={submitFormHandler}>
        <h3>Login</h3>
        <input
          className="login__input"
          type="email"
          name="email"
          value={loginForm.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          value={loginForm.password}
          placeholder="Password"
          onChange={handleInputChange}
        />
        <Button blue>Login</Button>
      </form>
    </div>
  );
};

export default Login;
