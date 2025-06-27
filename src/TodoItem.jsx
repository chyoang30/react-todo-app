function TodoItem({ text, onRemove }) {
  return <li onClick={onRemove}>{text}</li>;
}

export default TodoItem;
