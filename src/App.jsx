import { useState } from "react";
import "./index.css";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  const toggleTodo = (idx) => {
    const newTodos = [...todos];
    newTodos[idx].done = !newTodos[idx].done;
    setTodos(newTodos);
  };

  const removeTodo = (idx) => {
    const confirmed = window.confirm("정말 삭제할까요?");
    if (!confirmed) return;

    const newTodos = todos.filter((_, i) => i !== idx);
    setTodos(newTodos);
  };

  const clearAll = () => {
    const confirmed = window.confirm("정말 모든 할 일을 삭제할까요?");
    if (!confirmed) return;
    setTodos([]);
  };

  const clearDone = () => {
    const confirmed = window.confirm("완료된 항목을 모두 삭제할까요?");
    if (!confirmed) return;

    const filtered = todos.filter((todo) => !todo.done);
    setTodos(filtered);
  };

  return (
    <div className="app">
      <h1>나의 To Do 리스트</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="add-btn" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(idx)}
              />
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  color: todo.done ? "#999" : "#000",
                  marginRight: "1rem",
                }}
              >
                {todo.text}
              </span>
            </label>
            <button className="delete-btn" onClick={() => removeTodo(idx)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button className="clear-btn" onClick={clearAll}>
            모두 삭제
          </button>
          <button className="clear-btn" onClick={clearDone}>
            완료된 항목 삭제
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
