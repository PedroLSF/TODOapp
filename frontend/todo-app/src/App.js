import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the server when the component mounts
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:9000/api/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const response = await fetch("http://localhost:9000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const completeTodo = async (id) => {
    await fetch(`http://localhost:9000/api/todos/${id}`, {
      method: "PUT",
    });
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:9000/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
