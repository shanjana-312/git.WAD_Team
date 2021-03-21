import React, { useEffect, useState } from 'react'
// import useForm from './useForm'
import Validateinfo from './Validateinfo'
import './Form.css'
import { Link } from "react-router-dom"
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
function FormSignUp() {
    // const { handleChange, values, handleSubmit, errors } = useForm(submitform, Validate);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(Validateinfo(values));
        setIsSubmitting(true);
    }
    const { username, email, password, password2 } = values;
    // const [token, setToken] = useCookies(['mytoken']);
    // const [isLogin, setLogin] = useState(true);
    let history = useHistory()
    // useEffect(() => {
    //     if (token['mytoken']) {
    //         history.push('/')
    //     }
    // }, [token])

    // const LoginBtn = () => {
    //     APIService.LoginUser({ username, password })
    //         .then(resp => setToken('mytoken', resp.token))
    //         .catch(error => console.log(error))
    // }
    const RegisterBtn = () => {
        APIService.RegisterUser({ username, password })
            .then(history.push('/'))
            .catch(error => console.log(error))
    }
    return (
        <div className="form-content-right">
            <form className="formsignup" onSubmit={handleSubmit}>
                <h1>
                    Create Account
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
                    <label htmlFor="email"
                        className="form-label">
                        Email:
                    </label>
                    <input id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />{errors.email && <p>{errors.email}</p>}
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
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password:
                    </label>
                    <input id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit" onClick={RegisterBtn}>Sign up</button>
                <span className="form-input-login">
                    Already have an account?<Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
}
export default FormSignUp

