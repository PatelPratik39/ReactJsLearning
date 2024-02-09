import styles from './TodoItem.module.css'

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("Delete Clicked for an item ", item);
    setTodos(todos.filter((todo) => todo !== item ));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}{" "}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            {" "}
            x{" "}
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};
 
export default TodoItem;