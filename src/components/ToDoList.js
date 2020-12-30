import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
  let [text, setText] = useState('');
  let [todos, setToDo] = useState([]);

  const handleChange = (e) => {
    setText((text = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    let newTodo = { text: text, id: uuidv4() };
    setToDo((todos = [newTodo, ...todos]));
    setText((text = ''));
  };

  const deleteToDo = (ToDoId) => {
    let toDoArray = todos;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === ToDoId) {
        toDoArray.splice(i, 1);
        return toDoArray;
      }
    }
    setToDo(todos = toDoArray);
  };

  return (
    <>
      <form className="field">
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            value={text}
            onChange={(e) => handleChange(e)}
            placeholder="Add ToDo"
          />
          <button
            type="submit"
            className="button is-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </div>
      </form>
      {todos.map((todo) => (
        <div className="notification is-primary" key={todo.id}>
          <button
            className="delete"
            onClick={() => deleteToDo(todo.id)}
          ></button>
          {todo.text}
        </div>
      ))}
    </>
  );
}

export default ToDoList;
