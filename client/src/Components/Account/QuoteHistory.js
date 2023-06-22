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
    let modelArr = [];
    const [prodList, setProdList] = useState();

    // Number of Quotes to Display
    let [histNum, setHistNum] = useState(Math.min(5,userData.user.quoteNum))
    const showNextHistory = () => {
        setHistNum(Math.min(histNum+5, userData.user.quoteNum))
    }

    // Get Product Data based on Models in Quote History
    const getProdData = async () => {
        try {
            const prodData = await axios.get(`/products/models/${modelArr}`);
            setProdList(prodData.data)
        } catch (error) {
            console.log(error)
        }
    };

    // Re-Quote
    const copyCart = {
        prod: "",
        qty: "",
        acc: [],
        userId: "", 
    }

    const reQuote = (e) => {
        copyCart.prod = (e.target.getAttribute('data-prod'));
        copyCart.qty = (e.target.getAttribute('data-qty'));
        copyCart.acc = JSON.parse((e.target.getAttribute('data-acc')));
        copyCart.userId = userData.user.id;
    }

    const addToCart = async () => {
            try {
                const authToken = localStorage.getItem("auth-token");
                await axios.post("/cart", 
                    copyCart, 
                    { headers: { "x-auth-token": authToken },
                });
                // Update Context
                getCartQuantity();
                // Redirect to cart page
                history.push("/Cart");   
            } catch (error) {
                console.log(error)
            } 
    }

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        (async () => {
            try {
                const allQuotes = await axios.get(`/quotes`, {
                    cancelToken: source.token,
                    headers: { "x-auth-token": localStorage.getItem("auth-token") },
                });
                setAllQuoteRequests(allQuotes.data)
            // Get Data from Product Collection based on Models in Quote History
            allQuotes.data.map((quoteSet) => (
                quoteSet.products[0].map((models) => (
                    modelArr.push(models.prod.split("-")[0])
                ))
            ))

            getProdData();

            } catch (error) {
                console.log("error getting quote history", error)   
            }
        }) ();
        
        return () => {
            source.cancel();
        }
    }, [userData])
    
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
                    {allQuoteRequests.length>0?
                      allQuoteRequests.slice(0,histNum).map((quote, idx) => (
                            <div key={idx} className="card" style={quoteHistStyles.mainCard}>
                                <div key={idx} className="card-header">
                                    <h5 key={idx}>{((new Date(quote.date)).toString()).slice(0,21)}</h5>
                                </div>
                                {quote.products[0].map((item, idx) => (
                                <div key={idx} className="card-body">
                                    <div key={idx} className="card mb-3">
                                        <div key={idx} className="row g-0">
                                            <div key={idx} className="col-md-4 my-auto">
                                                <img key={idx} src={ProductPhotos[ProductPhotos.findIndex(search => search[0].includes(item.prod.split("-")[0]))][0]} 
                                                className="img-fluid rounded-start" 
                                                alt={item.prod}/>
                                            </div>
                                            <div key={idx} className="col-md-8">
                                                <div key={idx} className="card-body">
                                                    <h5 key={idx} className="card-title">
                                                        {allQuoteRequests&&histNum&&prodList&&allQuoteRequests.length>=histNum?item.prod+": ":null} 
                                                        {allQuoteRequests&&histNum&&prodList&&allQuoteRequests.length>=histNum?
                                                        prodList[prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))][1]
                                                        :null}
                                                    </h5>
                                                    {allQuoteRequests?histNum?prodList?allQuoteRequests.length>=histNum?item.qty>0?
                                                        <li key={idx} className="list-group-item list-group-item-light">
                                                            <span style={quoteHistStyles.historyKey}>Quantity:</span>
                                                            {item.qty}
                                                        </li>
                                                    :null:null:null:null:null}

                                                    {allQuoteRequests?prodList?allQuoteRequests.length>=histNum?
                                                    prodList
                                                    [prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))] // index of model
                                                    [2] // index that holds config info
                                                    [prodList[prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))][2].findIndex(el=>el.includes(parseInt(item.prod.split("-")[1])))]
                                                    [2][0]?
                                                    <div className="list-group-item list-group-item-light"> 
                                                        <span style={quoteHistStyles.historyKey}>Configuration:</span>
                                                        {prodList
                                                    [prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))] // index of model
                                                    [2] // index that holds config info
                                                    [prodList[prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))][2].findIndex(el=>el.includes(parseInt(item.prod.split("-")[1])))]
                                                    [2].map((conf, i) => (
                                                        <li key={i}>{conf}</li>
                                                    ))}
                                                    </div>
                                                    :null:null:null:null}

                                                    {allQuoteRequests?histNum?prodList?allQuoteRequests.length>=histNum?
                                                    item.acc.length>0?
                                                        Object.keys(item.acc[0]).length>0?
                                                            <div className="list-group-item list-group-item-light">
                                                                <span style={quoteHistStyles.historyKey}>Accessories:</span>
                                                                    {item.acc.map((accessories) => (
                                                                        Object.entries(accessories).map((accessory, ix) => (
                                                                        <li key={ix}>{accessory[0]+": "
                                                                        +
                                                                        prodList[prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))] // index of model
                                                                        [3] // index that holds accessory info
                                                                        [prodList[prodList.findIndex(search=>search[0].includes(item.prod.split("-")[0]))][3].findIndex(el=>el.includes(accessory[0]))][1]
                                                                        }
                                                                        <span key={ix} className="badge bg-light text-dark">Quantity: {accessory[1]}</span>
                                                                        </li>
                                                                        ))
                                                                    ))}
                                                            </div>
                                                    :null:null:null:null:null:null}

                                                </div>

                                                <button onClick={reQuote} 
                                                        type="button"
                                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                        style={quoteHistStyles.requoteBtn} 
                                                        data-prod={item.prod}
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
                                                                Your quote will be added to the cart. 
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button onClick={addToCart} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue</button>                                                   
                                                            </div>
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
                    :null}
                </div>
                <div className="col-md-1"></div>
            </div>
            {userData?
                histNum<userData.user.quoteNum?
                    userData.user.quoteNum>0?
                        <div className="row">
                            <div className="col-md-9"></div>
                            <div className="col-md-3">
                                <button onClick={showNextHistory} type="button" className="btn btn-outline-secondary btn-sm">Show Additional History</button>
                            </div>
                        </div>
            :null:null:null}
        </div>
    )
}

export default QuoteHistory
