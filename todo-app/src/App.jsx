import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import NotFound from './NotFound';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]); // Shared task state
    return (
      <Router>
        <Navbar />
        <Routes>
          {/* Home page route, renders TaskList component, passes down 'task' and 'setTasks' as props */}
          <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
           {/* task details page route (:id  dynamic parameter), renders TaskDetail component, passes down 'task' and 'setTasks' as props */}
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} setTasks={setTasks} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;



