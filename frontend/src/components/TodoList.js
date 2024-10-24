import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Container, Typography, List, ListItem, Paper } from "@mui/material";

const TodoList = () => {
  const server = "http://localhost:5050";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get(`${server}/api/todos`);
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  const addTodo = async (task) => {
    const res = await axios.post(`${server}/api/todos`, { task });
    setTodos([...todos, res.data]);
  };

  const updateTodo = async (id, updatedTodo) => {
    const res = await axios.patch(`${server}/api/todos/${id}`, updatedTodo);
    setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${server}/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom align="center">
        To-Do List
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <TodoForm addTodo={addTodo} />
      </Paper>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo._id}>
            <TodoItem
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
