import React, { useEffect, useState } from 'react';
import API from '../api';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: '', priority: '' });

  const loadTasks = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await API.get(`/tasks?${query}`);
      setTasks(res.data);
    } catch (err) {
      console.error('Error loading tasks:', err);
      setTasks([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filters]);

  return (
    <div>
      <TaskFilter filters={filters} setFilters={setFilters} />
      <TaskList tasks={tasks || []} onDelete={handleDelete} />
    </div>
  );
}
