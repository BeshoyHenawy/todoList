import { React, useState } from 'react'
import './App.css'
import TodoForm from './component/TodoForm'
import Todo from './component/Todo';

const App = () => {

  let [todos, setTodos] = useState([])
  const addTodo = (todo) => { setTodos([todo, ...todos]) }  //todo  >> addtodo >> onSubmit from FORM >> INPUT

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else { return todo; }
      })
    )
  }

  const handleDelete = (id) => { setTodos(todos.filter((todo) => todo.id !== id)) }
  const removeAllCompleteTodos =(id) => {setTodos(todos.filter((todo => !todo.complete )))}
  return (
    <div className='App' >
      <TodoForm onSubmit={addTodo} />

      {
        todos.map((todo) => (
          <Todo key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)} />
        ))
      }

      <button onClick={removeAllCompleteTodos}>Remove all complete task</button>
    </div>
  )
};

export default App;