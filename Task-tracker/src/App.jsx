import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 6th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setShowAddTask(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="main-card">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        {showAddTask && <AddTask onAdd={addTask} />}

        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      </div>
    </div>
  );
}

export default App;
