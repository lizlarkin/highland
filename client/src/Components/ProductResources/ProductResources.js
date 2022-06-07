import React from 'react';
import rohsCompliant from "./assets/rohsCompliant.png";
import madeInUsa from "./assets/madeInUsa.png";
import ECCNImage from "./assets/ECCN.png";
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
import EUS from '../../Pages/FAQ/End User Statement.pdf';

const ProductResources = ({ model, driversSoftware, ECCN, htsCode }) => {

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
                                        {/* <a href={<Datasheet />} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={datasheet} alt="Highland Datasheet"/>Download Datasheet
                                        </a> */}
                                        
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
                                        {/* <div className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={ECCN} alt="International Commerce"/> Download Export Information
                                        </div> */}
                                        <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img className = "resource-image" src={ECCNImage} alt="International Commerce"/> Export &amp; Classification Information
                                        </button>
                                        {/* <!-- Export Information Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">{model} Export &amp; Classification Information</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        All sales are subject to U.S. Department of Commerce Export Regulations. Highland will collect an End User Statement for all international sales to ensure that product export to the destination country is permitted. Each End User Statement requires disclosure of the Ultimate and Intermediate Consignees, and agreement to comply with export laws of the United States. Highland reserves the right to deny export for any reason. A copy of the End User Statement form can be downloaded <a href={EUS}>here</a>.
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">{ECCN?"ECCN: "+ ECCN:null}</li>
                                                            <li className="list-group-item">CAGE Code: 1RHL3</li>
                                                            <li className="list-group-item">{htsCode?"Harmonized Tariff Schedule (new): "+htsCode:null}</li>
                                                            <li className="list-group-item">Harmonized Tariff Schedule (return): 9801.10.0000</li>
                                                            <li className="list-group-item">Primary NAICS Code: 334418</li>
                                                            <li className="list-group-item">Secondary NAICS Code: 334515</li>
                                                            <li className="list-group-item">Country of Origin: United States</li>
                                                        </ul>
                                                        
                                                        
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
