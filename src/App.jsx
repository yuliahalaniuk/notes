import ToDoList from './components/ToDoList';
import Form from './components/Form';
import React, { Component } from 'react';
import CheckboxList from './components/CheckboxList';

class App extends Component {
  state = {
    todos: [
      { id: 4, text: 'Learn guitar', completed: false },
      { id: 3, text: 'Do scales', completed: false },
      { id: 6, text: 'Read Hooked', completed: false },
      { id: 10, text: 'Do react hw', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log('data', data);
  };

  render() {
    const { todos } = this.state;

    const todoLength = todos.length;
    const completedTodos = todos.reduce(
      (acc, todos) => (todos.completed ? acc + 1 : acc),
      0
    );

    // const completedTodos = todos.filter(todo => todo.completed).length;

    return (
      <>
        <ToDoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          todoLength={todoLength}
          completedTodos={completedTodos}
        ></ToDoList>
        <Form onSubmitEvent={this.formSubmitHandler}></Form>
        <CheckboxList></CheckboxList>
      </>
    );
  }
}

export default App;
