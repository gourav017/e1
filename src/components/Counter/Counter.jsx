import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let [count,setCount] = React.useState(1);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.btnn} onClick={()=>setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className={styles.btnn} onClick={()=>setCount(count-1!==0 ? count-1:1)}>-</button>
    </div>
  );
};

export default Counter;
