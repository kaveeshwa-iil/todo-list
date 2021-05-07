
import './App.css';
import Header from './Header';
import React, {useState} from 'react';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  return (
    <div className="todo-app">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
