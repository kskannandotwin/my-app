export default function TaskList({ tasks, onToggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => onToggleTask(task.id)}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <span className="task-checkbox">{task.completed ? "✓" : "○"}</span>
          <span className="task-text">{task.text}</span>
        </li>
      ))}
    </ul>
  );
}
