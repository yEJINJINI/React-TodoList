import React from "react";
import TodoItem from "./TodoItem";

const TodoList=({todoList, todoToggleHandler, todoDeleteHandler}) => {
  return (
    <>
    <h1>Working!</h1>
    <div className="working-done">
      
      {todoList.filter(todo => !todo.isDone).map(todo =>(
        <TodoItem
        key={todo.id} // 각 TodoItem 컴포넌트에 고유한 키를 부여하여 효율적인 리스트 렌더링을 지원
        todo={todo}
        todoToggleHandler={todoToggleHandler}
        todoDeleteHandler={todoDeleteHandler}
        />
      ))}
      </div>
      <hr/>
    <h1>Done!</h1>
    <div className="working-done"> 
      {todoList.filter(todo => todo.isDone).map(todo =>(
        <TodoItem
        key={todo.id}
        todo={todo}
        todoToggleHandler={todoToggleHandler}
        todoDeleteHandler={todoDeleteHandler}
        />
      ))}
    </div>
    </>
  );
}

export default TodoList;
