//Import React libary
//Import useEffect -> a hook that allows us to perform side effects
//Import useState -> a hook that allows us to manage state
//Import axios -> library that allows us to make HTTP requests (alternative is fetch)
//Import Task -> component that we'll render for each task
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Task from "./Task";

//Define our TaskList as a functional component
const TaskList = () => {
    //Use useState hook to create a state variable called 'tasks'
    //Initialize it to an empty array
    const [tasks, setTasks] = useState([]);

    //Use useEffect hook to fetch tasks from backend API when component is mounted
    useEffect(() => {
        //Async function that uses axios to make a GET request to '/api/tasks'
        const fetchTasks = async () => {
            try {
              const response = await axios.get("/api/tasks");
              //Update the tasks state variable with response data
              setTasks(response.data);
            } catch(error) {
                console.log(`Error getting tasks: ${error}`);
            }
        };
  
        fetchTasks();
    }, []);
  
    //Finally, render the task list by mapping over 'tasks' array
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task._id} task={task} />   
            ))}
        </div>
    );
};

export default TaskList;