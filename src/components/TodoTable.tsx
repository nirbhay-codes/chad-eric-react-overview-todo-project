import React from "react";
import TodoRowItem from "./TodoRowItem";
import TodoModel from "./TodoRowItem";

function TodoTable(props: { todos: TodoModel[]; deleteTodo: Function }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowAssigned={todo.rowAssigned}
            rowDescription={todo.rowDescription}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
