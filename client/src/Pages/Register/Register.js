import React, { useState, useContext, useEffect } from 'react'
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../Login/formStyles.css'

const Register = () => {

    const [form, setForm] = useState();
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value, optIn: e.target.checked });
    };

    const passwordCheck = (e) => {
        let passInput = document.getElementById("password-input");
        let checkInput = document.getElementById("check-input");
        if (checkInput.value !== passInput.value) {
            alert ('Passwords do not match.')
            return
        }
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        passwordCheck();
        try {
            const newUser = await axios.post("/users/register", form);
            console.log(newUser);
            history.push("/Pages/Account")
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        if (userData.user) history.push("/Pages/Login");
    }, [userData, history])

    return (
        <div>
            <h1 className = "form-heading">Register</h1>

            <div className = "row">
                <div className = "col-md-2"></div>
                <div className = "col-md-8 form-box">
                    <form onSubmit={onSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4 (required)" className="form-label" id="email-label">Email</label>
                            <input onChange={onChange} type="email" className="form-control" id="email-input" name="email" required />
                        </div>
                        <div className="col-md-6">
                            <label for="text (required)" className="form-label" id="org-label">Organization</label>
                            <input onChange={onChange} type="text" className="form-control" placeholder="Company Name" name="organization" id="org-input" required />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword8 (required)" className="form-label">Password</label>
                            <input onChange={onChange} type="password" className="form-control" id="password-input" placeholder="8 characters minimum" name="password" minLength="8" required />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword8 (required)" className="form-label">Re-enter Password</label>
                            <input onChange={onChange} type="password" className="form-control" id="check-input" name="passwordCheck" minLength="8" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label (required)">First Name</label>
                            <input onChange={onChange} type="text" className="form-control" name="firstName" id="first-input" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label (required)">Last Name</label>
                            <input onChange={onChange} type="text" className="form-control" name="lastName" id="last-input" required />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress (required)" className="form-label">Address</label>
                            <input onChange={onChange} type="text" className="form-control" id="address-input" placeholder="1234 Main St" name="street" required />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity (required)" className="form-label">City</label>
                            <input onChange={onChange} type="text" className="form-control" id="city-input" name="city" required />
                        </div>
                        <div className="col-md-3">
                            <label for="inputState (required)" className="form-label">State</label>
                            <input onChange={onChange} type="text" className="form-control" id="state-input" name="state" required />
                        </div>
                        <div className="col-md-3">
                            <label for="inputCountry (required)" className="form-label">Country</label>
                            <input onChange={onChange} type="text" className="form-control" id="country-input" name="country" required/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPhone (required)" className="form-label">Phone</label>
                            <input onChange={onChange} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="form-control" id="phone-input" name="phone" required/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input onChange={onChange} className="form-check-input" type="checkbox" id="gridCheck" name="optIn"/>
                            <label className="form-check-label" for="gridCheck">
                                Opt In to Semi-annual Mailings
                            </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <div className = "col-md-2"></div>
            </div>

        </div>
    )
}

export default Register
