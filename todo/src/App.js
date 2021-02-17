import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List:</h1>
      </div>
      <TodoList tasks={state} dispatch={dispatch} />
      <div className="inputField">
        <TodoForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
