import { useState } from "react";
import styles from './form.module.css';


const Form = ({todos, setTodos}) => {

  const [todo, setTodo] = useState({name:'', done: false});

    function handleSubmit(e) {
      e.preventDefault();
      setTodos([...todos, todo]);
      // setTodo([]);
      setTodo({ name: "", done: false });
    }
    return (
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            value={todo.name}
            placeholder="Enter Todo Item.."
            // onChange={(e) => setTodo(e.target.value)}
            onChange={(e) => setTodo({name: e.target.value, done: false})}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    );
}
 
export default Form;