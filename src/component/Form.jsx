/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./form.module.css";

function Form({ list, setList }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <>
      <div>
        <form className={styles.toDoForm} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.modernInput}
              onChange={(event) =>
                setTodo({ name: event.target.value, done: false })
              }
              type="text"
              placeholder="Enter your Task ..."
              value={todo.name}
            />
            <button className={styles.modernButton} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
