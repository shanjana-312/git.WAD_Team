import React from "react"
import "./Report.css"
function show(){
   alert('Reported Successfully!!');
}

function Report(){
    return(<div className="div">
    <form className="form-report">
            <h1>
            REPORT
            </h1>
            <div className="checkbox">
                    <label htmlFor="User" className="username">
                        Username
                    </label><br></br>
                    <input id="User"
                        type="text"
                        name="User"
                        className="User-input"
                        placeholder="Enter username of the person.."

                    />

            </div>

            <div className="checkbox">

              <input type="checkbox" id="b1" name="b1" value="b1" />
              <label>Hate Speech</label>
            </div>

            <div className="checkbox">

              <input type="checkbox" id="b2" name="b2" value="b2" />
              <label> Prank calls or mails</label>
            </div>


            <div className="checkbox">

              <input type="checkbox" id="b3" name="b3" value="b3" />
              <label> Nudity</label>
            </div>

            <div className="checkbox">
                    <label htmlFor="Description" className="desc">
                        Description
                    </label><br></br>
                    <textarea rows="4" cols="83"  /><br></br>
            </div>

            <div className="Report">
           <button id="Report" className="report" onClick={show}>Report</button>
            </div>
    </form>
</div>

    );


}

export default Report;