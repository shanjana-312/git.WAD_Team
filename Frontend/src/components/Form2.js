import React, { useState } from 'react'
import FormLogin from './FormLogin'
// import Formsuccess from './Formsuccess'
import './Form2.css'
import { Link } from 'react-router-dom';
function Form2() {
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // function submitform() {
    //     setIsSubmitted(true);
    // }
    return (
        <>
            <div className="form2-container">
                <span className="close2-btn">
                    <Link to="/" style={{ color: 'white', textDecoration: "none" }}>x</Link>
                </span>
                <FormLogin />
                {/* {!isSubmitted ? <FormLogin submitform={submitform} /> : <Formsuccess />} */}
            </div>
        </>
    )
}

export default Form2
