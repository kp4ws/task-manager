import React from 'react';

const Task = ({task}) => {
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default Task;