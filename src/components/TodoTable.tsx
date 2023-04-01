import React from 'react';
import { TodoRowItem } from './TodoRowItem';
//import TodoModel from "./TodoRowItem";

export const TodoTable: React.FC<{
  todos: TodoModel[];
  deleteTodo: Function;
}> = (props) => {
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
};
