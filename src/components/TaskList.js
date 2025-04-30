import React from 'react';
import { Link } from 'react-router-dom';
import '../components/TaskTable.css';

export default function TaskList({ tasks, onDelete }) {
  return (

     <div className="table-wrapper">
      <h2>List of Available Tasks</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {tasks.map(task => (
          <tr key={task.id}>
            <td><input type="text" name="title" value={task.title} /></td>
            <td><input type="text" name="status" value={task.status}  /></td>
            <td><input type="text" name="priority" value={task.priority} /></td>
            <td><Link to={`/tasks/${task._id}`}>Edit</Link></td>
            <td><button onClick={() => onDelete(task._id)}>Delete</button></td>
          </tr>

        /*<li key={task._id}>
          <strong>{task.title}</strong> - {task.status} - {task.priority}
          <Link to={`/tasks/${task._id}`}>Edit</Link>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>*/
      ))}
      </tbody>
      </table>
      </div>
  );
}