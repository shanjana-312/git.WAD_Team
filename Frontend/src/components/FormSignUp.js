import React from 'react'
import useForm from './useForm'
import Validate from './Validateinfo'
import './Form.css'
import { Link } from "react-router-dom"
function FormSignUp({ submitform }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitform, Validate);
    return (
        <div className="form-content-right">
            <form className="formsignup" onSubmit={handleSubmit}>
                <h1>
                    Create a new account
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
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
                    <label htmlFor="email"
                        className="form-label">
                        Email
                    </label>
                    <input id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email address"
                        value={values.email}
                        onChange={handleChange}
                    />{errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
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
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Re-enter your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">
                    Already have an account?<Link to="/login"> Login</Link>
                </span>
            </form>
        </div>
    );
}
export default FormSignUp

