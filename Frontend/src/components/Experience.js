import React from "react"
import "./Experience.css"
import { Link } from 'react-router-dom';


function Experience(){
    return(


    <div className="Module" >

            <div class="rating-css">
            <p className="para"> Are we good enough! Come on Let us know that really quick</p>


    <div class="star-icon">
      <input type="radio" name="rating1" id="rating1" />
      <label for="rating1" class="fa fa-star"></label>
      <input type="radio" name="rating1" id="rating2" />
      <label for="rating2" class="fa fa-star"></label>
      <input type="radio" name="rating1" id="rating3" />
      <label for="rating3" class="fa fa-star"></label>
      <input type="radio" name="rating1" id="rating4" />
      <label for="rating4" class="fa fa-star"></label>
      <input type="radio" name="rating1" id="rating5" />
      <label for="rating5" class="fa fa-star"></label>
    </div>


  </div>
    <div className="Desc">
                    <label htmlFor="Description" className="desc">
                        Remarks / Suggestions
                    </label><br></br>
                    <textarea rows="8" cols="100"  /><br></br>
            </div>
  <div className="SubmiT">
    <Link to="/"><button type="submit" className="submiT" onClick={Submit} >S U B M I T</button></Link></div>

</div>

    );
 }



function Submit(){
    alert('Thanks for your feedback!');

}
export default Experience;