import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer1 from "./Footer1";



const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer1 completedTodos={completedTodos}  totalTodos = {totalTodos}/>
    </div>
  );
};

export default Todo;
