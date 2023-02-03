import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User One",
    },
  ]);

  const addTodo = () => {
    const newTodo = {
      rowNumber: 1,
      rowDescription: "Feed puppy",
      rowAssigned: "User One",
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? "Close" : "Add Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
