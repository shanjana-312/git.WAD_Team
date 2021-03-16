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
            <div className="form2-container">
                <span className="close2-btn">
                    x
                </span>
                {!isSubmitted ? <FormLogin submitform={submitform} /> : <Formsuccess />}
            </div>
        </>
    )
}

export default Form2
