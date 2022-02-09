import React from 'react';
import rohsCompliant from "./assets/rohsCompliant.png";
import madeInUsa from "./assets/madeInUsa.png";
import ECCN from "./assets/ECCN.png";
import statementOfVolatility from "./assets/statementOfVolatility.png";
import mtbfAnalysis from "./assets/mtbfAnalysis.png";
import datasheet from "./assets/datasheet.png";
import manual from "./assets/manual.png";
import blockDiagram from "./assets/blockDiagram.png";
import conformance from "./assets/conformance.png";
import softwareDrivers from "./assets/softwareDrivers.png";
import {Link} from 'react-router-dom';
import {CoCArr} from "./Resources";
import Datasheet from '../ProductDatasheet/Datasheet';

const ProductResources = ({ model, driversSoftware }) => {

    const resourcesStyles = {
        accordianBtn: {
            fontWeight: "bold",
        },
    }

   const CoCIndex = CoCArr.findIndex(search => search.includes(model + "_CoC"));

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
                                        <a href={<Datasheet />} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={datasheet} alt="Highland Datasheet"/>Download Datasheet
                                        </a>
                                        
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

                        {driversSoftware?
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button style={resourcesStyles.accordianBtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Drivers &amp; Software
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="list-group">
                                        {driversSoftware?
                                        driversSoftware.map((link, index) => (
                                            <a href={link[1]} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" key={index}>
                                                <img className = "resource-image" src={softwareDrivers} alt="Drivers &amp; Software"/> Download {link[0]}
                                            </a>
                                        ))
                                        :null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        :null}

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
                                            <img className = "resource-image" src={madeInUsa} alt="Made In USA"/>Download Certificate of Origin (change this name???)
                                        </Link>
                                        <Link to={CoCArr[CoCIndex]} target = "_blank" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={conformance} alt="Certificate of Conformnce"/>Download Certificate of Conformance
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={ECCN} alt="International Commerce"/> Download Export Information
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
