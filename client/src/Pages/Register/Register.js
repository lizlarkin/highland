import React, { useState, useContext, useEffect } from 'react';
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../Login/formStyles.css';

const Register = () => {

    const [form, setForm] = useState();
    const { userData } = useContext(UserContext);
    const history = useHistory();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value, optIn: e.target.checked });
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await axios.post("/users/register", form);
            console.log(newUser);
            history.push("/Confirm")
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.msg);
        }
    };

    useEffect(() => {
        if (userData.user) history.push("/Login");
    }, [userData, history])

    return (
        <div>
            <h1 className = "form-heading">Register</h1>

            <div className = "row">
                <div className = "col-md-2"></div>
                <div className = "col-md-8 form-box">
                    <form onSubmit={onSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4 (required)" className="form-label" id="email-label">Email<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="email" className="form-control" id="email-input" name="email" required />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="text (required)" className="form-label" id="org-label">Organization<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="organization" id="org-input" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword8 (required)" className="form-label">Password<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="password" className="form-control" id="password-input" placeholder="8 characters minimum" name="password" minLength="8" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword8 (required)" className="form-label">Re-enter Password<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="password" className="form-control" id="check-input" name="passwordCheck" minLength="8" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label (required)">First Name<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="firstName" id="first-input" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label (required)">Last Name<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="lastName" id="last-input" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress (required)" className="form-label">Address<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="address-input" name="street" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity (required)" className="form-label">City<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="city-input" name="city" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState (required)" className="form-label">State<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="state-input" name="state" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputCountry (required)" className="form-label">Country<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="country-input" name="country" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone (required)" className="form-label">Phone<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="form-control" id="phone-input" name="phone" required/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input onChange={onChange} className="form-check-input" type="checkbox" id="gridCheck" name="optIn"/>
                            <label className="form-check-label" htmlFor="gridCheck">
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
