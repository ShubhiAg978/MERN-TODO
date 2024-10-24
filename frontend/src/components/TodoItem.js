import React, { useState } from "react";
import {
  IconButton,
  ListItemText,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleToggle = () => {
    updateTodo(todo._id, { ...todo, completed: !todo.completed });
  };

  const handleEditOpen = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSubmit = () => {
    updateTodo(todo._id, { ...todo, task: editedTask });
    setIsEditing(false);
  };

  return (
    <>
      <Checkbox checked={todo.completed} onChange={handleToggle} />
      <ListItemText
        primary={todo.task}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      />
      <IconButton aria-label="edit" onClick={handleEditOpen}>
        <Edit />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => deleteTodo(todo._id)}>
        <Delete />
      </IconButton>

      {/* Dialog for Editing Task */}
      <Dialog open={isEditing} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            value={editedTask}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoItem;
