import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleDragStart = (e) => {
    console.log("Startedd");
    e.dataTransfer.setData("taskId", props.id.toString());
  };

  const handleDragOver = (e) => {
    console.log("Finished");
    e.preventDefault();
  };

  return (
    <div
      className="card__container"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <div className="card__container_info">
        <h4>
          {props.task}
          <span onClick={() => props.removeHandler(props.index)}>&times;</span>
        </h4>
        {props.desc && <p>{props.desc}</p>}
        <h3>{props.name}</h3>
      </div>
      <div className="card__container_report">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z"
              fill="#1D2D35"
            />
          </svg>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
