import { useState, useRef, useEffect } from "react";
import "./TaskManager.css";

export default function TaskForm({ onAddTask }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskText = value.trim();
    if (!taskText) return;

    onAddTask(taskText);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
      aria-label="Add task form"
    >
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add a task"
        className="task-input"
        aria-label="Task description"
        value={value}
      />
      <button type="submit" className="add-task-btn" aria-label="Add task">
        Add Task
      </button>
    </form>
  );
}
