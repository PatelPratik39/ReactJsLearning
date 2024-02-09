import { useState } from "react";
import styles from './form.module.css';


const Form = ({todos, setTodos}) => {
  const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      setTodos([...todos, todo]);
      setTodo([]);
    }
    return (
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            value={todo}
            placeholder="Enter Todo Item.."
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    );
}
 
export default Form;