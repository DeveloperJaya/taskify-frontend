import React, { useEffect, useState } from 'react';
import API from '../api';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  const handleDelete = async id => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => { loadTasks(); }, []);

  return (
    <div>
      <h2></h2>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}