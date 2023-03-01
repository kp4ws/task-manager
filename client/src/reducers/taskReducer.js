import {ADD_TASK, EDIT_TASK, DELETE_TASK, GET_TASKS} from '../actiontypes/actiontypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
