import React, { useState, useContext, useEffect } from 'react';
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../Login/formStyles.css';

const Register = () => {

    const [form, setForm] = useState();
    const [errMsg, setErrMsg] = useState();
    const { userData } = useContext(UserContext);
    const history = useHistory();

    // Show and hide password
    const [showPass, setShowPass] = useState(false);
    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const [showCheckPass, setShowCheckPass] = useState(false);
    const toggleShowCheckPass = () => {
        setShowCheckPass(!showCheckPass)
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value, optIn: e.target.checked });
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await axios.post("/users/register", form);
            history.push("/Confirm")
        } catch (error) {
            setErrMsg(error.response.data.msg)
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
                            <label htmlFor="inputEmail4" className="form-label" id="email-label">Email<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="email" className="form-control" id="email-input" name="email"/>

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="text" className="form-label" id="org-label">Organization<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="org" id="org-input"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword8" className="form-label">Password<span className="asterisk">*</span></label>
                            <input onChange={onChange} type={showPass?"text":"password"} className="form-control" id="password-input" placeholder="8 characters minimum" name="pass" minLength="8"/>
                            <i onClick={toggleShowPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword8" className="form-label">Re-enter Password<span className="asterisk">*</span></label>
                            <input onChange={onChange} type={showCheckPass?"text":"password"} className="form-control" id="check-input" name="passCheck" minLength="8" placeholder="8 characters minimum"/>
                            <i onClick={toggleShowCheckPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">First Name<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="first" id="first-input"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last Name<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" name="last" id="last-input"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input onChange={onChange} type="text" className="form-control" id="address-input" name="street"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="city-input" name="city"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <input onChange={onChange} type="text" className="form-control" id="state-input" name="state"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputCountry" className="form-label">Country<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="text" className="form-control" id="country-input" name="country"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone<span className="asterisk">*</span></label>
                            <input onChange={onChange} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="form-control" id="phone-input" name="phone"/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input onChange={onChange} className="form-check-input" type="checkbox" id="gridCheck" name="optIn"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Opt In to Semi-annual Mailings
                            </label>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            {errMsg?
                            <div class="alert alert-danger error-alert" role="alert">
                                {errMsg}
                            </div>
                            :null}
                        </div>
                    </form>
                </div>
                <div className = "col-md-2"></div>
            </div>

        </div>
    )
}

export default Register
