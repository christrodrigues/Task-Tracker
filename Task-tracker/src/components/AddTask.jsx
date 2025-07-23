import React, { useState } from "react";
import { Calendar, Clock, Bell, BellOff } from "lucide-react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("Please add a task");
      return;
    }

    const dateTime =
      day && time ? `${day} at ${time}` : day || time || "No date set";
    onAdd({ text: text.trim(), day: dateTime, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="add-task-form">
      <div className="form-group">
        <label className="form-label">Task Description</label>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            <Calendar size={16} className="label-icon" />
            Date
          </label>
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Clock size={16} className="label-icon" />
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      <div className="reminder-toggle">
        <div className="reminder-label">
          {reminder ? (
            <Bell size={18} className="reminder-icon active" />
          ) : (
            <BellOff size={18} className="reminder-icon" />
          )}
          <span>Set Reminder</span>
        </div>
        <button
          type="button"
          onClick={() => setReminder(!reminder)}
          className={`toggle-switch ${reminder ? "toggle-active" : ""}`}
        >
          <span className="toggle-slider"></span>
        </button>
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
