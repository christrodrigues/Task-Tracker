import React from "react";
import { Plus, X } from "lucide-react";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <div className="header-modern">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Task Manager</h1>
          <p className="header-subtitle">Stay organized and productive</p>
        </div>
        <button
          onClick={onAdd}
          className={`header-btn ${
            showAddTask ? "header-btn-close" : "header-btn-add"
          }`}
        >
          {showAddTask ? <X size={18} /> : <Plus size={18} />}
          {showAddTask ? "Cancel" : "Add Task"}
        </button>
      </div>
    </div>
  );
};

export default Header;
