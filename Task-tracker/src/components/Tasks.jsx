import React from "react";
import Task from "./Task";
import { Check } from "lucide-react";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <Check size={32} />
        </div>
        <h3 className="empty-title">All caught up!</h3>
        <p className="empty-text">
          No tasks to show. Add a new task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>

      <div className="tasks-summary">
        <p>
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"} •{" "}
          {tasks.filter((task) => task.reminder).length} with reminders
        </p>
      </div>
    </div>
  );
};

export default Tasks;
