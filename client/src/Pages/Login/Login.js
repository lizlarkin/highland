import React, { useState } from 'react'
import axios from 'axios';
import './formStyles.css';

const Login = () => {

    const [form, setForm] = useState();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const loginRes = await axios.post("/users/login", form);
            console.log(loginRes);
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <div>
            <h1 class = "form-heading">Login</h1>

            <div class ="row">
                <div class="col-md-4"></div>
                <div class ="col-md-4 form-box">
                    <form onSubmit={submitLogin}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input  onChange={onChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group form-input">
                        <label for="exampleInputPassword1">Password</label>
                        <input  onChange={onChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                    </div>
                    <button type="submit" class="btn btn-primary form-input">Submit</button>
                    </form>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    )
}

export default Login
