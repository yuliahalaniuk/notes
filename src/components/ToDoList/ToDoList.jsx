import React from 'react';

const ToDoList = ({ todos, onDeleteTodo, todoLength, completedTodos }) => (
  <>
    <h1>Notes</h1>
    <div>
      <p>Total ToDo: {todoLength}</p>
      <p>Completed ToDo: {completedTodos}</p>
    </div>
    <ul>
      {todos.map(({ id, text, completed }, index) => (
        <li key={id}>
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export default ToDoList;
