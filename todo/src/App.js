import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(function (t) {
      return t.id !== id;
    });

    setTasks(updatedTasks);
  }

  // Mark complete
  function toggleTask(id) {
    const updatedTasks = tasks.map(function (t) {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKey}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map(function (t) {
          return (
            <li key={t.id} className={t.completed ? "done" : ""}>
              <span onClick={() => toggleTask(t.id)}>
                {t.text}
              </span>

              <button onClick={() => deleteTask(t.id)}>
                ×
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;