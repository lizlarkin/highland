import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";


const ProductQuote = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
    }, [userData.user, history])



    return (
        <div >

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">
                
                <div className="row">


                </div>

                <div className="row">

                </div>

            </div>

        </div>

    )
}

export default ProductQuote
