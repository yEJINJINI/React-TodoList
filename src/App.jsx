import React, { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';


const App = () => {
  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");
  const [ todoList, setTodoList ] =  useState([]);

  const onSubmitHandler = ()=>{
    //console.log(title, content)
    //title과 content가 다 입력된 경우의 조건문
    if (title && content) {
      const newTodoList = {
        id: Date.now(), title, content, isDone:false
      };
      setTodoList([...todoList, newTodoList]);
      setTitle("");
      setContent("");
    }
  };

  const todoToggleHandler = (id) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? {...todo, isDone:!todo.isDone} : todo
    ));
  };

  const todoDeleteHandler = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  

  return (
    <div className="site">
      {/* 할 일 입력, 추가버튼 */}
      <div className="input-form">
        <input type='text' placeholder='제목'
        onChange={(event) => {setTitle(event.target.value)}} value={title}/>

        <input type='text' placeholder='내용'
        onChange={(event) => {setContent(event.target.value)}} value={content}/>

        <button onClick={onSubmitHandler}>추가하기</button>
        </div>

        <TodoList todoList={todoList}
        todoToggleHandler ={todoToggleHandler}
        todoDeleteHandler ={todoDeleteHandler}/>
    </div>
  );
}

export default App;
