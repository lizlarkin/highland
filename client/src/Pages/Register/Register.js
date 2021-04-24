import React, { useState } from 'react'
import axios from 'axios';
import '../Login/formStyles.css'

const Register = () => {

    const [form, setForm] = useState();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value, optIn: e.target.checked });
    };

    // const validateInputs = (e) => {
    //     let emailInput = document.getElementById("email-input");
    //     let orgInput = document.getElementById("org-input");
    //     let passInput = document.getElementById("password-input");
    //     let checkInput = document.getElementById("check-input");
    //     let firstInput = document.getElementById("first-input");
    //     let lastInput = document.getElementById("last-input");
    //     let addressInput = document.getElementById("address-input");
    //     let cityInput = document.getElementById("city-input");
    //     let stateInput = document.getElementById("state-input");
    //     let countryInput = document.getElementById("country-input");
    //     let phoneInput = document.getElementById("phone-input");
    //     let warningEl = document.createElement("span");
    //     let formLabel = document.querySelector(".form-label");

    //     if (emailInput.value === null || emailInput.value === "") {
    //         let formLabel = document.querySelector("#email-label");
    //         formLabel.append(warningEl);
    //         warningEl.textContent = (" *Please enter a valid email");
    //         return
    //     } else if (orgInput.value === null || orgInput.value === "") {
    //         let formLabel = document.querySelector("#org-label");
    //         formLabel.append(warningEl);
    //         warningEl.textContent = (" *Please enter a valid organization");
    //         return
    //     } else if (passInput.value === null || passInput.value === "") {
    //         alert('missing password');
    //         return
    //     } else if (checkInput.value === null || checkInput.value === "") {
    //         alert('missing password check');
    //         return
    //     } else if (checkInput.value !== passInput.value) {
    //         alert ('passwords do not match')
    //         return
    //     } else if (firstInput.value === null || firstInput.value === "") {
    //         alert('missing first name');
    //         return
    //     } else if (lastInput.value === null || lastInput.value === "") {
    //         alert("missing last name");
    //         return
    //     } else if (addressInput.value === null || addressInput.value === "") {
    //         alert("missing address");
    //         return
    //     } else if (cityInput.value === null || cityInput.value === "") {
    //         alert("missing city");
    //         return
    //     } else if (stateInput.value === null || stateInput.value === "") {
    //         alert("missing state");
    //         return
    //     } else if (countryInput.value === null || countryInput.value === "") {
    //         alert("missing country");
    //         return
    //     } else if (phoneInput.value === null || phoneInput.value === "") {
    //         alert("missing phone");
    //         return
    //     }
    // }
    

    const onSubmit = async (e) => {
        e.preventDefault();
        // validateInputs();
        try {
            const newUser = await axios.post("/users/register", form);
            console.log(newUser);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div>
            <h1 class = "form-heading">Register</h1>

            <div class = "row">
                <div class = "col-md-2"></div>
                <div class = "col-md-8 form-box">
                    <form onSubmit={onSubmit} class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4 (required)" class="form-label" id="email-label">Email</label>
                            <input onChange={onChange} type="email" class="form-control" id="email-input" name="email" required />
                        </div>
                        <div class="col-md-6">
                            <label for="text (required)" class="form-label" id="org-label">Organization</label>
                            <input onChange={onChange} type="text" class="form-control" placeholder="Company Name" name="organization" id="org-input" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword8 (required)" class="form-label">Password</label>
                            <input onChange={onChange} type="password" class="form-control" id="password-input" placeholder="8 characters minimum" name="password" minlength="8" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword8" class="form-label">Re-enter Password</label>
                            <input onChange={onChange} type="password" class="form-control" id="check-input" name="passwordCheck" />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label (required)">First Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="firstName" id="first-input" required />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label (required)">Last Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="lastName" id="last-input" required />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress (required)" class="form-label">Address</label>
                            <input onChange={onChange} type="text" class="form-control" id="address-input" placeholder="1234 Main St" name="street" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity (required)" class="form-label">City</label>
                            <input onChange={onChange} type="text" class="form-control" id="city-input" name="city" required />
                        </div>
                        <div class="col-md-3">
                            <label for="inputState (required)" class="form-label">State</label>
                            <input onChange={onChange} type="text" class="form-control" id="state-input" name="state" required />
                        </div>
                        <div class="col-md-3">
                            <label for="inputCountry (required)" class="form-label">Country</label>
                            <input onChange={onChange} type="text" class="form-control" id="country-input" name="country" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhone (required)" class="form-label">Phone</label>
                            <input onChange={onChange} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" class="form-control" id="phone-input" name="phone" required/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                            <input onChange={onChange} class="form-check-input" type="checkbox" id="gridCheck" name="optIn"/>
                            <label class="form-check-label" for="gridCheck">
                                Opt In to Semi-annual Mailings
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <div class = "col-md-2"></div>
            </div>

        </div>
    )
}

export default Register
