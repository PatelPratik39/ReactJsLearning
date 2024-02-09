import TodoItem from "./TodoItem";
import styles from './todoList.module.css';

const TodoList = ({ todos }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
