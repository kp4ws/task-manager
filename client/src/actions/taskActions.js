import axios from "axios";
import { ADD_TASK, EDIT_TASK, DELETE_TASK, GET_TASKS } from "../actiontypes/actiontypes";

export const addTask = (task) => async (dispatch) => {
  try {
    const res = await axios.post("/api/tasks", task);
    const newTask = res.data;
    dispatch({
      type: ADD_TASK,
      payload: newTask,
    });
  } catch (error) {
    console.log(error);
  }
};

//TODO: editTask

//TODO: deleteTask

export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/tasks");
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};