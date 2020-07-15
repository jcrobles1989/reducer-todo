import React from "react";
import Todo from "./Todo";
import "../Todo.css";

const TodoList = (props) => {

  return (
    <div className="tasks-list">
      {props.tasks.map((item) => (
        <Todo key={item.id} task={item} dispatch={props.dispatch}/>
      ))}
    </div>
  );
};

export default TodoList;
