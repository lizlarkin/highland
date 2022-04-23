import React, { useEffect, useState, useContext } from 'react';
import './Account.css';
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const QuoteHistory = () => {

    const history = useHistory();
    const { userData } = useContext(UserContext);

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
                console.log("HEREREEE", allQuotes.data[0]._id)
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
                    {allQuoteRequests.length>0?
                      allQuoteRequests.map((quote, idx) => (
                            <div key={idx} className="card" style={quoteHistStyles.mainCard}>
                                <div className="card-header">
                                    <h5>{quote.date}</h5>
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
                                                <button style={quoteHistStyles.requoteBtn} className="btn btn-outline-primary">Quote Again</button>
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
