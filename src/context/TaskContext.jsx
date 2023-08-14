import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../task";

//Exporto el context name de la aplicacion
export const TaskContext = createContext();

//Exporto el contenedor del taskContent
export function TaskContextProvider(props) {


  //Creo mi variable de estado que llevara el componente
  const [tasks, setTasks] = useState([]);


  function createTask(task) {
    let nvoTask = [...tasks, {
      title: task.title, 
      description: task.description,
      id: tasks.length 
    }]
    setTasks(nvoTask)
  }

    //Este actualizara la variable task al momento de cargar componente
    useEffect(() => {
      setTasks(data);
    }, []);
  


  function deleteTask(idTask) {
    console.log(tasks);
    let currentTask = [...tasks].filter(e=> e.id !== idTask)
    setTasks(currentTask)
  }

  return <TaskContext.Provider value={
    {
      tasks,
      createTask,
      deleteTask
    }
  }>{props.children}</TaskContext.Provider>;
}

