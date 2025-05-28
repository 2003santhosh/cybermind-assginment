import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import JobFilter from './JobFilter';
import JobBoard from './JobBoard'; // <-- This handles jobs and BodyJobs

function App() {
  const [jobs, setJobs] = useState([]);

  const handlePublish = (jobData) => {
    setJobs((prev) => [...prev, jobData]);
  };

  return (
    <div>
      <Header onPublish={handlePublish} /> {/* ✅ Pass to Header */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <JobFilter />
        <JobBoard jobs={jobs} /> {/* Optional: pass if JobBoard needs it */}
      </div>
    </div>
  );
}

export default App;
