import React from "react";
import { connect } from "react-redux";
import { deleteTask, editTask } from "../actions/taskActions";

const Task = ({ task, deleteTask }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    deleteTask(task._id);
  };

  // //TODO
  // const handleUpdate = async (event) => {
  //   event.preventDefault();

  //   //TODO
  //   const updatetask = null;
  //   editTask(task._id, updatetask);
  // }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteTask })(Task);
