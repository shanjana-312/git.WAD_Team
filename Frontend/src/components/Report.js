import React from "react"
import "./Report.css"
function show(){
   alert('Reported Successfully!!');
}

function Report(){
    return(
    <div className="div">
    <form className="form-report">
            <h1>
            <u>REPORT</u>
            </h1>
            <div className="checkbox">
                    <label htmlFor="User" className="username">
                        Username
                    </label><br></br>
                    <input id="User"
                        type="text"
                        name="User"
                        className="User-input"
                        placeholder="Enter your username"

                    />

            </div>

            <div className="checkbox">

              <input type="checkbox" id="b1" name="b1" value="b1" />
              <label> Hate Speech</label>
            </div>

            <div className="checkbox">

              <input type="checkbox" id="b2" name="b2" value="b2" />
              <label> Prank calls\mails</label>
            </div>


            <div className="checkbox">

              <input type="checkbox" id="b3" name="b3" value="b3" />
              <label> Nudity</label>
            </div>

            <div className="checkbox">
                    <label htmlFor="Description" className="desc">
                        Description
                    </label><br></br>
                    <textarea rows="6" cols="83"  /><br></br>
            </div>

            <div className="Report">
           <button id="Report" className="report" onClick={show}>Report</button>
            </div>
            <div className="instruction">
              <ul>
                <li> We will consider and try to solve your issue as soon as possible. </li>
                <li> If your issue is not solved within a week, please contact us.</li>
              </ul>
            </div>
    </form>
</div>

    );

    


}

export default Report;