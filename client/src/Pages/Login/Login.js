import React, { useState, useContext, useEffect } from 'react';
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import axios from 'axios';
import './formStyles.css';

const Login = ( returnPath ) => {

    const [form, setForm] = useState();
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    const [errMsg, setErrMsg] = useState();

    // Hold previous page to redirect to after login
    let returnTo = returnPath.location.search.split("=")[1]

    // Show and hide password
    const [showPass, setShowPass] = useState(false);
    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    // Collect Inputs from Forms and set to State
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    // Login Function 
    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/users/login", form);
            
            if (!data.user.confirm) {
                history.push("/Pages/Confirm/Confirm")
            } else {
                setUserData({
                    token: data.token,
                    user: data.user,
                })
                
                localStorage.setItem("auth-token", data.token);
            };

        } catch (error) {
            setErrMsg(error.response.data.msg)
        }
    };

    useEffect(() => {
        if (userData.user) history.push(returnTo===undefined?`/Account`:returnTo);
    }, [userData, history])

    return (
        <div>
            <h1 className = "form-heading">Login</h1>
            {errMsg?
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <div className="alert alert-danger error-alert" role="alert">
                        {errMsg}
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            :
            null}
            
            <div className ="row">
                <div className="col-md-4"></div>
                <div className ="col-md-4 form-box">
                    <form onSubmit={submitLogin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group form-input">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={onChange} type={showPass?"text":"password"} className="form-control" id="exampleInputPassword1" placeholder="Password" name="pass"/>
                        <i onClick={toggleShowPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary form-input submit-btn">Submit</button>
                        </div>
                    </div>
                    </form>

                    <div className="row">
                        <div className="col-md-6">
                            <Link to ="/Register">
                                <button type="submit" className="btn btn-outline-primary form-input submit-btn">Register</button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to ="/ForgotPassword">
                                <button type="submit" className="btn btn-outline-primary form-input submit-btn">Forgot Password</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Login
