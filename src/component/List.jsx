/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./list.module.css";

function List({ list, setList }) {
  const sortedList = list
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <>
      <div className={styles.list}>
        {sortedList.map((item, index) => (
          <TodoItem value={item} key={index} list={list} setList={setList} />
        ))}
      </div>
    </>
  );
}

export default List;
