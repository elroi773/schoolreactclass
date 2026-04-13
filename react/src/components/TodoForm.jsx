export default function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        className="todo-form__input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="todo-form__button" type="submit">
        추가
      </button>
    </form>
  )
}
