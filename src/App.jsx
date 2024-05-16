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
    } else{ //하나라도 입력되지 않았을 경우 alert 창 띄우기
      alert("빈칸을 모두 채워주세요.")
    }
  };
  //할일 항목의 완료 상태를 토글하는 함수, id=토글할 할일(완료로 바꿀)
  //배열을 순회하면서 각 항목(todo)에 대한 새로운 배열을 생성함
  //
  const todoToggleHandler = (id) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? {...todo, isDone:!todo.isDone} : todo
    ));
  };
  //특정 할일 항목을 삭제하는 함수, id=삭제할 할일
  //배열을 순회하면서 각 항목(todo)에 대한 새로운 배열을 생성함
  //현재 항목의 id가 삭제할 항목의 id와 일치하지 않은 항목들만 새로운 배열에 포함 
  const todoDeleteHandler = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  

  return (
    <div className="site">
      <h1 className='head-title'>[ Yejin: TodoList ]</h1>
      {/* 할 일 입력, 추가버튼 */}
      <div className="top-form">
        <div className='input-form'>
          <input type='text' placeholder='제목'
          onChange={(event) => {setTitle(event.target.value)}} value={title}/>

          <input type='text' placeholder='내용'
          onChange={(event) => {setContent(event.target.value)}} value={content}/>
        </div>
        
        <div>
          <button className='add-btn' 
          onClick={onSubmitHandler}>추가하기</button>
        </div>
      </div>

        <TodoList todoList={todoList}
        todoToggleHandler ={todoToggleHandler}
        todoDeleteHandler ={todoDeleteHandler}/>
    </div>
  );
}

export default App;
