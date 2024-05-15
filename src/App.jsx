import React from 'react';
import { useState } from 'react'
import TodoBoard from './components/TodoBoard';

const App = () => {
  const [ inputTitle, setInputTitle ] = useState("");
  const [ inputContent, setInputContent ] = useState("");
  const [ todoList, setTodoList ] =  useState([]);

  const onSubmitHandler = ()=>{
    //console.log(inputTitle, inputContent)
    setTodoList([...todoList, inputTitle, inputContent])
  }
  

  return (
    <div style={{
      maxWidth:"1200px",
      minHeight:"800px",
      display : "flex",
      flexDirection: "column",
      
    }}>
      {/* 할 일 입력, 추가버튼 */}
        <input type='text' placeholder='제목'
        onChange={(event) => {setInputTitle(event.target.value)}} value={inputTitle}/>

        <input type='text' placeholder='내용'
        onChange={(event) => {setInputContent(event.target.value)}} value={inputContent}/>

        <button onClick={onSubmitHandler}>추가하기</button>

        <TodoBoard/>
    </div>
  );
}

export default App;
