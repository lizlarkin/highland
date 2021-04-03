import React from 'react'
import rohs from '../../Pages/Product/Images/rohs.png'
import usa from '../../Pages/Product/Images/usa.png'
import eccn from '../../Pages/Product/Images/eccn.png'
import sov from '../../Pages/Product/Images/sov.png'
import mtbf from '../../Pages/Product/Images/mtbf.png'
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
                                    <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-book"></i>  Download Datasheet</a>
                                    <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-book-open"></i>  Download Manual</a>
                                    <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-microchip"></i>  Download Block Diagram</a>
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
                                            <img className = "resource-image" src={rohs} alt="RoHS Symbol"/>Download RoHS Certificate
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={usa} alt="USA Flag"/>Download Certificate of Origin
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={eccn} alt="ECCN Symbol"/>Export Control Classification Number: 
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={sov} alt="DRAM Symbol"/>Download Statement of Volatility 
                                        </Link>
                                        <Link to="/" className="list-group-item list-group-item-action">
                                            <img className = "resource-image" src={mtbf} alt="MTBF Symbol"/>Download Mean Time Between Failure (MTBF) Analysis
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
