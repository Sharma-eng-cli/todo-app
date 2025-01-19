import React, { useState } from "react";
import "./App.css";

const Task = ({ task, onEdit, onComplete, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing && newName.trim()) {
      onEdit(task.id, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <span>{task.name}</span>
      )}
      <button className="edit-btn" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="complete-btn"
        onClick={() => onComplete(task.id)}
        disabled={task.completed}
      >
        Complete
      </button>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
