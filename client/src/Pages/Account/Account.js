import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

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

    const [showContent, setShowContent] = useState(false);

    const changeContent = (e) => {
        setShowContent(prevShowContent => !prevShowContent)
    }

    const [allQuoteRequests, setAllQuoteRequests] = useState([]);

    const getAllQuotes = async () => {
        try {
            const allQuotes = await axios.get(`/quotes/carts`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            setAllQuoteRequests(allQuotes.data)
            console.log("All Quotes: ", allQuotes);
        } catch (error) {
            console.log("error getting quote history", error)   
        }
    }

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
        getAllQuotes();
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
                            <button type="button" className="btn btn-outline-primary btn-lg">View Account Information</button>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic outlined example" style={accountStyles.navBtns}>
                            <button type="button" className="btn btn-outline-primary btn-lg">View Quote History</button>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>
            
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    {allQuoteRequests?
                        allQuoteRequests.length>0?
                        allQuoteRequests.map((quote, index) => (
                            <div className="card mb-3" key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{quote.model} (Quantity: {quote.quantity}) </h5>

                                        <p className="card-text">Description + required</p>

                                        {quote.optional.length>0?
                                        <>
                                        <p className="card-text">Additional Features:</p>
                                        <ul>
                                            {Object.entries(quote.optional[0]).map(((key, index) => (
                                            <li>{key}</li>
                                            )))}
                                        </ul>
                                        </>
                                        :null}
                                        
                                        {quote.accessories.length>0?
                                        <p className="card-text">Accessories: 
                                        <span>
                                        {Object.entries(quote.accessories[0]).map(((key, index) => (
                                        " "+ key[0] + " (Quantity: " + key[1] + "), "
                                        )))}
                                        </span>
                                        </p>                                      
                                        :null}
                                        
                                        <p className="card-text"><small className="text-muted">{quote.date}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                        :null
                    :null}
                </div>

                <div className="col-md-2"></div>
            </div>

            
        </div>
    )
}

export default Account
