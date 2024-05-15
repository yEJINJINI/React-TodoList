import React from "react";

function TodoItem() {
  return (
    <div style={{
      maxWidth: "350px",
      maxHeight: "170px",
      border: "5px solid green",
      borderRadius: "10px",
      padding:"5px",

      display:"flex",
      flexDirection:"column"


    }}>
      <h2>title</h2>
      <p>내용</p>
      <button>삭제</button>
      <button>완료</button>
    </div>
  );
}

export default TodoItem;
