import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo([])
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
      {console.log(todos)}
    </>
  );
};

export default Todo;
