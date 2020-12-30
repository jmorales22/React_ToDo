import React, { useState } from 'react';

function ToDoList() {
  let [text, setText] = useState('');
  let [todos, setToDo] = useState([]);

  const handleChange = (e) => {
    setText((text = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo(todos.push({ text }));
    text = '';
  };

  console.log('this is todos', todos);

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
      {/* <div className="notification is-primary">
        <button className="delete"></button>
        {text}
      </div> */}
    </>
  );
}

export default ToDoList;
