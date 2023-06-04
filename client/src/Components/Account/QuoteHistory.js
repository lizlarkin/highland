import React, { useEffect, useState, useContext } from 'react';
import './Account.css';
import axios from "axios";
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
import NavContext from "../../Context/NavContext";
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const QuoteHistory = () => {

    const { userData } = useContext(UserContext);
    const { getCartQuantity } = useContext(NavContext);
    const history = useHistory();

    const quoteHistStyles = {
        mainCard: {
            marginBottom: "3%"
        },
        historyKey: {
            fontWeight: "500",
            marginRight: "1%"
        },
        requoteBtn: {
            float: "right",
            width: "20%",
            margin: "0% 2% 2% 0%"
        }
    }

    const [allQuoteRequests, setAllQuoteRequests] = useState([]);
    const [histNum, setHistNum] = useState(5);
    const [userNum, setUserNum] = useState(); 

    // Show next 5 items of quote history
    const showNextHistory = () => {
        setHistNum(histNum + 5)
    }

    const copyCart = {
        model: "",
        name: "",
        version: "",
        config: "",
        qty: "",
        acc: [],
        userId: "", 
    }

    const reQuote = (e) => {
        copyCart.model = (e.target.getAttribute('data-model'));
        copyCart.name = (e.target.getAttribute('data-name'));
        copyCart.version = (JSON.parse(e.target.getAttribute('data-version')));
        copyCart.config = JSON.parse((e.target.getAttribute('data-config')));
        copyCart.qty = (e.target.getAttribute('data-qty'));
        copyCart.acc = JSON.parse((e.target.getAttribute('data-acc')));
        copyCart.userId = userData.user.id;
        console.log(copyCart)
    }

    const addToCart = async () => {
            try {
                const authToken = localStorage.getItem("auth-token");
                await axios.post("/cart", 
                    copyCart, 
                    { headers: { "x-auth-token": authToken },
                });
                // Update Context
                getCartQuantity()
                // Redirect to cart page
                history.push("/Cart")     
            } catch (error) {
                console.log(error)
            } 
    }

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        (async () => {
            try {
                const allQuotes = await axios.get(`/quotes/${histNum}`, {
                    cancelToken: source.token,
                    headers: { "x-auth-token": localStorage.getItem("auth-token") },
                });
                setAllQuoteRequests(allQuotes.data)
                console.log("here all quote requests:", allQuoteRequests)
                setUserNum(userData.user.quoteNum)
            } catch (error) {
                console.log("error getting quote history", error)   
            }
        }) ();
        
        return () => {
            source.cancel();
        }
    }, [histNum])

    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 heading">
                    {allQuoteRequests.length>0?
                    <h3>Quote History</h3>
                    :<h3>No quote history to display.</h3>}
                    
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {/* {allQuoteRequests.length>0?
                      allQuoteRequests.map((quote, idx) => (
                            <div key={idx} className="card" style={quoteHistStyles.mainCard}>
                                <div className="card-header">
                                    <h5>{((new Date(quote.date)).toString()).slice(0,21)}</h5>
                                </div>
                                {quote.products[0].map((item, idx) => (
                                <div className="card-body">
                                    <div key={idx} className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={ProductPhotos[ProductPhotos.findIndex(search => search[0].includes(item.model))][0]} 
                                                className="img-fluid rounded-start" 
                                                alt={item.name}/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{
                                                        item.model+"-"+
                                                        item.version.join("")
                                                        +" "
                                                        +item.name} 
                                                    </h5>
                                                    {item.qty>0?
                                                        <li key={idx} className="list-group-item list-group-item-light">
                                                            <span style={quoteHistStyles.historyKey}>Quantity:</span>
                                                            {item.qty}</li>
                                                    :null}
                                                    {item.config.length>0?
                                                    <li className="list-group-item list-group-item-light"> 
                                                        <span style={quoteHistStyles.historyKey}>Configuration:</span>
                                                        {" " + item.config.filter(x=> !!x).join(", ")}
                                                    </li>
                                                    :null}
                                                    {item.acc.length>0?
                                                    <ul className="list-group-item list-group-item-light">
                                                        <ul className="list-group list-group-flush">
                                                            <span style={quoteHistStyles.historyKey}>Accessories:</span>
                                                        {Object.entries(item.acc[0]).map((accessory, idx) => (
                                                            <li className="list-group-item list-group-item-light" key={idx}>
                                                                {accessory[0]+": " + accessory[1][0]}
                                                                <span className="badge bg-light text-dark">Quantity: {accessory[1][1]}</span>
                                                            </li>
                                                        ))}
                                                        </ul>
                                                    </ul>
                                                    :null}
                                                </div>
                                                <button onClick={reQuote} 
                                                        type="button"
                                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                        style={quoteHistStyles.requoteBtn} 
                                                        data-model={item.model}
                                                        data-name={item.name}
                                                        // data-version={item.version.join("")}
                                                        data-version={JSON.stringify(item.version.join(""))}
                                                        data-config={JSON.stringify(item.config)}
                                                        data-qty={item.qty}
                                                        data-acc={JSON.stringify(item.acc)}
                                                        className="btn btn-outline-primary">
                                                            Quote Again
                                                </button>
                                          
                                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Quote Added</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Your quote has been added to the cart. 
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button onClick={addToCart} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                                   </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                       ))
                    :null} */}
                </div>
                <div className="col-md-1"></div>
            </div>
            {userNum>histNum?
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <button onClick={showNextHistory} type="button" className="btn btn-outline-secondary btn-sm">Show Additional History</button>
                    </div>
                </div>
            :null}
        </div>
    )
}

export default QuoteHistory
