import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function Todo() {
  const [list, setList] = useState([]);
  const completedList = list.filter((todo) => todo.done).length;
  const totalList = list.length;

  return (
    <>
      <div>
        <Form list={list} setList={setList} />
        <List list={list} setList={setList} />
        <Footer completedList={completedList} totalList={totalList} />
      </div>
    </>
  );
}

export default Todo;
