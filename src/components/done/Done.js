import React from "react";
import Card from "../card/Card";
import "./Done.css";

const Done = (props) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    props.onDrop(e, "done");
  };

  return (
    <div
      className="done__container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="done__container_header">
        <h5>Done</h5>
        <span>
          {props.tasks?.filter((task) => task.field === "done").length || 0}
        </span>
      </div>
      {props.tasks?.map((task, index) => {
        if (task.field === "done") {
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

export default Done;
