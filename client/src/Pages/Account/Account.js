import React, { useContext } from 'react';
import UserContext from "../../Context/UserContext";

const Account = (props) => {
    const { userData } = useContext(UserContext);
    console.log(userData);

    return (
        <div>
            <h1>Account</h1>
            {/* <h2>Hello, {userData.user.firstName} {userData.user.lastName}</h2> */}
            <button onClick={props.logout} type="submit" class="btn btn-primary">Logout</button>
        </div>
    )
}

export default Account
