import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoInput}
          type="text"
          placeholder="Add Todo Item"
        />
        <br />
        <button className={styles.todoButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
