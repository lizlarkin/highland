import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

const SuccessConfirm = (props) => {

    const confirmStyles = {
        marginTop: "10%",
    }

    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                await axios.post("/register", { token: props.match.params.token });
                setTimeout(() => {
                    history.push("/Login")
                }, 4000);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [history, props.match.params.token])

    return (
        <div className="row" style={confirmStyles}>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                Thank you for confirming your account! You will be redirected to login in a moment.
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default SuccessConfirm
