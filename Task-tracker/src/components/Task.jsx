import React from "react";
import { Calendar, Bell, BellOff, Trash2 } from "lucide-react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task-card ${task.reminder ? "task-reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="task-content">
        <div className="task-info">
          <h3 className="task-title">{task.text}</h3>
          <div className="task-meta">
            <Calendar size={14} />
            <span>{task.day}</span>
            {task.reminder && (
              <div className="task-reminder-badge">
                <Bell size={14} />
                <span>Reminder set</span>
              </div>
            )}
          </div>
        </div>

        <div className="task-actions">
          <button
            onClick={() => onToggle(task.id)}
            className={`action-btn ${
              task.reminder ? "reminder-btn active" : "reminder-btn"
            }`}
            title={task.reminder ? "Remove reminder" : "Set reminder"}
          >
            {task.reminder ? <Bell size={16} /> : <BellOff size={16} />}
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="action-btn delete-btn"
            title="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
