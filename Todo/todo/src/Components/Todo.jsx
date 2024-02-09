import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  // const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // function handleSubmit(e){
  //   e.preventDefault();
  //   setTodos([...todos,todo]);
  //   setTodo([])
  // }
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form> */}
      {/* {todos.map((item) => (
        <TodoItem key={item} item={item}/>
      ))} */}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
