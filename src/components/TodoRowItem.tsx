import React from 'react';

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}> = (props) => {
  return (
    <tr
      onClick={() =>
        window.confirm('Are you sure you want to delete this row?')
          ? props.deleteTodo(props.rowNumber)
          : null
      }
    >
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
};
