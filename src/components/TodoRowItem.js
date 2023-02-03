function TodoRowItem(props) {

    return (
        <tr>
            <th scope='row'>{props.todo.rowNumber}</th>
            <td>{props.todo.rowDescription}</td>
            <td>{props.todo.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem