import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const task = {
      title,
      description,
    };

    addTask(task);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default connect(null, { addTask })(TaskForm);
