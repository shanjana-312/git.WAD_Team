import React, { useState } from 'react'
import FormLogin from './FormLogin'
import Formsuccess from './Formsuccess'
import './Form2.css'
function Form2() {
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
                {!isSubmitted ? <FormLogin submitform={submitform} /> : <Formsuccess />}
            </div>
        </>
    )
}

export default Form2
