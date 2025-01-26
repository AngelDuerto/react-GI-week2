import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TaskList({ tasks, setTasks }) {
    // State var to hold task title and description input values
    const [taskTitle, setTaskTitle] = useState(''); //holds title of new task
    const [taskDescription, setTaskDescription] = useState(''); //holds the description of new task

    //function to handle adding new task
    const handleAddTask = () => {
        //create new task object
        const newTask = {
            id: Date.now().toString(), // Unique ID using timestamp
            title: taskTitle, //current value of taskTitle
            description: taskDescription, //current value of taskDescription 
        };
        setTasks([...tasks, newTask]); // Update task list
        //clear input fields after task are added
        setTaskTitle('');
        setTaskDescription('');
    };

    return (
        <div className='mainDiv'>
            <h1 className='appTitle'>To-Do App</h1>
            <input
                type="text"
                placeholder="Task Title"
                value={taskTitle} //bind input value to taskTitle state
                onChange={(e) => setTaskTitle(e.target.value)} //update taskTitle as user types
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription} //bind textarea value to taskDescription state
                onChange={(e) => setTaskDescription(e.target.value)} //update taskDescription as user types
            />
            {/* Button triggers handleAddTask function when clicked */}
            <button className='listButton' onClick={handleAddTask} disabled={!taskTitle.trim() || !taskDescription.trim()}> 
                Add Task 
            </button>
            {/* conditional rendering to display a message if no tasks exists */}
            {tasks.length === 0 ? (
            <p>The task list is empty. Please add a task!</p>
            ) : (
            <ul>
                {/* iterate over each task in tasks array */}
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        {/* link to task details page, using task's unique ID */}
                        <Link to={`/task/${task.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
   );
};

export default TaskList;




