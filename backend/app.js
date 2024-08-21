const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

let todos = [];

// Rota para listar todos os TODOs
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Rota para criar um TODO
app.post("/api/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Rota para marcar um TODO como concluído
app.put("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);
  if (todo) {
    todo.completed = true;
    res.json(todo);
  } else {
    res.status(404).send("TODO not found");
  }
});

// Rota para deletar um TODO
app.delete("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== todoId);
  res.status(204).send();
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
