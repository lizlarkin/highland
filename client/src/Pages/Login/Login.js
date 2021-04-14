import React, { useState, useContext, useEffect } from 'react';
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './formStyles.css';

const Login = () => {

    const [form, setForm] = useState();
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/users/login", form);
            console.log(data);

            setUserData({
                token: data.token,
                user: data.user,
            })

            localStorage.setItem("auth-token", data.token);

            history.push("/Pages/Home");

    
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        console.log(userData);
    }, [])

    return (
        <div>
            <h1 className = "form-heading">Login</h1>

            <div className ="row">
                <div className="col-md-4"></div>
                <div className ="col-md-4 form-box">
                    <form onSubmit={submitLogin}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input  onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group form-input">
                        <label for="exampleInputPassword1">Password</label>
                        <input  onChange={onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary form-input">Submit</button>
                    <Link to ="/pages/register">
                        <button type="submit" className="btn btn-primary form-input" id="reg-btn">Register</button>
                    </Link>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Login
