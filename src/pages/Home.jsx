import React, { useState } from "react";

function Home() {
    const [task, setTask] = useState("");
    const [todoTasks, setTodoTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== "") {
            setTodoTasks([task, ...todoTasks]);
            setTask("");
        }
    };

    const handleMoveTask = (task, fromSection, toSection) => {
        if (fromSection === "todo") {
            setTodoTasks(todoTasks.filter((t) => t !== task));
        } else if (fromSection === "ongoing") {
            setOngoingTasks(ongoingTasks.filter((t) => t !== task));
        } else if (fromSection === "completed") {
            setCompletedTasks(completedTasks.filter((t) => t !== task));
        }

        if (toSection === "todo") {
            setTodoTasks([task, ...todoTasks]);
        } else if (toSection === "ongoing") {
            setOngoingTasks([task, ...ongoingTasks]);
        } else if (toSection === "completed") {
            setCompletedTasks([task, ...completedTasks]);
        }
    };

    const handleDeleteTask = (task, fromSection) => {
        if (fromSection === "todo") {
            setTodoTasks(todoTasks.filter((t) => t !== task));
        } else if (fromSection === "ongoing") {
            setOngoingTasks(ongoingTasks.filter((t) => t !== task));
        } else if (fromSection === "completed") {
            setCompletedTasks(completedTasks.filter((t) => t !== task));
        }
    };

    const clearSection = (section) => {
        if (section === "todo") {
            setTodoTasks([]);
        } 
        else if (section === "ongoing") {
            setOngoingTasks([]);
        }
        else if (section === "completed") {
            setCompletedTasks([]);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-input-container">
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit" className="add-task-btn">
                        Add Task
                    </button>
                </div>
            </form>

            <div className="task-section">
            {/* To-Do Section */}
                <div className="todo-section">
                    <h2>To-Do Tasks</h2>
                    <div className="scrollable-task-list">
                        <ul>
                            {todoTasks.map((t, index) => (
                            <li key={index}>
                                <span>{t}</span>
                                <div className="task-actions">
                                    <select
                                        className="task-dropdown"
                                        onChange={(e) => handleMoveTask(t, "todo", e.target.value)}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Move to...
                                        </option>
                                        <option value="ongoing">Ongoing</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                    <span
                                        className="delete-icon"
                                        onClick={() => handleDeleteTask(t, "todo")}
                                    >
                                        🗑️
                                    </span>
                                </div>
                            </li>
                            ))}
                        </ul>
                </div>
                <button className="clear-all-btn" onClick={() => clearSection("todo")}>
                    Clear All
                </button>
        </div>

    {/* Repeat similar structure for Ongoing and Completed sections */}



                {/* Ongoing Section */}
                <div className="ongoing-section">
                    <h2>Ongoing Tasks</h2>
                    <div className="scrollable-task-list">
                        <ul>
                            {ongoingTasks.map((t, index) => (
                                <li key={index}>
                                    <span>{t}</span>
                                    <div className="task-actions">
                                        <select
                                            className="task-dropdown"
                                            onChange={(e) => handleMoveTask(t, "ongoing", e.target.value)}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Move to...
                                            </option>
                                            <option value="todo">To-Do</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                        <span
                                            className="delete-icon"
                                            onClick={() => handleDeleteTask(t, "ongoing")}
                                        >
                                            🗑️
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="clear-all-btn" onClick={() => clearSection("ongoing")}>
                        Clear All
                    </button>
                    
                </div>

                {/* Completed Section */}
                <div className="completed-section">
                    <h2>Completed Tasks</h2>
                    <div className="scrollable-task-list">
                        <ul>
                            {completedTasks.map((t, index) => (
                                <li key={index}>
                                    <span>{t}</span>
                                    <div className="task-actions">
                                        <select
                                            className="task-dropdown"
                                            onChange={(e) => handleMoveTask(t, "completed", e.target.value)}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Move to...
                                            </option>
                                            <option value="todo">To-Do</option>
                                            <option value="ongoing">Ongoing</option>
                                        </select>
                                        <span
                                            className="delete-icon"
                                            onClick={() => handleDeleteTask(t, "completed")}
                                        >
                                            🗑️
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="clear-all-btn" onClick={() => clearSection("Completed")}>
                        Clear All
                    </button>
                    
                </div>
            </div>
        </>
    );
}

export default Home;
