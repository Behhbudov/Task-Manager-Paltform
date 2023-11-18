import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import alertify from "alertifyjs";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    organization: "",
    phone: "",
    address: "",
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (
      formData.password.length >= 6 &&
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)
    ) {
      localStorage.setItem("userObject", JSON.stringify(formData));

      navigate("/login");
      alertify.success("Signed up successfully!");
    } else {
      alertify.error(
        "Passwords should be with 6 and more alphanumeric characters"
      );
    }
  };

  return (
    <div className="signup__container">
      <form onSubmit={submitFormHandler}>
        <h3>Registration</h3>
        <input
          className="signup__input"
          type="text"
          name="organization"
          value={formData.organization}
          placeholder="Organization Name"
          onChange={handleInputChange}
        />
        <input
          className="signup__input"
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
        <input
          className="signup__input"
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address"
          onChange={handleInputChange}
        />
        <input
          className="signup__input"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          className="signup__input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          className="signup__input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
        />
        <Button blue>Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
