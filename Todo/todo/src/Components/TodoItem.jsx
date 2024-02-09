import styles from "./TodoItem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("Delete Clicked for an item ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    // console.log('Item ckicked', name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  // this line make itemlist checked that completed ot not
  const className = item.done ? styles.completed : " ";
  
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}{" "}
        </span>
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
