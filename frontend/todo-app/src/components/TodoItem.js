import React from "react";

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button onClick={() => onComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
