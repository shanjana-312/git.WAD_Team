import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import Formsuccess from './Formsuccess'
import './Form.css'
function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitform() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">
                    x
                </span>
                {!isSubmitted ? <FormSignUp submitform={submitform} /> : <Formsuccess />}
            </div>
        </>
    )
}

export default Form
