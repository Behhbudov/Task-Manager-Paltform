import React from "react";
import "./Button.css";

const index = (props) => {
  return (
    <button
      type={props.type}
      className={props.blue ? "button__blue" : "button__gray"}
      onClick={props.blue ? props.onShown : props.onClose}
    >
      {props.children}
    </button>
  );
};

export default index;
