export default function TodoSummary({ totalCount, completedCount }) {
  return (
    <p className="todo-summary">
      전체 {totalCount}개 / 완료 {completedCount}개
    </p>
  )
}
