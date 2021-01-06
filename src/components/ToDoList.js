import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';

function ToDoList() {
  let [text, setText] = useState('');
  let [todos, setToDo] = useState([]);
  let [cookies, setCookie] = useCookies(['react_todos']);
  let [handleCookie, setHandleCookie] = useState(false);

  function setTodoCookie(newTodo) {
    setCookie('react_todos', newTodo);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    let newTodo = { text: text, id: uuidv4() };
    setToDo([newTodo, ...todos]);
    setTodoCookie([newTodo, ...todos]);
    setText('');
  };

  const deleteToDo = (ToDoId) => {
    let toDoArray = todos;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === ToDoId) {
        toDoArray.splice(i, 1);
      }
    }
    setToDo([...toDoArray]);
    setTodoCookie([...toDoArray]);
  };

  useEffect(() => {
    if (handleCookie === false) {
      setToDo(cookies.react_todos || []);
      setHandleCookie(true);
    }
  }, [cookies.react_todos]);

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
