import React from 'react'
import useForm from './useForm'
import Validate from './Validateinfo'
import './Form2.js'
import { Link } from "react-router-dom"
import Home from './pages/Home'
function FormLogin({ submitform }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitform, Validate);
    return (
        <div className="form2-content-right">
            <form className="formlogin" onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>
                <div className="form2-inputs">
                    <label htmlFor="username" className="form2-label">
                        UserName:
                    </label>
                    <input id="username"
                        type="text"
                        name="username"
                        className="form2-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />{errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form2-inputs">
                    <label htmlFor="password" className="form2-label">
                        Password:
                    </label>
                    <input id="password"
                        type="password"
                        name="password"
                        className="form2-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />{errors.password && <p>{errors.password}</p>}
                </div>

                <button className="form2-input-btn" type="login">Login</button>
                <span className="form2-input-Signup">
                    No account? Dont worry, Create one ! <Link to="/sign-up">Signup</Link>
                </span>
            </form>
        </div>
    );
}
export default FormLogin

