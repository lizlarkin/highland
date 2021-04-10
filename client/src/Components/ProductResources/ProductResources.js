import React from 'react'
import rohsCompliant from '../../Pages/Product/Images/rohsCompliant.png'
import madeInUsa from '../../Pages/Product/Images/madeInUsa.png'
import ECCN from '../../Pages/Product/Images/ECCN.png'
import statementOfVolatility from '../../Pages/Product/Images/statementOfVolatility.png'
import mtbfAnalysis from '../../Pages/Product/Images/mtbfAnalysis.png'
import datasheet from '../../Pages/Product/Images/datasheet.png'
import manual from '../../Pages/Product/Images/manual.png'
import blockDiagram from '../../Pages/Product/Images/blockDiagram.png'
import {Link} from 'react-router-dom';

const ProductResources = () => {

    const resourcesStyles = {
        accordianBtn: {
            fontWeight: "bold",
        },
    }

    return (
        <div >
            <h3 className="prod-header">Resources</h3>
            
                <div className="content-container">
                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button style={resourcesStyles.accordianBtn} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Documentation
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={datasheet} alt="Highland Datasheet"/>Download Datasheet
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={manual} alt="Highland Datasheet"/>Download Manual
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={blockDiagram} alt="Highland Datasheet"/>Download Block Diagram
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={statementOfVolatility} alt="DRAM Symbol"/>Download Statement of Volatility 
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={mtbfAnalysis} alt="MTBF Symbol"/>Download Mean Time Between Failure (MTBF) Analysis
                                        </Link>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button style={resourcesStyles.accordianBtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Drivers &amp; Software
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action"> Drivers</a>
                                        <a href="#" className="list-group-item list-group-item-action"> Frames and trains examples </a>
                                        <a href="#" className="list-group-item list-group-item-action"> TBD</a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button style={resourcesStyles.accordianBtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Compliance
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={rohsCompliant} alt="RoHS Compliant"/>Download RoHS Certificate
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={madeInUsa} alt="Made In USA"/>Download Certificate of Origin
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={ECCN} alt="International Commerce"/> Download Export Control Classification Number (ECCN) &amp; Export Control Information
                                        </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default ProductResources
