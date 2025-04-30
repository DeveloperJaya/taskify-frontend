import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import API from '../api';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    API.get(`/tasks/${id}`)
      .then(res => setTask(res.data))
      .catch(err => {
        console.error('Failed to load task:', err);
        alert('Task not found');
        navigate('/');
      });
  }, [id, navigate]);

  const handleUpdate = async (updatedTask) => {
    try {
      await API.put(`/tasks/${id}`, updatedTask);
      navigate('/');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update task');
    }
  };

  return (
    <div>
      <div className="form-group">
      <h2 align="center">Edit Existing Task</h2>
      </div>
      {task ? <TaskForm task={task} onSubmit={handleUpdate} /> : <p>Loading...</p>}
    </div>
  );
}
