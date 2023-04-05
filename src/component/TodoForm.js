import { React, useState } from 'react';
import '.././App.css';
import shortid from 'shortid';

const TodoForm = (props) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false,

        })
        setText('')
    }
    const handleChange = (e) => { setText(e.target.value) }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={text} />
            <button onClick={handleSubmit}>Add todo</button>
        </form>
    )
}

export default TodoForm
