import React from 'react';

const JobDetails = ({ job, addTag }) => {
  const tags = [...job.languages, ...job.tools, job.level, job.role];
  //   console.log(tags);

  return (
    <div className='module'>
      <div className='description'>
        <div>
          <img src={job.logo} alt={job.company} />
        </div>
        <div>
          <ul>
            <li>{job.company}</li>
            {job.new && <li>NEW!</li>}
            {job.featured && <li>FEATURED</li>}
          </ul>
          <ul>
            <li>{job.position}</li>
          </ul>
          <ul>
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>

      <ul className='tags'>
        {tags.map((tag, index) => (
          <li onClick={() => addTag(tag)} key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetails;