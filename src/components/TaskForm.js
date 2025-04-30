import React, { useState, useEffect } from 'react';
import '../components/TaskForm.css';

export default function TaskForm({ task, onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'Pending',
  });

  useEffect(() => {
    if (task) setForm(task);
  }, [task]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-box">
    <div className="form-group">
      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required /><br></br>
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea name="description" value={form.description} onChange={handleChange} /><br></br>
    </div>
    <div className="form-group">
      <label>Due Date</label>
      <input name="dueDate" type="date" value={form.dueDate?.slice(0, 10)} onChange={handleChange} /><br></br>
    </div>
    <div className="form-group">
      <label>Priority</label>
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
    </div>
    <div className="form-group">
      <label>Status</label>
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Pending</option><option>Completed</option>
      </select>
    </div>
    <div className="form-group">
      <button class="button" type="submit">Save Task</button>
    </div>
    </form>
    </div>
  );
}