import React, { useState, useEffect } from 'react';
import './JobComponents.css';
import data from './database/data.json';


import JobDetails from './JobDetails';

function JobComponents() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
    setLoading(false);
  }, []);

  // Filter
  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [...languages, ...tools, level, role];
    return tags.some((tag) => filters.includes(tag));
  };

  // Add tag to header
  const addTag = (tag) => {
    // avoid reading the tag
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  // Remove filter
  const removeTag = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className='content'>
     
      {filters.length > 0 && (
        <ul className='tags-bar'>
          {filters.map((filter) => (
            <li onClick={() => removeTag(filter)}>
              {filter}
              <span>X</span>
            </li>
          ))}
          <button onClick={clearFilters}>Clear</button>
        </ul>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredJobs.map((job) => (
            <li>
              <JobDetails key={job.id} job={job} addTag={addTag} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobComponents;