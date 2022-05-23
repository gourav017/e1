import React, { useDebugValue } from "react";
import Counter from "../Counter/Counter";
import Task from "../Task/Task";
import TaskHeader from "../TaskHeader/TaskHeader";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  let [value,setValue] = React.useState("")
  const[todos,setTodos] = React.useState([])

  const onDelete=(id)=>{
        let newTodo = todos.filter(todo=> todo.id!==id);
        setTodos(newTodo)
  }

  return (

   

    
    <div className={styles.todoForm}>
      <h1>Todo List</h1>
      <TaskHeader/>
      <input data-cy="add-task-input" type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Add tasks..." />
      <button data-cy="add-task-button"onClick={()=>{
        if(value===""){
          setValue("")
        }
        else{
          setTodos([...todos,{id:Date.now(),value:value}]);
          setValue("")
        }
        
      }}>+</button>

        
      {todos.map((todo)=>(
        <div className={styles.AddTask}>
        <Task key={todo.id} todo={todo} onDelete={onDelete}/>
        </div>
      ))}

</div>

  );
};

export default AddTask;
