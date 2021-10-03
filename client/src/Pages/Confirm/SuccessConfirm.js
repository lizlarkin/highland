import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

const SuccessConfirm = (props) => {

    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                await axios.post("/register", { token: props.match.params.token });
                history.push("/");
            } catch (error) {
                console.log(error)
            }
        })();
    }, [history, props.match.params.token])

    return (
        <div>
            Thank you for confirming your account. 
        </div>
    )
}

export default SuccessConfirm
