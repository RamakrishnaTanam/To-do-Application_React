import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, priority: 'Medium' }]);
      setTask('');
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'todo-container dark-mode' : 'todo-container'}>
      <div className="todo-header">
        <h1>Enhanced To-Do List</h1>
        <button onClick={toggleDarkMode} className="toggle-dark-mode">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="todo-input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          className="todo-input"
        />
        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <motion.li
            key={index}
            className="todo-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <span>{t.text}</span>
            <span className="priority">Priority: {t.priority}</span>
            <button className="delete-button" onClick={() => removeTask(index)}>
              Delete
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

