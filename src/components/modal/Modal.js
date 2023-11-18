import React from "react";
import Button from "../button/Button";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal__container">
        <form className="form__container" onSubmit={props.handleFormSubmit}>
          <h1>New Item</h1>
          <input
            className="modal__input"
            type="text"
            placeholder="Username"
            name="userName"
            onChange={props.handleInputChange}
          />
          <input
            className="modal__input"
            type="text"
            placeholder="Task"
            name="taskName"
            onChange={props.handleInputChange}
          />
          <textarea
            placeholder="Description"
            name="desc"
            onChange={props.handleInputChange}
          />
          <label>Deadline</label>
          <input
            className="modal__input"
            type="date"
            name="taskDate"
            onChange={props.handleInputChange}
          />
          <div className="btns">
            <Button onClose={props.onClose}>Cancel</Button>
            <Button blue type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
