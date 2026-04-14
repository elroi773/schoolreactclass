import { useMemo, useState } from 'react'
import Header from './Header.jsx'
import TodoForm from './TodoForm.jsx'
import TodoSummary from './TodoSummary.jsx'
import TodoList from './TodoList.jsx'
import EmptyState from './EmptyState.jsx'
import './todo-list.css'

export default function TodoListApp() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  )

  const addTodo = (event) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    setTodos((prev) => [
      { id: Date.now(), text: trimmed, completed: false },
      ...prev,
    ])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    const target = todos.find((todo) => todo.id === id)
    if (!target) return

    const nextText = window.prompt('수정할 내용을 입력하세요', target.text)
    if (nextText === null) return

    const trimmed = nextText.trim()
    if (!trimmed) return

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo)),
    )

    class Todo{
      constructor(id, text, isCompleted){
        this.id = id 
        this.text = text
        this.isCompleted = isCompleted
      }
    }
  }


  return (
    <section className="todo-app">
      <Header />
      <TodoForm input={input} setInput={setInput} onSubmit={addTodo} />
      <TodoSummary totalCount={todos.length} completedCount={completedCount} />

      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onRemove={removeTodo}
        />
      )}
    </section>
  )
}
