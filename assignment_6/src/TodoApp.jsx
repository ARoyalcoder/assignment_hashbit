import React, { useState } from 'react';

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return;

    const newTodos = [...todos, trimmedTask].sort((a, b) =>
      a.localeCompare(b)
    );
    setTodos(newTodos);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">To-Do List</h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-3 py-2 border rounded-md bg-gray-50"
            >
              <span>{todo}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-400">No tasks yet</p>
        )}
      </div>
    </div>
  );
}
