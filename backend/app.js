const express = require("express");
const { createClient } = require("redis");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Conectando ao Redis
const client = createClient({
  url: "redis://redis:6379",
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

(async () => {
  try {
    await client.connect();
    console.log("Connected to Redis successfully");
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
})();

const loadTodos = async () => {
  try {
    const data = await client.get("todos");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error loading todos from Redis:", err);
    return [];
  }
};

const saveTodos = async (todos) => {
  try {
    await client.set("todos", JSON.stringify(todos));
  } catch (err) {
    console.error("Error saving todos to Redis:", err);
  }
};

// Inicializa os todos
let todos = [];
(async () => {
  todos = await loadTodos();
})();

console.log("@@@", todos);

// Rota para listar todos os TODOs
app.get("/api/todos", async (req, res) => {
  const data = await loadTodos();
  res.json(data);
});

// Rota para criar um TODO
app.post("/api/todos", async (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(todo);
  await saveTodos(todos);
  res.status(201).json(todo);
});

// Rota para marcar um TODO como concluído
app.put("/api/todos/:id", async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);
  if (todo) {
    todo.completed = true;
    await saveTodos(todos);
    res.json(todo);
  } else {
    res.status(404).send("TODO not found");
  }
});

// Rota para deletar um TODO
app.delete("/api/todos/:id", async (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== todoId);
  await saveTodos(todos);
  res.status(204).send();
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
