import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";


const ProductQuote = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
    }, [userData.user, history])

    const quoteStyles = {
        configHeaders: {
            textAlign: "center",
            margin: "30px 0px 10px 0px"
        },
        cardStyles: {
            width: "40%",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "15px",
        },
        cardTitle: {
            textAlign: "center",
        },
        cardSwitch: {
            marginLeft: "10px"
        },
        quoteBtn: {
            margin: "25px 35% 10px 35%",
            width: "30%",
        },
        quantityInput: {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        inputText: {
            textAlign: "center",
        }
    }


    return (
        <div >

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">
                
                <div className="row">

                        <h4 style={quoteStyles.configHeaders}>Standard Configuration</h4>

                        <div className="card" style={quoteStyles.cardStyles}>
                            <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title" style={quoteStyles.cardTitle}>P500-1 1 1</h6>
                                <h6 className="card-title" style={quoteStyles.cardTitle}>4-channel benchtop digital delay and pulse generator</h6>
                            </div>
                            <div className="input-group mb-3" style={quoteStyles.quantityInput}>
                                <input type="number" min="0" className="form-control" placeholder="Enter Quantity" name="P500-111"/>
                                <button type="button" className="btn btn-outline-danger">Add to Quote</button>
                            </div>
                            
                        </div>    

                        <div className="card" style={quoteStyles.cardStyles}>
                            <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title" style={quoteStyles.cardTitle}>J25-1</h6>
                                <h6 className="card-title" style={quoteStyles.cardTitle}>24 volt 65W power supply</h6>
                            </div>
                            <div className="input-group mb-3" style={quoteStyles.quantityInput}>
                                <input type="number"  className="form-control" placeholder="=Left Qty" name="P500-111" disabled/>
                            </div>
                        </div>
                </div>

                <div className="row">
                <h4 style={quoteStyles.configHeaders}>Optional Functionality</h4>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>P500-2 _ _</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>Advanced pulse train/frame generation</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>P500-_ 2 _</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>50V isolated high-voltage output</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>P500-_ _ 2</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>High stability ovenized oscillator</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                <h4 style={quoteStyles.configHeaders}>Accessories</h4>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>J25-1</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>Extra 24 volt 65W power supply</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>J25-1</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>Extra 24 volt 65W power supply</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>J27-1</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>2.1 x 5.5 mm barrel to pigtail power cable</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>P10-1</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>19" rack mount shelf (two p-boxes per rack)</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                    <div className="card" style={quoteStyles.cardStyles}>
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title" style={quoteStyles.cardTitle}>P492-1</h6>
                            <h6 className="card-title" style={quoteStyles.cardTitle}>AC line triggering transformer for P400/P500</h6>
                        </div>
                        <div className="form-check form-switch" style={quoteStyles.cardSwitch}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Add to Quote</label>
                        </div>
                    </div>

                </div>

                <div className="row">

                </div>

            </div>

        </div>

    )
}

export default ProductQuote
