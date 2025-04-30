import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/new" element={<NewTask />} />
        <Route path="/tasks/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;