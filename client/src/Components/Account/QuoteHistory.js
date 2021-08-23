import React, { useEffect, useState } from 'react';
import './Account.css';
import axios from "axios";

const QuoteHistory = () => {

    const quoteHistStyles = {
        mainCard: {
            marginBottom: "3%"
        },
        quoteLi: {
            marginTop: "1px"
        },
        liSpan: {
            fontWeight: "500",
        },
        requoteBtn: {
            float: "right",
            width: "20%",
            margin: "0% 2% 2% 0%"
        }
    }

    const [allQuoteRequests, setAllQuoteRequests] = useState([]);

    const getAllQuotes = async () => {
        try {
            const allQuotes = await axios.get(`/quotes`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            setAllQuoteRequests(allQuotes.data)
            // console.log("allQuotes", allQuotes.data.length);
        } catch (error) {
            console.log("error getting quote history", error)   
        }
    }

    console.log("Quote history state: ", allQuoteRequests)

    useEffect(() => {
        getAllQuotes();
    }, [])

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
                                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h6 className="card-title">{item.model+"-"+"## "+item.name} </h6>
                                                    {item.quantity>0?
                                                    <ul className="list-group list-group-horizontal">
                                                            <li key={idx} className="list-group-item list-group-item-light" style={quoteHistStyles.quoteLi}><span style={quoteHistStyles.liSpan}>Quantity: </span>{item.quantity}</li>
                                                    </ul>
                                                    :null}
                                                    {item.required.length>0?
                                                    <ul className="list-group list-group-horizontal">
                                                        {Object.entries(item.required[0]).map((require, idx) => (
                                                            <li key={idx} className="list-group-item list-group-item-light" style={quoteHistStyles.quoteLi}><span style={quoteHistStyles.liSpan}>{require[0]+": "}</span>{require[1][0]}</li>
                                                        ))}
                                                    </ul>
                                                    :null}
                                                    {item.optional.length>0?
                                                    <ul className="list-group list-group-horizontal">
                                                        {Object.entries(item.optional).map((option, idx) => (
                                                            <li key={idx} className="list-group-item list-group-item-light" style={quoteHistStyles.quoteLi}><span style={quoteHistStyles.liSpan}>Extra: </span>{option[1][0]}</li>
                                                        ))}
                                                    </ul>
                                                    :null}
                                                    {item.accessories.length>0?
                                                    <ul className="list-group list-group-horizontal">
                                                        {Object.entries(item.accessories[0]).map((accessory, idx) => (
                                                            <li key={idx} className="list-group-item list-group-item-light" style={quoteHistStyles.quoteLi}><span style={quoteHistStyles.liSpan}>Accessory: </span>
                                                            {
                                                            accessory[0] + ": " +
                                                            accessory[1][1] + " " +
                                                            "(Qty " + accessory[1][0] + ")"}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    :null}
                                                </div>
                                                <button style={quoteHistStyles.requoteBtn} className="btn btn-outline-danger">Quote Again</button>
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
        </div>
    )
}

export default QuoteHistory
