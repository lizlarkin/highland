import React, { useState, useContext, useEffect } from 'react';
import './Account.css';
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const AccountInformation = () => {
    
    // const history = useHistory();
    const { userData, setUserData, checkLoggedIn } = useContext(UserContext);

    const accountInfoStyles = {
        btn: {
            width: "100%"
        },
    }
    // TO DO:
    //     (1): Fix Delete User

    // Variable for basic user data
    const [form, setForm] = useState({});

    // Update User Data Status Management
    const [userErrMsg, setUserErrMsg] = useState();
    const [userSuccessMsg, setUserSuccessMsg] = useState();

    // Set state with basic user data
    const editBasicUser = (e) => {
        setForm({...form, [e.target.name]: e.target.value});  
    }

    // Function to Save basic user data
    const saveUser = async () => {
        setUserSuccessMsg();
        try {
            setUserErrMsg();
            await axios.put(`/users/updateBasicUser/${userData.user.id}`, form)
            setUserData({...userData, form})
            setUserSuccessMsg('User Data Successfully Updated')
            console.log('hit from accountinfo', form)
        } catch (error) {
            setUserSuccessMsg();
            setUserErrMsg(error.response.data.msg);
        }
    }

    // Function to switch Opt-In to true/false when subscribe/unsubscribe button is clicked
    const saveOpt = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/users/updateOpt/${userData.user.id}`, {optIn: !userData.user.optIn})
        } catch (error) {
            console.log(error)
        }
    }

    // Show and hide password
    const [showOldPass, setShowOldPass] = useState(false);
    const toggleShowOldPass = () => {
        setShowOldPass(!showOldPass)
    }

    const [showPass, setShowPass] = useState(false);
    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const [showCheckPass, setShowCheckPass] = useState(false);
    const toggleShowCheckPass = () => {
        setShowCheckPass(!showCheckPass)
    }

    // Password Status Management
    const [passErrMsg, setPassErrMsg] = useState();
    const [passSuccessMsg, setPassSuccessMsg] = useState();

    // Variable for Password Update
    const [pass, setPass] = useState({});

    // Function to set Password State
    const editPass = (e) => {
        setPass({...pass, [e.target.name]: e.target.value});
    }

    // Function to save new password
    const savePass = async (e) => {
        e.preventDefault();
        setPassSuccessMsg();
        try {
            setPassErrMsg();
            await axios.put(`/users/updatePass/${userData.user.id}`, {pass});
            setPassSuccessMsg("Password successfully updated!");
        } catch (error) {
            setPassErrMsg();
            setPassSuccessMsg();
            setPassErrMsg(error.response.data.msg);
        }
    }

    // const deleteUser = async () => {
    //     try {
    //         await axios.delete("/users", {
    //             headers: { "x-auth-token": localStorage.getItem("auth-token") }
    //     });
    //         history.push("/Home");
    //     } catch (error) {
    //         console.log("error deleting user", error)
    //     }
    // }
    
    useEffect(() => {
        checkLoggedIn();
    }, [userData, checkLoggedIn])
    

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
                    <label className="form-label">First Name<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.first} name="first"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Last Name<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.last} name="last"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">Organization<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.org} name="org"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Phone<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="tel"  className="form-control" defaultValue={userData.user.phone} name="phone"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">Address</label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.street} name="street"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">City<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.city} name="city"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <form className="row">
                <div className="col-md-1"></div>
                <div className="col g-4">
                    <label className="form-label">State</label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.state} name="state"/>
                </div>
                <div className="col g-4">
                    <label className="form-label">Country<span className="asterisk">*</span></label>
                    <input onChange={editBasicUser} type="text" className="form-control" defaultValue={userData.user.country} name="country"/>
                </div>
                <div className="col-md-1"></div>
            </form>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={saveUser}type="button" className="btn btn-outline-primary" style={accountInfoStyles.btn}>Update Profile</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            {userErrMsg?
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="alert alert-danger error-alert" role="alert">
                            {userErrMsg}
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            :
            null}

            {userSuccessMsg?
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="alert alert-success error-alert" role="alert">
                            {userSuccessMsg}
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            :
            null}

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
                    <label className="form-label">Existing Password<span className="asterisk">*</span></label>
                    <input onChange={editPass} type={showOldPass?"text":"password"} className="form-control" name="oldPass"/>
                    <i onClick={toggleShowOldPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                </div>
                <div className="col g-3">
                    <label className="form-label">New Password<span className="asterisk">*</span></label>
                    <input onChange={editPass} type={showPass?"text":"password"} className="form-control" name="newPass" placeholder="8 characters minimum"/>
                    <i onClick={toggleShowPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                </div>
                <div className="col g-3">
                    <label className="form-label">Confirm New Password<span className="asterisk">*</span></label>
                    <input onChange={editPass} type={showCheckPass?"text":"password"} className="form-control" name="checkPass" placeholder="8 characters minimum"/>
                    <i onClick={toggleShowCheckPass} className="fa-duotone fa-eye-slash pass-eye"></i>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row p-3">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <button onClick={savePass} type="button" className="btn btn-outline-primary" style={accountInfoStyles.btn}>Update Password</button>
                </div>
                <div className="col-md-5"></div>
            </div>

            {passSuccessMsg?
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="alert alert-success error-alert" role="alert">
                            {passSuccessMsg}
                        </div>
                    </div>
                <div className="col-md-4"></div>
                </div>
            :
            null}
            
            {passErrMsg?
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="alert alert-danger error-alert" role="alert">
                            {passErrMsg}
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            :
            null}


        </div>
    )
}

export default AccountInformation
