import React, { useState } from "react";
import Task from "./Task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const editTask = (id, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Create your Todo-List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="What are your tasks for today?"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={editTask}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
