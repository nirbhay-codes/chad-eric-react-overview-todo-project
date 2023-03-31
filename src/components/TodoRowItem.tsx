import React from "react";

function TodoRowItem(props: {
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}) {
  return (
    <tr
      onClick={() =>
        window.confirm("Are you sure you want to delete this row?")
          ? props.deleteTodo(props.rowNumber)
          : null
      }
    >
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
