import React from "react"
import "./Report.css"
function show() {
  alert('Reported Successfully!!');
}

function Report() {
  return (
    <div className="reportdiv">
      <form className="form-report">
        <h1 className="reporth1">
          REPORT POST
        </h1>
        <div className="checkbox">
          <label htmlFor="User" className="username">
            Post Title
                    </label>
          <input id="User"
            type="text"
            name="User"
            className="User-input"
            placeholder="Enter the title of the post"

          />

        </div>
        <div className="checkbox">

          <input type="checkbox" id="b1" name="b1" value="b1" />
          <label className="relbl"> Violent content</label>
        </div>
        <div className="checkbox">

          <input type="checkbox" id="b2" name="b2" value="b2" />
          <label className="relbl"> Abusive content</label>
        </div>
        <div className="checkbox">

          <input type="checkbox" id="b3" name="b3" value="b3" />
          <label className="relbl"> Harmful content</label>
        </div>


        <div className="checkbox">

          <input type="checkbox" id="b4" name="b4" value="b4" />
          <label className="relbl"> Spam </label>
        </div>


        <div className="checkbox">

          <input type="checkbox" id="b5" name="b5" value="b5" />
          <label className="relbl"> Nudity</label>
        </div>

        <div className="checkbox">
          <label htmlFor="Description" className="desc">
            Additional details about the content (Optional)
                    </label>
          <textarea rows="6" cols="83" /><br></br>
        </div>
        <div className="instruction">
          <ul>
            Information about your report will be maintained in accordance with our Privacy Policy and Terms of Service.
          </ul>
        </div>
        <div className="Report">
          <button id="Report" className="report" onClick={show}>Submit Report</button>
        </div>
      </form>
    </div>

  );




}

export default Report;