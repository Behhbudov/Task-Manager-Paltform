import React from "react";
import Card from "../card/Card";
import "./InReview.css";

const InReview = (props) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    props.onDrop(e, "inReview");
  };

  return (
    <div
      className="review__container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="review__container_header">
        <h5>In Review</h5>
        <span>
          {props.tasks?.filter((task) => task.field === "inReview").length || 0}
        </span>
      </div>
      {props.tasks?.map((task, index) => {
        if (task.field === "inReview") {
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

export default InReview;
