import './../style.css'

function Task({task, deleteTask, toggleCompleted}){
    return (
        <div className="Task">
            <p>{task.text}</p>
            <div>
                <input type="checkbox" checked ={!!task.completed} onClick={() => toggleCompleted(task.id)}></input>
                <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>   
        </div>
    )
}

export default Task