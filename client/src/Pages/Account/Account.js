import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import QuoteHistory from './../../Components/Account/QuoteHistory';
import AccountInformation from '../../Components/Account/AccountInformation';

const Account = () => {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    const accountStyles = {
        navBtns: {
            width: "75%",
            marginTop: "4%",
            marginBottom: "4%"
        }
    }

    const [showContent, setShowContent] = useState({
        showAccount: false,
        showHistory: true,
    });

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
        // userData.user ? console.log(userData.user.firstName) : console.log("not available");
    }, [userData.user, history]);

    // ADD DESCRIPTIONS

    return (
        <div>
            <CategoryJumbotron 
                title={"Account"}
                text={"Hello, " + userData.user?.firstName + " " + userData.user?.lastName}
            />

            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic outlined example" style={accountStyles.navBtns}>
                            <button onClick={()=>setShowContent({showAccount:true})} type="button" className="btn btn-outline-primary btn-lg">View Account Information</button>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic outlined example" style={accountStyles.navBtns}>
                            <button onClick={()=>setShowContent({showHistory:true})} type="button" className="btn btn-outline-primary btn-lg">View Quote History</button>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>

            {showContent.showHistory && <QuoteHistory />}
            {showContent.showAccount && <AccountInformation />}
                        
        </div>
    )
}

export default Account
