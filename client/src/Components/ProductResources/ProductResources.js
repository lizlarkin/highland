import React, { useContext } from 'react';
import UserContext from "../../Context/UserContext";
import rohsCompliant from "./assets/rohsCompliant.png";
import madeInUsa from "./assets/madeInUsa.png";
import ECCNImage from "./assets/ECCN.png";
import STEPImage from "./assets/STEP.png";
import statementOfVolatility from "./assets/statementOfVolatility.png";
import mtbfAnalysis from "./assets/mtbfAnalysis.png";
// import datasheet from "./assets/datasheet.png";
import manual from "./assets/manual.png";
import blockDiagram from "./assets/blockDiagram.png";
import conformance from "./assets/conformance.png";
import softwareDrivers from "./assets/softwareDrivers.png";
import {Link} from 'react-router-dom';
import {CoCArr} from "./Resources";
import {SoVArr} from "./Resources";
import {StepArr} from "./Resources";
import USAPolicy from "./assets/USA_Commitment.pdf";
// import Datasheet from '../ProductDatasheet/Datasheet';
import Export from './Export';
import Mtbf from './Mtbf';

const ProductResources = ({ model, driversSoftware, ECCN, htsCode, MTBF }) => {

    const { userData } = useContext(UserContext);

    const resourcesStyles = {
        accordianBtn: {
            fontWeight: "bold",
        },
    }

   const CoCIndex = CoCArr.findIndex(search => search.includes(model + "_CoC"));
   const SoVIndex = SoVArr.findIndex(search => search.includes(model + "_SOV"));
   const StepIndex = StepArr.findIndex(search => search.includes(model));

    return (
        <div >
            <h3 className="prod-header">Resources</h3>
            
                <div className="content-container">
                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button style={resourcesStyles.accordianBtn} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Product Information
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                        {/* <a href={<Datasheet />} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={datasheet} alt="Highland Datasheet"/>Download Datasheet
                                        </a> */}
                                        {userData.user?
                                            <Link to="/" className="list-group-item list-group-item-action">
                                                <img className = "resource-image" src={manual} alt="Highland Datasheet"/>Download Manual
                                            </Link>
                                        :
                                            <Link to="/login" className="list-group-item list-group-item-action">
                                                <img className = "resource-image" src={manual} alt="Highland Datasheet"/>Please login to download manual
                                            </Link>
                                        }

                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={blockDiagram} alt="Highland Datasheet"/>Download Block Diagram
                                        </Link>
                                        {SoVIndex===-1?
                                        null:
                                        <Link to={SoVArr[SoVIndex]} target = "_blank" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={statementOfVolatility} alt="DRAM Symbol"/>Download Statement of Volatility 
                                        </Link>
                                        }
                                        {StepIndex===-1?
                                        null:
                                        <Link to={StepArr[StepIndex]} target = "_blank" download className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={STEPImage} alt="3D Model"/>Download STEP File 
                                        </Link>
                                        }
                                        {MTBF.length>0?
                                        <>
                                            <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#mtbfModal">
                                                <img className = "resource-image" src={mtbfAnalysis} alt="MTBF Symbol"/>Reliability
                                            </button>
                                            <Mtbf model={model} MTBF={MTBF}/>
                                        </>
                                        :
                                        null}
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
                                            userData.user?
                                                driversSoftware.map((link, index) => (
                                                    <a href={link[1]} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" key={index}>
                                                        <img className = "resource-image" src={softwareDrivers} alt="Drivers &amp; Software"/> Download {link[0]}
                                                    </a>
                                            ))
                                            :
                                            <Link to="/login" className="list-group-item list-group-item-action">
                                                <img className = "resource-image" src={softwareDrivers} alt="Drivers &amp; Software"/>Please login for access
                                            </Link>
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
                                        <Link to={USAPolicy} target = "_blank" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={madeInUsa} alt="Made In USA"/>Made in USA Commitment
                                        </Link>
                                        {CoCIndex===-1?
                                        null:
                                        <Link to={CoCArr[CoCIndex]} target = "_blank" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={conformance} alt="Certificate of Conformnce"/>Download Certificate of Conformance
                                        </Link>
                                        }
                                        <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#exportModal">
                                            <img className = "resource-image" src={ECCNImage} alt="International Commerce"/>Export &amp; Classification Information
                                        </button>
                                        <Export model={model} ECCN={ECCN} htsCode={htsCode} />
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
