import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await axios.post("/tasks", {title, description});
          console.log(response);
          setTitle('');
          setDescription('');
        } catch(error) {
          console.log(error);
        }
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
          <textarea value={description} onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button type='submit'>Create Task</button>
      </form>
    );
};

export default TaskForm;