import TodoItem from './TodoItem.jsx'

export default function TodoList({ todos, onToggle, onEdit, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}
