import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import QuoteHistory from '../../Components/QuoteHistory/QuoteHistory';
import UserContext from "../../Context/UserContext";

const Account = () => {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
        userData.user ? console.log(userData.user.firstName) : console.log("not available");
    }, [userData.user, history]);

    return (
        <div>
            <h1>Account</h1>
            <h2>Hello, {userData.user?.firstName} {userData.user?.lastName}</h2>
            <QuoteHistory />
        </div>
    )
}

export default Account
