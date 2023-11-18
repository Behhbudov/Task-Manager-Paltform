import React from "react";
import Card from "../card/Card";
import "./ToDo.css";

const ToDo = (props) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    props.onDrop(e, "todo");
  };

  return (
    <div
      className="todo__container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="todo__container_header">
        <h5>To Do</h5>
        <span>
          {props.tasks?.filter((task) => task.field === "todo").length || 0}
        </span>
      </div>
      {props.tasks?.map((task, index) => {
        if (task.field === "todo") {
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

export default ToDo;
