export default function TodoItem({ todo, onToggle, onEdit, onRemove }) {
  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={todo.completed ? 'todo-item__text is-completed' : 'todo-item__text'}
        >
          {todo.text}
        </span>
      </label>
      <div className="todo-item__actions">
        <button type="button" className="todo-item__button" onClick={() => onEdit(todo.id)}>
          수정
        </button>
        <button
          type="button"
          className="todo-item__button todo-item__button--danger"
          onClick={() => onRemove(todo.id)}
        >
          삭제
        </button>
      </div>
    </li>
  )
}
