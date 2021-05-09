import React, { useState } from "react"
import "./Experience.css"
import { Link } from 'react-router-dom';


function Experience() {
  const [comment, setComment] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [rate, setRate] = useState("1");
  const [remarks, setRemarks] = useState("");
  const newExperience = () => {
    const ExperienceData = new FormData()
    ExperienceData.append('comment', comment);
    ExperienceData.append('suggestions', suggestions);
    ExperienceData.append('questions', questions);
    ExperienceData.append('rate', rate);
    ExperienceData.append('remarks', remarks);
    fetch("http://127.0.0.1:8000/Frontend/experiences/", {
      method: 'POST',
      body: ExperienceData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
  function Submit() {
    alert('Thanks for your feedback!');
    console.log(rate);
  }
  return (
    <div className="Experience" >
      <p className="para">Thank you for taking the time to provide your valuable feedback. We appreciate hearing from you and will review your comments carefully.</p>
      <hr></hr>
      <div className="feedback">
        <p className="feed">Type of Feedback</p><br></br>
        <div className="check">
          <input type="checkbox" className="ck" value={comment} onChange={() => setComment(true)} /> <label className="comment"> Comments</label>
          <input type="checkbox" className="ck" value={suggestions} onChange={() => setSuggestions(true)} /><label className="comment"> Suggestions</label>
          <input type="checkbox" className="ck" value={questions} onChange={() => setQuestions(true)} /><label className="comment"> Questions</label>
        </div>
      </div>
      <div class="rating-css">
        <label className="rate">Rate us</label>
        <div class="star-icon">
          <input type="radio" name="rating1" id="rating1" value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="far fa-tired"></label>
          <input type="radio" name="rating1" id="rating2" value={rate} onChange={() => setRate("2")} />
          <label for="rating2" class="far fa-frown"></label>
          <input type="radio" name="rating1" id="rating3" value={rate} onChange={() => setRate("3")} />
          <label for="rating3" class="far fa-meh"></label>
          <input type="radio" name="rating1" id="rating4" value={rate} onChange={() => setRate("4")} />
          <label for="rating4" class="far fa-smile"></label>
          <input type="radio" name="rating1" id="rating5" value={rate} onChange={() => setRate("5")} />
          <label for="rating5" class="far fa-grin-beam"></label>
        </div>
      </div>
      <div className="Desc">
        <label htmlFor="Description" className="desc">
          Remarks (Optional):
                    </label><br></br>
        <textarea rows="8" cols="100" value={remarks} onChange={(e) => setRemarks(e.target.value)} /><br></br>
      </div>
      <div className="SubmiT">
        <Link to="/"><button type="submit" className="submiT" onClick={() => newExperience()} >S U B M I T</button></Link></div>

    </div>

  );
}

export default Experience;