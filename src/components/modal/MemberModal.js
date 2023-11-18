import React from "react";
import Button from "../button/Button";
import "./MemberModal.css";

const MemberModal = (props) => {
  return (
    <div className="member__modal_container">
      <form className="form__container" onSubmit={props.submitFormHandler}>
        <h1>New Member</h1>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          onChange={(e) => props.nameHandler(e)}
        />
        <input
          className="modal__input"
          type="file"
          placeholder="Task"
          onChange={(e) => props.imageHandler(e)}
        />
        <div className="btns">
          <Button onClose={props.onClose}>Cancel</Button>
          <Button blue type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MemberModal;
