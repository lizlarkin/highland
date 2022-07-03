import React, { useState, useContext, useEffect } from 'react';
import './Account.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const AccountInformation = () => {

    const accountInfoStyles = {
        btn: {
            width: "20%"
        }
    }

    // TO DO:
    //     (0): Edit basic user data
    //     (1): Fix Delete User
    //     (2): Password change
    //     (3): validation
    //     (4): Email re-verify? 
    //     (5): phone
    //     (6): edit all at once or one at a time?

    const history = useHistory();
    const { userData, setUserData, checkLoggedIn } = useContext(UserContext);

    const [edit, setEdit] = useState({
        firstEl: false,
        lastEl: false,
        orgEl: false,
        emailEl: false,
        phoneEl: false,
        optInEl: false,
        streetEl: false,
        cityEl: false, 
        stateEl: false,
        countryEl: false,
    })

    const toggleEdit = (e) => {
        setEdit({...edit, [e.target.name]: true});
    }

    const [form, setForm] = useState({});

    const editUser = (e) => {
        setForm({...form, [e.target.name]: e.target.value});  
    }

    const handleOpt = (e) => {
        console.log("opt in value: ", e.target.value)
        setForm({...form, optIn: e.target.value});
    }

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`/users/updateUser/${userData.user.id}`, form)
            setEdit({...edit, [e.target.name]: false});
            setUserData({...userData, form})
            console.log("success update info", updatedUser);
        } catch (error) {
            console.log(error)
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
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 heading">
                    <h3>Account Information</h3>
                </div>
                <div className="col-md-4"></div>
            </div>

            {/* <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div class="form-floating mb-3">
                        <input onClick={toggleEdit} name="firstEl" type="text" class="form-control" id="floatingInput" value={edit.firstEl?null:userData.user.firstName}/>
                        <label for="floatingInput">First Name {edit.firstEl?"true":"false"}</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
            </div> */}

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    
                    <div className="input-group mb-3">
                        {edit.firstEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="First Name" name="firstName" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                        <button onClick={saveUser} className="btn btn-outline-primary" type="button" name="firstEl" style={accountInfoStyles.btn}><i className="fa-duotone fa-floppy-disk"></i></button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"First Name: "+userData.user.firstName} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="firstEl" style={accountInfoStyles.btn}><i className="fa-duotone fa-pen-to-square"></i></button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.lastEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="Last Name" name="lastName" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                        <button onClick={saveUser} className="btn btn-outline-primary" type="button" name="lastEl" style={accountInfoStyles.btn}><i className="fa-duotone fa-floppy-disk"></i></button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Last Name: "+userData.user.lastName} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="lastEl" style={accountInfoStyles.btn}><i className="fa-duotone fa-pen-to-square"></i></button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.orgEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="Organization" name="organization" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="orgEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Organization: "+userData.user.organization} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="orgEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.emailEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="Email" name="email" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="emailEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Email: "+userData.user.email} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="emailEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.phoneEl?
                        <>
                        <input onChange={editUser} type="tel" className="form-control" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" placeholder="Phone" name="phone" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="phoneEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Phone: "+userData.user.phone} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="phoneEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.optInEl?
                        <>
                        <select onChange={handleOpt} name="optIn" className="form-select" aria-label="Default select example">
                            <option>Change Opt-In Election</option>
                            <option value="true">Opt In to Communications</option>
                            <option value="false">Opt Out of Communications</option>
                        </select>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="optInEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={userData.user.optIn?"Opt Into Communications: Yes":"Opt Into Communications: No"} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="optInEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.streetEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="Street Address" name="street" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="streetEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Street: "+userData.user.street} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="streetEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.cityEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="City" name="city" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="cityEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"City: "+userData.user.city} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="cityEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.stateEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="State" name="state" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="stateEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"State: "+userData.user.state} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="stateEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        {edit.countryEl?
                        <>
                        <input onChange={editUser} type="text" className="form-control" placeholder="Country" name="country" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button onClick={saveUser} className="btn btn-outline-danger" type="button" name="countryEl" style={accountInfoStyles.btn}>Save</button>
                        </>
                        :
                        <>
                        <input type="text" className="form-control" placeholder={"Country: "+userData.user.country} aria-label="Recipient's username" aria-describedby="button-addon2" disabled/>
                        <button onClick={toggleEdit} className="btn btn-outline-success" type="button" name="countryEl" style={accountInfoStyles.btn}>Edit</button>
                        </>
                        }
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <button className="btn btn-outline-danger" onClick={deleteUser}>Delete Account</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default AccountInformation
