import React from "react";
import Card from "../card/Card";
import "./InProgress.css";

const InProgress = (props) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    props.onDrop(e, "inProgress");
  };

  return (
    <div
      className="progress__container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="progress__container_header">
        <h5>In Progress</h5>
        <span>
          {props.tasks?.filter((task) => task.field === "inProgress").length ||
            0}
        </span>
      </div>
      {props.tasks?.map((task, index) => {
        if (task.field === "inProgress") {
          return (
            <Card
              index={index}
              key={task.id}
              id={task.id}
              task={task.task}
              desc={task.description}
              name={task.name}
              date={task.date}
              removeHandler={props.removeHandler} //Bura
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default InProgress;
