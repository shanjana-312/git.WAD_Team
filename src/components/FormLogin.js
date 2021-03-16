import React from 'react'
import useForm from './useForm'
import Validate from './Validateinfo'
import './Form2.js'
import { Link } from "react-router-dom"
function FormLogin({ submitform }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitform, Validate);
    return (
        <div className="form-content-right">
            <form className="formlogin" onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        UserName:
                    </label>
                    <input id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />{errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />{errors.password && <p>{errors.password}</p>}
                </div>

                <button className="form-input-btn" type="login">Login</button>
                <span className="form-input-Signup">
                    No account? Dont worry, Create one 😉! <Link to="/sign-up">Signup</Link>
                </span>
            </form>
        </div>
    );
}
export default FormLogin

