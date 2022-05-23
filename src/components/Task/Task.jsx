import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todo,onDelete}) => {
  const [isCompleted,setisCompleted] = React.useState(todo.isCompleted)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className={styles.checkbox} checked={isCompleted} onChange={(e)=>{
        setisCompleted(e.target.checked)
      }} />
      <div data-cy="task-text" className={isCompleted ? styles.strick:""}>{todo.value}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" className={styles.btn} onClick={()=>onDelete(todo.id)}>delete</button>
    </li>
  );
};

export default Task;
