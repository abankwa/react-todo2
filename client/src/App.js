
import './style.css';
import Header from './components/Header'
import Task from './components/Task'
import Completed from './components/Completed'
import { useState } from 'react'



export default function App() {

  const [tasks, setTask] = useState([
    {
     id: 1,
     text: 'doctors appointment',
     completed: false
    },
    {
      id: 2,
      text: 'renew car tabs',
      completed: true
     },
     {
      id: 3,
      text: 'schedule interview',
      completed: true
     }
  ])

  //delete task
  function deleteTask(id){
    
    setTask(tasks.filter((task) => task.id !== id))
  }

  //delete all completed tasks
  function deleteCompleted(){
    setTask(tasks.filter((task) => task.completed == false))
    //console.log('clear completed')
  }

  //toggle completion status
  function toggleCompleted(id){
    //console.log(`toggled ${id}`)
    setTask(
      tasks.map((task) => task.id == id ? { ...task, completed:!task.completed} : task)
    )
    
  }

  return (
    <div className="App-container">
        <Header />
        <p>holla amigos!!</p>
       
        {tasks.map((task) => (<Task key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>))}
        <Completed deleteCompleted={deleteCompleted}/>
    </div>
    
  );
}

