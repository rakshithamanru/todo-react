import React from 'react'
export default function Home() 
{
    return (
        <>
            <form>
                <div className="form-input-container">
                    <input type="text" placeholder="Add a task" />
                    <button className="add-task-btn">Add Task</button>
                </div>
                <div>
                    <button className="task-btn">To-Do Tasks</button>
                    <button className="task-btn">Ongoing Tasks</button>
                    <button className="task-btn">Completed Tasks</button>
                </div>
            </form>
           
        </>
    )

}