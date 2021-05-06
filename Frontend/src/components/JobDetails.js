import React from 'react';
function showAlert() {
    alert("APPLIED SUCCESSFULLY!!");
    document.getElementById('apply').style.visibility = "hidden";
    document.getElementById('applied').style.visibility = "visible";
}

function show() {
    document.getElementById('apply').style.visibility = "visible";
    document.getElementById('applied').style.visibility = "hidden";

}
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
      <ul><div>
    <button className='apply' type="submit"  id = 'apply' onClick={showAlert}>APPLY</button></div><div>
    <button className='applied' type="submit"  id = 'applied'  onClick={show}>UNDO</button></div>
      </ul>
    </div>

  );
};

export default JobDetails;