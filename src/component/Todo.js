import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <div className='App' style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}
                onClick={props.toggleComplete}>{props.todo.text}
            </div>
            <button onClick={props.onDelete}>x</button>
        </div>
    )
}

export default Todo
