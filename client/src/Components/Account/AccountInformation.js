import React, { useContext, useEffect } from 'react';
import './Account.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const AccountInformation = () => {

    const history = useHistory();
    const { userData } = useContext(UserContext);

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

    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 heading">
                    <h3>Account Information</h3>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                Form Here
            </div>
            <button onClick={deleteUser}>Delete Account</button>
            
        </div>
    )
}

export default AccountInformation
