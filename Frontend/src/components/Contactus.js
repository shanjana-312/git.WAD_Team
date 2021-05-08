import React, { useState } from 'react'
import "./Contactus.css"


function SuBmiT() {
  alert("We have received your request");

}


function Contactus() {

  return (
    <div class="container">
      <div >
        <h2 id="ch2">Contact Us</h2>
        <p id="cp">Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div class="row">
        <div class="column">
          <form className="Form">
            <label for="fname">First Name</label>
            <input type="text" id="cfname" name="firstname" placeholder="Your name.." />
            <label for="lname">Last Name</label>
            <input type="text" id="clname" name="lastname" placeholder="Your last name.." />
            <label for="subject">Message</label>
            <textarea id="csubject" name="subject" placeholder="Write something.." ></textarea>
            <input type="submit" value="Submit" id="csubmit" onClick={SuBmiT} />
          </form>
        </div>
      </div>
    </div>



  );


}

export default Contactus;