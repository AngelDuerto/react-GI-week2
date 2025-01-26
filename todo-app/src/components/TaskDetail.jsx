import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TaskDetail ({ tasks, setTasks }) {
    //get the task ID from the URL
    const { id } = useParams(); 
    //navigate between pages
    const navigate = useNavigate();

    //find task by ID from 'tasks' array
    const task = tasks.find((task) => task.id === id);

    //if task not found, display error
    if (!task) {
        return (
            <div>
                <h2 className="not-found">Task not found!</h2>
                <button onClick={() => navigate('/')}>Go Back to Task List</button> {/*button to go back to task list */}
            </div>
        );
    }

    //state to manage editing task title and description
    const [editTitle, setEditTitle] = useState(task.title); //initialize with current task's title
    const [editDescription, setEditDescription] = useState(task.description); //initialize with current task's description

    //handle updating task
    const handleUpdate = () => {
        //update task in tasks array by mapping over each task
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, title: editTitle, description: editDescription } : t
        );
        setTasks(updatedTasks); // Trigger state update
        navigate('/'); // Redirect to task list after update
    };

  // Handle deleting task
    const handleDelete = () => {
        //filter out task to be deleted from task array
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks); // Trigger state update
        navigate('/'); // Redirect to task list page after delete
    };

    return (
        <div className='mainDiv'>
            <h1 className='detailTitle'>Task Detail</h1>
        <div>
            <div>
                <h3>Title: </h3>
                <input
                    type="text"
                    value={editTitle} //bind input value to editTitle state
                    onChange={(e) => setEditTitle(e.target.value)} //update state as user types
                />
            </div>
            <div>
                <h3>Description: </h3>
                <textarea
                    value={editDescription} //bind textarea value to editDescription state
                    onChange={(e) => setEditDescription(e.target.value)} //update state as user types
                />
            </div>
            <div>
                <button className='updateButton' onClick={handleUpdate}>Update Task</button> {/*button to update task*/}
                <button className='deleteButton' onClick={handleDelete}>Delete Task</button> {/*button to delete task */}
            </div>
        </div>
    </div>
    );
};

export default TaskDetail;







