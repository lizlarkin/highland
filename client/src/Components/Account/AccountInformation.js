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
    //     (1): Fix Delete User
    //     (6): refresh pr confirm when changes are made
    //     (2): handle empty fields without making user re-fill all fields
    //     (3): phone validation

    // Variable for basic user data
    const [form, setForm] = useState({});

    // Set state with basic user data
    const editBasicUser = (e) => {
        setForm({...form, [e.target.name]: e.target.value});  
    }

    // Function to Save basic user data
    const saveUser = async () => {
        try {
            const updatedUser = await axios.put(`/users/updateBasicUser/${userData.user.id}`, form)
            setUserData({...userData, form})
            alert('Update Successful')
        } catch (error) {
            console.log(error)
        }
    }

    // Function to switch Opt-In to true/false when subscribe/unsubscribe button is clicked
    const saveOpt = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`/users/updateOpt/${userData.user.id}`, {optIn: !userData.user.optIn})
        } catch (error) {
            console.log(error)
        }
    }

    // Variable for Password Update
    const [pass, setPass] = useState({});

    // Function to set Password State
    const editPass = (e) => {
        setPass({...pass, [e.target.name]: e.target.value});
    }

    // Function to save new password
    const savePass = async (e) => {
        console.log(pass)
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`/users/updatePass/${userData.user.id}`, {pass})
            alert("Password successfully updated!")
        } catch (error) {
            alert(error.response.data.msg)
        }
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
            {/* Update Basic User Data Section */}
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 heading">
                        <h3>Profile Information</h3>
                    </div>
                <div className="col-md-4"></div>
            </div>

            <form className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">First Name</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.first} name="first"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Last Name</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.last} name="last"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">Organization</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.org} name=""/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Phone</label>
                    <input onChange={editBasicUser} type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"  className="form-control" placeholder={userData.user.phone} name="phone"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
                <div className="col-md-1"></div>
                <div class="col g-4">
                    <label className="form-label">Address</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.street} name="street"/>
                </div>
                <div class="col g-4">
                    <label className="form-label">City</label>
                    <input onChange={editBasicUser} type="text" className="form-control" placeholder={userData.user.city} name="city"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
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
            </form>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={saveUser}type="button" className="btn btn-outline-success" style={accountInfoStyles.btn}>Update Profile</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            {/* OPT-IN SECTION */}
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
                        You are currently {userData.user.optIn?"subscribed to":"unsubscribed from"} Highland's newsletter.
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={saveOpt} type="button" className="btn btn-outline-primary" style={accountInfoStyles.btn}>{userData.user.optIn?"Unsubscribe":"Subscribe"}</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            {/* Update Password Section */}
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 heading">
                        <h3>Change Password</h3>
                    </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col g-3">
                    <label className="form-label">Existing Password</label>
                    <input onChange={editPass} type="password" className="form-control" name="oldPass"/>
                </div>
                <div className="col g-3">
                    <label className="form-label">New Password</label>
                    <input onChange={editPass} type="password" className="form-control" name="newPass"/>
                </div>
                <div className="col g-3">
                    <label className="form-label">Confirm New Password</label>
                    <input onChange={editPass} type="password" className="form-control" name="checkPass"/>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={savePass} type="button" className="btn btn-outline-danger" style={accountInfoStyles.btn}>Update Password</button>
                </div>
                <div className="col-md-5"></div>
            </div>

        </div>
    )
}

export default AccountInformation
