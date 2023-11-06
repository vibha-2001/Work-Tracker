
import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='Task'>
      
      <ul className='Task--list'>
      <div className='Input'>
      <input className='Input-Text'
        type="text"
        value={newTask}
        onChange={handleTaskChange}
        placeholder="Type your new task..."
      />
      <button onClick={addTask} className='btn--addTask'>Add</button>
      </div>
      
        {tasks.map((task, index) => (
          
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            
            <input className='checkbox'
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.completed ? <del>{task.text}</del> : task.text}
            <button className='btn--delete' onClick={() => removeTask(index)}>Delete</button>
            
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default ToDoList;
