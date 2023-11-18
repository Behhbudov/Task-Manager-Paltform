import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import ToDo from "../todo/ToDo";
import InProgress from "../inprogress/InProgress";
import InReview from "../inreview/InReview";
import Done from "../done/Done";
import "./MainBody.css";

const TASKS = [
  {
    id: 1,
    task: "Task Manager",
    name: "Murad Behbudov",
    date: "Nov 18",
    field: "todo",
  },
];

const MainBody = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [showModal, setShowModal] = useState(false);
  const [taskField, setTaskField] = useState("todo");
  const [formData, setFormData] = useState({
    userName: "",
    taskName: "",
    desc: "",
    taskDate: "",
  });

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    } else if (localStorage.getItem("updatedTasks")) {
      setTasks(JSON.parse(localStorage.getItem("updatedTasks")));
    } else {
      setTasks([...tasks]);
    }
  }, []);

  const handleDragDrop = (e, targetField) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskId) {
        return { ...task, field: targetField };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const showModalHandler = (e) => {
    setShowModal(true);
  };

  const closeModalHandler = (e) => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.taskName.trim() === "" ||
      formData.userName.trim() === "" ||
      formData.desc.trim() === "" ||
      taskField === "" ||
      formData.taskDate === ""
    ) {
      return;
    }

    const newTaskItem = {
      id: Date.now(),
      task: formData.taskName,
      name: formData.userName,
      description: formData.desc,
      field: taskField,
      date: new Date(formData.taskDate).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
    };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTaskItem]));
    setTasks(JSON.parse(localStorage.getItem("tasks")));

    setFormData({
      userName: "",
      taskName: "",
      desc: "",
      taskDate: "",
    });
    setTaskField("todo");

    setShowModal(false);
  };

  const removeHandler = (index) => {
    let updatedTasks;

    if (localStorage.getItem("tasks")) {
      updatedTasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
      updatedTasks = JSON.parse(localStorage.getItem("updatedTasks"));
    }
    updatedTasks.splice(index, 1);

    localStorage.removeItem("tasks");
    localStorage.setItem("updatedTasks", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);
  };

  return (
    <>
      {showModal && (
        <Modal
          onShown={showModalHandler}
          onClose={closeModalHandler}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          tasks={tasks}
        />
      )}
      <div className="main__body_container">
        <div>
          <div className="main__body_actions">
            <div>
              <Button
                blue
                onShown={showModalHandler}
                onClose={closeModalHandler}
              >
                New Item
              </Button>
            </div>
          </div>
          <div className="main__body_lists">
            <ToDo
              removeHandler={removeHandler}
              tasks={tasks}
              onDrop={handleDragDrop}
            />
            <InProgress
              removeHandler={removeHandler}
              tasks={tasks}
              onDrop={handleDragDrop}
            />
            <InReview
              removeHandler={removeHandler}
              tasks={tasks}
              onDrop={handleDragDrop}
            />
            <Done
              removeHandler={removeHandler}
              tasks={tasks}
              onDrop={handleDragDrop}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
