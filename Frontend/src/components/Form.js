import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
// import Formsuccess from './Formsuccess'
import './Form.css'
import { Link } from 'react-router-dom'
function Form() {
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // function submitform() {
    //     setIsSubmitted(true);
    // }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">
                    <Link to="/" style={{ color: 'white', textDecoration: "none" }}>x</Link>
                </span>
                {/* {!isSubmitted ? <FormSignUp submitform={submitform} /> : <Formsuccess />} */}
                <FormSignUp />
            </div>
        </>
    )
}

export default Form
