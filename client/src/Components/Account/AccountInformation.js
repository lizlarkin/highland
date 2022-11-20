import React, { useState, useContext, useEffect } from 'react';
import './Account.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const AccountInformation = () => {
    
    const history = useHistory();
    const { userData, setUserData, checkLoggedIn } = useContext(UserContext);

    const accountInfoStyles = {
        btn: {
            width: "100%"
        },
    }
    // TO DO:
    //     (0): Edit basic user data - DONE
    //     (.5): Edit opt-in
    //     (1): Fix Delete User
    //     (2): Password change
    //     (3): validation
    //     (4): Email re-verify? 
    //     (5): phone
    //     (6): refresh pr confirm when changes are made

    // Variable for basic user data
    const [form, setForm] = useState({});

    // Set state with basic user data
    const editBasicUser = (e) => {
        setForm({...form, [e.target.name]: e.target.value});  
    }

    // Save basic user data
    const saveUser = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`/users/updateBasicUser/${userData.user.id}`, form)
            setUserData({...userData, form})
            console.log("success update info", updatedUser);
        } catch (error) {
            console.log(error)
        }
    }

    // Set Opt-In to true/false when subscribe/unsubscribe button is hit
    const editOpt = async (e) => {
        let newPreference = !e.target.value
        console.log(newPreference)
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`/users/updateOpt/${userData.user.id}`)
            setUserData({...userData, optIn: newPreference})
            console.log(updatedUser)
        } catch (error) {
            console.log(error)
        }
    }
    // prevShowForm => !prevShowForm

    const editPass = (e) => {
        console.log('edit pass')
    }

    const deleteUser = async () => {
        try {
            await axios.delete("/users", {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
        });
            history.push("/Home");
        } catch (error) {
            console.log("error deleting user", error)
        }
    }
    
    useEffect(() => {
        checkLoggedIn();

    }, [userData])
    

    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 heading">
                        <h3>Profile Information</h3>
                    </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">First Name</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.firstName} name="firstName"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Last Name</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.lastName} name="lastName"/>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">Organization</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.organization} name="organization"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Phone</label>
                    <input onChange={editBasicUser} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"  className="form-control" placeholder={userData.user.phone} name="phone"/>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div class="col g-4">
                    <label className="form-label">State</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.state} name="state"/>
                </div>
                <div class="col g-4">
                    <label className="form-label">Country</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.country} name="country"/>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={saveUser}type="button" className="btn btn-outline-success" style={accountInfoStyles.btn}>Update Profile</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 heading">
                        <h3>Subscription Information</h3>
                    </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 d-flex justify-content-center">
                    <div>
                        You are currently {userData.user.optIn?"subscribed":"unsubscribed"} to Highland's newsletter.
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={editOpt} type="button" className="btn btn-outline-primary" value={userData.user.optIn} style={accountInfoStyles.btn}>{userData.user.optIn?"Unsubscribe":"Subscribe"}</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 heading">
                        <h3>Password Reset</h3>
                    </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div class="col g-4">
                    <label className="form-label">New Password</label>
                    <input onChange={editPass} type="password" className="form-control" name="firstName"/>
                </div>
                <div class="col g-4">
                    <label className="form-label">Confirm New Password</label>
                    <input onChange={editPass} type="password" className="form-control" name="lastName"/>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-outline-danger" style={accountInfoStyles.btn}>Update Password</button>
                </div>
                <div className="col-md-5"></div>
            </div>

        </div>
    )
}

export default AccountInformation
