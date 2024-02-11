import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

const TodoList = ({ todos, setTodos }) => {
  const sortedTodo = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
