import React from "react";

function TodoItem({todo, todoToggleHandler, todoDeleteHandler}) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>

      <div className="item-btn">
      <button onClick={()=> todoToggleHandler(todo.id)}>
        {todo.isDone ? "취소" : "완료"}</button>
      <button onClick={()=> todoDeleteHandler(todo.id)}>삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;
