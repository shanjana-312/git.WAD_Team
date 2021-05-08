import React, { useState, useEffect } from "react";
import "./Fundsform.css";
const Fundsform = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [location, setLocation] = useState("");
    const [stage, setStage] = useState();
    const [industry, setIndustry] = useState();
    const [role, setRole] = useState();
    const [members, setMembers] = useState();
    const [idea, setIdea] = useState("");
    const newFund = () => {
        const FundData = new FormData()
        FundData.append('firstname', firstname);
        FundData.append('lastname', lastname);
        FundData.append('email', email);
        FundData.append('phonenumber', phonenumber);
        FundData.append('location', location);
        FundData.append('stage', stage);
        FundData.append('industry', industry);
        FundData.append('role', role);
        FundData.append('members', members);
        FundData.append('idea', idea);
        fetch("http://127.0.0.1:8000/Frontend/funds/", {
            method: 'POST',
            body: FundData

        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div className="funds" >

            <form className="fundsform"  >
                <h1 id="Apply">APPLY!!</h1>
                <label class="first">Firstname </label>
                <input class="namebox" placeholder="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <label class="last">Lastname</label>
                <input class="namebox" placeholder="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br></br>
                <label class="lbl">Email</label><br></br>
                <input class="box" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label class="lbl">Phone Number</label><br></br>
                <input class="box" placeholder="Phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /><br></br>
                <label class="lbl">Location</label><br></br>
                <input class="box" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /><br></br>
                <label class="lbl">Startup stage</label><br></br>
                <select class="box" value={stage} onChange={(e) => setStage(e.target.value)}>
                    <option value="none" selected disabled hidden>Select</option>
                    <option value="Pre-Idea Stage">Pre-Idea Stage</option>
                    <option value="Idea Stage">Idea Stage</option>
                    <option value="Prototyping Stage">Prototyping Stage</option>
                    <option value="MVP/Early Market">MVP/Early Market</option>
                </select><br></br>
                <label class="lbl">Select Industry</label><br></br>
                <select class="box" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option value="none" selected disabled hidden>Select</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Tourism">Tourism</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Education">Education</option>
                    <option value="Services">Services</option>
                    <option value="Textiles">Textiles</option>
                    <option value="others">others</option>
                </select><br></br>
                <label class="lbl">What is your Role?</label><br></br>
                <select class="box" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="none" selected disabled hidden>Select</option>
                    <option value="Founder">Founder</option>
                    <option value="TeamLeader">Team Leader</option>
                    <option value="Investor">Investor</option>
                    <option value="Mentor">Mentor</option>
                    <option value="other">other</option>
                </select><br></br>
                <label class="lbl">How many Team members?</label><br></br>
                <select class="box" value={members} onChange={(e) => setMembers(e.target.value)}>
                    <option value="none" selected disabled hidden>Select</option>
                    <option value="Just me">Just me</option>
                    <option value="2 to 5 people">2 to 5 people</option>
                    <option value="more than 5">more than 5</option>
                </select><br></br>
                <label class="lbl">Idea of the Startup</label><br></br>
                <textarea rows="5" cols="102" value={idea} onChange={(e) => setIdea(e.target.value)} /><br></br>
                <center>
                    <button class="b1" type="submit" onClick={() => newFund()}>S U B M I T </button >
                </center>

            </form>

        </div>
    )

}
export default Fundsform;









