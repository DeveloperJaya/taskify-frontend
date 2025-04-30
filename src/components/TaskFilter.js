import React from 'react';
import './TaskFilter.css';

export default function TaskFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value === 'All' ? '' : value,
    }));
  };

  return (
    <div className="filter-container">
      <h2>Filter Task :</h2>
      <div className="filter-group">
        <label htmlFor="status">Status:</label>
        <select name="status" value={filters.status || 'All'} onChange={handleChange}>
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priority">Priority:</label>
        <select name="priority" value={filters.priority || 'All'} onChange={handleChange}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </div>
  );
}
