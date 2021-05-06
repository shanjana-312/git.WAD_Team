import React from "react"
import "./Experience.css"
import { Link } from 'react-router-dom';


function Experience() {
  return (
    <div className="Experience" >
      <p className="para">Thank you for taking the time to provide your valuable feedback. We appreciate hearing from you and will review your comments carefully.</p>
      <hr></hr>
      <div className="feedback">
        <p className="feed">Type of Feedback</p><br></br>
        <div className="check">
          <input type="checkbox" className="ck" /> <label className="comment"> Comments</label>
          <input type="checkbox" className="ck" /><label className="comment"> Suggestions</label>
          <input type="checkbox" className="ck" /><label className="comment"> Questions</label>
        </div>
      </div>
      <div class="rating-css">
        <label className="rate">Rate us</label>
        <div class="star-icon">
          <input type="radio" name="rating1" id="rating1" />
          <label for="rating1" class="far fa-tired"></label>
          <input type="radio" name="rating1" id="rating2" />
          <label for="rating2" class="far fa-frown"></label>
          <input type="radio" name="rating1" id="rating3" />
          <label for="rating3" class="far fa-meh"></label>
          <input type="radio" name="rating1" id="rating4" />
          <label for="rating4" class="far fa-smile"></label>
          <input type="radio" name="rating1" id="rating5" />
          <label for="rating5" class="far fa-grin-beam"></label>
        </div>
      </div>
      <div className="Desc">
        <label htmlFor="Description" className="desc">
          Remarks (Optional):
                    </label><br></br>
        <textarea rows="8" cols="100" /><br></br>
      </div>
      <div className="SubmiT">
        <Link to="/"><button type="submit" className="submiT" onClick={Submit} >S U B M I T</button></Link></div>

    </div>

  );
}



function Submit() {
  alert('Thanks for your feedback!');

}
export default Experience;