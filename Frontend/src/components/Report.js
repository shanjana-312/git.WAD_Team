import React, { useState } from "react"
import "./Report.css"
function show() {
  alert('Reported Successfully!!');
}

function Report() {
  const [posttitle, setPosttitle] = useState("");
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [details, setDetails] = useState("");
  const newReport = () => {
    const ReportData = new FormData()
    ReportData.append('posttitle', posttitle);
    ReportData.append('box1', box1);
    ReportData.append('box2', box2);
    ReportData.append('box3', box3);
    ReportData.append('box4', box4);
    ReportData.append('box5', box5);
    ReportData.append('details', details);
    fetch("http://127.0.0.1:8000/Frontend/reports/", {
      method: 'POST',
      body: ReportData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
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
            value={posttitle} onChange={(e) => setPosttitle(e.target.value)}
          />

        </div>
        <div className="checkbox">

          <input type="checkbox" id="b1" name="b1" value={box1} onChange={() => setBox1(true)} />
          <label className="relbl"> Violent content</label>
        </div>
        <div className="checkbox">

          <input type="checkbox" id="b2" name="b2" value={box2} onChange={() => setBox2(true)} />
          <label className="relbl"> Abusive content</label>
        </div>
        <div className="checkbox">

          <input type="checkbox" id="b3" name="b3" value={box3} onChange={() => setBox3(true)} />
          <label className="relbl"> Harmful content</label>
        </div>


        <div className="checkbox">

          <input type="checkbox" id="b4" name="b4" value={box4} onChange={() => setBox4(true)} />
          <label className="relbl"> Spam </label>
        </div>


        <div className="checkbox">

          <input type="checkbox" id="b5" name="b5" value={box5} onChange={() => setBox5(true)} />
          <label className="relbl"> Nudity</label>
        </div>

        <div className="checkbox">
          <label htmlFor="Description" className="desc1">
            Additional details about the content (Optional)
                    </label>
          <textarea rows="6" cols="83" value={details} onChange={(e) => setDetails(e.target.value)} /><br></br>
        </div>
        <div className="instruction">
          <ul>
            Information about your report will be maintained in accordance with our Privacy Policy and Terms of Service.
          </ul>
        </div>
        <div className="Report">
          <button id="Report" className="report" type="submit" onClick={() => newReport()}>Submit</button>
        </div>
      </form>
    </div>

  );




}

export default Report;