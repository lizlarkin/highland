import React, { useState } from 'react'
import axios from 'axios';
import '../Login/formStyles.css'

const Register = () => {


    const [form, setForm] = useState();

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value, optIn: e.target.checked });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
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
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input onChange={onChange} type="email" class="form-control" id="inputEmail4" name="email"/>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Organization</label>
                            <input onChange={onChange} type="text" class="form-control" placeholder="Company Name" name="organization"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword8" class="form-label">Password</label>
                            <input onChange={onChange} type="password" class="form-control" id="inputPassword8" placeholder="8 characters minimum" name="password"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword8" class="form-label">Re-enter Password</label>
                            <input onChange={onChange} type="password" class="form-control" id="inputPassword8" name="passwordCheck" />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">First Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="firstName"/>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Last Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="lastName"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input onChange={onChange} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="street"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input onChange={onChange} type="text" class="form-control" id="inputCity" name="city"/>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">State</label>
                            <input onChange={onChange} type="text" class="form-control" id="inputState" name="state"/>
                        </div>
                        <div class="col-md-3">
                            <label for="inputZip" class="form-label">Country</label>
                            <input onChange={onChange} type="text" class="form-control" id="inputCountry" name="country"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhone" class="form-label">Phone</label>
                            <input onChange={onChange} type="tel" class="form-control" id="inputPhone" name="phone"/>
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
