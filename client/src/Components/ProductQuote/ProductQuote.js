import React from 'react'

const ProductQuote = () => {

    const quoteStyles = {
        ulStyles: {
            marginTop: "10px",
        },
        headerStyles: {
            marginTop: "25px",
        }
    }
    return (
        <div >
            <h3 className="prod-header">Request Quote</h3>
            
                <div className="content-container">

                    <div className = "row">  

                        <div className = "col-md-6">  
                        <h5>Standard Configuration</h5>
                        <ul className="list-group" style={quoteStyles.ulStyles}>
                            <li className="list-group-item list-group-item-action">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">4-channel benchtop digital delay and pulse generator</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">24 volt 65W power supply</label>
                                </div>
                            </li>
                        </ul>

                        <h5 style={quoteStyles.headerStyles}>Optional Functionality</h5>
                        <ul className="list-group" style={quoteStyles.ulStyles}>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">Advanced pulse train/frame generation</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">50V isolated high-voltage output</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">High stability ovenized oscillator</label>
                                </div>
                            </li>
                        </ul>

                        <h5 style={quoteStyles.headerStyles}>Accessories</h5>
                        <ul className="list-group" style={quoteStyles.ulStyles}>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">Extra 24 volt 65W power supply</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">2.1 x 5.5 mm barrel to pigtail power cable</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">19" rack mount shelf (two p-boxes per rack)</label>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">AC line triggering transformer for P400/P500</label>
                                </div>
                            </li>
                        </ul>
                        </div>

                        <div className = "col-md-6">
                            <h5>Custom Configuration</h5>
                            <div>Dynamic Content Here</div>
                            <button type="button" class="btn btn-outline-danger">Request Quote</button>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default ProductQuote
