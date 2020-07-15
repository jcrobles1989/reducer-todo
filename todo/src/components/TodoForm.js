import React, { useState } from "react";

const TodoForm = (props) => {

    const [newTask, setNewTask] = useState("");

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="todoForm">
            <form onSubmit={handleSubmit}> 
                <input type="text" name="newTask" value={newTask} onChange={handleChanges} placeholder="...todo" />
            </form>
            <button onClick={() => props.dispatch({ type: "ADD_TASK", payload: newTask })}>Add Todo</button>
            <button onClick={() => props.dispatch({ type: "REMOVE_TASK" })}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;