import './../style.css'

function Completed({deleteCompleted}){
    return (
        <div>
            <button onClick={deleteCompleted}>clear completed</button>
        </div>
    )
}

export default Completed