import React, { useState, useEffect } from "react";
import "./Fundsform.css";
const Fundsform = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [location, setLocation] = useState("");
    const [stage, setStage] = useState("");
    const [industry, setIndustry] = useState("");
    const [role, setRole] = useState("");
    const [members, setMembers] = useState("");
    const [idea, setIdea] = useState("");

    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    }
    return (
        <div className="funds">
            <form className="fundsform" onSubmit={handleSubmit}>
                <h1>Apply!!</h1>
                <label>Firstname </label>
                <input placeholder="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br></br>
                <label>Lastname</label>
                <input placeholder="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br></br>
                <label>Email</label>
                <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label>Phone Number</label>
                <input placeholder="Phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /><br></br>
                <label>Location</label>
                <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /><br></br>
                <label>Startup stage</label>
                <select onChange={(e) => setStage(e.target.value)}>
                    <option value="Pre-Idea Stage">Pre-Idea Stage</option>
                    <option value="Idea Stage">Idea Stage</option>
                    <option value="Prototyping Stage">Prototyping Stage</option>
                    <option value="MVP/Early Market">MVP/Early Market</option>
                </select><br></br>
                <label>Select Industry</label>
                <select onChange={(e) => setIndustry(e.target.value)}>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Tourism">Tourism</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Education">Education</option>
                    <option value="Services">Services</option>
                    <option value="Textiles">Textiles</option>
                    <option value="others">others</option>
                </select><br></br>
                <label>What is your Role?</label>
                <select onChange={(e) => setRole(e.target.value)}>
                    <option value="Founder">Founder</option>
                    <option value="TeamLeader">Team Leader</option>
                    <option value="Investor">Investor</option>
                    <option value="Mentor">Mentor</option>
                    <option value="other">other</option>
                </select><br></br>
                <label>How many Team members?</label>
                <select onChange={(e) => setMembers(e.target.value)}>
                    <option value="Just me">Just me</option>
                    <option value="2 to 5 people">2 to 5 people</option>
                    <option value="more than 5">more than 5</option>
                </select><br></br>
                <label>Idea of the Startup</label><br></br>
                <textarea onChange={(e) => setIdea(e.target.value)} /><br></br>
                <button type="submit">Submit </button >
            </form>
        </div>
    )

}
export default Fundsform;