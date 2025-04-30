import React from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm.js';

export default function NewTask() {
  const navigate = useNavigate();

  const handleCreate = async (task) => {
    await API.post('/tasks', task);
    navigate('/'); // Redirect to home
  };

  return (
    <div>
      <div className="form-group">
      <h2 align="center">Create New Task</h2>
      </div>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}
