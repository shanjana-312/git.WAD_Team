import React, { useState } from 'react'
import "./Contactus.css"



function Contactus() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("")
  function SuBmiT() {
    alert("We have received your request");
  }
  const newContactus = () => {
    const ContactusData = new FormData()
    ContactusData.append('firstname', firstname);
    ContactusData.append('lastname', lastname);
    ContactusData.append('message', message);
    fetch("http://127.0.0.1:8000/Frontend/contactus/", {
      method: 'POST',
      body: ContactusData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
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
            <input type="text" id="cfname" name="firstname" placeholder="Your name.." value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <label for="lname">Last Name</label>
            <input type="text" id="clname" name="lastname" placeholder="Your last name.." value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <label for="subject">Message</label>
            <textarea id="csubject" name="subject" placeholder="Write something.." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <input type="submit" id="csubmit" onClick={() => newContactus()} />
          </form>
        </div>
      </div>
    </div>



  );


}

export default Contactus;