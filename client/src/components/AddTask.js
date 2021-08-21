import './../style.css'
import { useState } from 'react'
import { uuid } from 'uuidv4';


function AddTask({addTask}){

    const [taskText, setTaskText] = useState("")

    function handleChange(e){
        setTaskText(e.target.value);   {/* set value of text field */}
    }

    function handleSubmit(e){
        e.preventDefault() ;    {/* prevent page reload on submit */ }

        if(taskText){           {/* don't add empty tasks */}
            addTask({id: uuid(), text: taskText, completed: false});
            setTaskText("");        {/* clear text box after submitting */}
        }
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>  
                <label>task</label>
                <input type="text" placeholder="add task" value={taskText} onChange={handleChange}></input>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}

export default AddTask