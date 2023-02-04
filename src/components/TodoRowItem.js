function TodoRowItem(props) {
  //   const handleClick = () => {
  //     const confirm = window.confirm(
  //       "Are you sure you want to delete this row now ?"
  //     );
  //     if (confirm) {
  //       console.log("calling deleteTodo");
  //       props.deleteTodo(props.rowNumber);
  //     }
  //   };

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
