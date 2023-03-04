import axios from "axios";
import { ADD_TASK, EDIT_TASK, DELETE_TASK, GET_TASKS } from "../actiontypes/actiontypes";

export const addTask = (task) => async (dispatch) => {
  console.log("Add");
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

//TODO not tested
export const editTask = (taskID, updatedTask) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/tasks/${task}`, updatedTask);
    const updatedTask = res.data;
    dispatch({
      type: EDIT_TASK,
      payload: updatedTask,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (taskID) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${taskID}`);
    dispatch({
      type: DELETE_TASK,
      payload: taskID,
    });
  } catch(error) {
    console.log(error);
  }
};

export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/tasks');
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};