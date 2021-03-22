import React, { useState, useEffect } from 'react'
import useForm from './useForm'
import Validate from './Validateinfo'
import './Form2.js'
import { Link } from "react-router-dom"
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import Button2 from './Button2.js'
function FormLogin({ submitform }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitform, Validate);
    const { username, email, password, password2, } = values;
    const [token, setToken] = useCookies(['mytoken']);
    const [isLogin, setLogin] = useState(true);
    let history = useHistory()
    useEffect(() => {
        if (token['mytoken'] != "undefined") {
            if (token['mytoken']) {
                history.push('/');
            }
        }
        else {
            alert("Enter correct username or password!!");
        }
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({ username, password })
            .then(resp => setToken('mytoken', resp.token))
            .catch(error => console.log(error))
    }
    // const logOut = () => {
    // }
    return (
        <div className="form2-content-right">
            <form className="formlogin" onSubmit={handleSubmit}>
                <h1>
                    Log In
                </h1>
                <div className="form2-inputs">
                    <label htmlFor="username" className="form2-label">
                        Username or email
                    </label>
                    <input id="username"
                        type="text"
                        name="username"
                        className="form2-input"
                        placeholder="Enter your username or email address"
                        value={values.username}
                        onChange={handleChange}
                    />{errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form2-inputs">
                    <label htmlFor="password" className="form2-label">
                        Password
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

                <button className="form2-input-btn" type="login" onClick={loginBtn}>Log In</button>
                {isLogin ? <span className="form2-input-Signup">
                    New to StartUp Club? Create an account to explore right away! <Link to="/sign-up" onClick={() => setLogin(false)}>Sign Up</Link>
                </span> : setLogin(true)}
            </form>
        </div>
    );
}
export default FormLogin

