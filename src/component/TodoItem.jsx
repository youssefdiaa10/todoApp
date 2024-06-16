/* eslint-disable react/prop-types */
import styles from "./todoitem.module.css";

function TodoItem({ value, list, setList }) {
  function handleDelete(item) {
    setList(list.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = list.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );

    setList(newArray);
  }

  const nameClass = value.done ? styles.completed : "";
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={nameClass} onClick={() => handleClick(value.name)}>
            {value.name}
          </span>

          <span>
            <button
              onClick={() => handleDelete(value)}
              className={styles.deleteButton}
            >
              x
            </button>
          </span>
        </div>

        <hr className={styles.line} />
      </div>
    </>
  );
}

export default TodoItem;
