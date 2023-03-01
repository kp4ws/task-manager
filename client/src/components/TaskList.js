import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getTasks } from "../actions/taskActions";
import Task from "./Task";

const TaskList = ({ tasks, getTasks }) => {

    useEffect(() => {
        getTasks();
    }, [getTasks]);
  
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task._id} task={task} />   
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

export default connect(mapStateToProps, {getTasks})(TaskList);