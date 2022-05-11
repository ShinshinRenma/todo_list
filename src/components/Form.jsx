import React from 'react'
import { useState } from 'react';


const Form = (props) => {
    const defaulttask = {
        taskname: "",
        isDone: false
    };
    
    const [taskProperties, setTaskProperties] = useState(defaulttask);

    const createTask = (e)=> {
        e.preventDefault();
        const newArray = [...props.todos, taskProperties];
        props.setTodos(newArray);
        setTaskProperties(defaulttask);
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setTaskProperties({...taskProperties, [name]: value})
    }

    
    return (
        <div>
            <form onSubmit={createTask}>
                <div>
                    <input name="taskname" type="text" onInput={ (e) => onInputChange(e) } value={taskProperties.taskname} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form