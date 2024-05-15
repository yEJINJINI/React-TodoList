import React from "react";
import TodoItem from "./TodoItem";

const TodoList=({todoList, todoToggleHandler, todoDeleteHandler}) => {
  return (
    <>
    <div className="working">
      <h1>Working!</h1>
      {todoList.filter(todo => !todo.isDone).map(todo =>(
        <TodoItem
        key={todo.id}
        todo={todo}
        todoToggleHandler={todoToggleHandler}
        todoDeleteHandler={todoDeleteHandler}
        />
      ))}
      </div>
    <div className="Done">
      <h1>Done!</h1>
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
