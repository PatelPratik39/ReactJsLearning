import styles from "../style.module.css";

const Todo = ({todoItem}) => {
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button className={styles.deleteButton}>Done</button>
      </div>
    </div>
  );
};

export default Todo;