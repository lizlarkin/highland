import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./assets/homeStyles.css";
import T680_Home from './assets/T680_Home.png';
import Custom_Home from './assets/Custom_Home.jpeg';
import VME from '../Product/Images/V120_VME_PCIE_Crate_Controller_1.png';
import DDG from '../Product/Images/P500_Digital_Delay_Generator_1.png';
import PulseGen from '../Product/Images/J270_Pulse_Generator_1.png';
import WaveformGen from '../Product/Images/P350_Waveform_Playback_ARB_1.png';
import LaserControl from '../Product/Images/D100_Laser_Driver_1.png';
import Photonics from '../Product/Images/J724_Electrical_Fiberoptic_Converter_2.png';
import MeasureSim from '../Product/Images/P545_Synchro_LVDT_Acquisition_Simulator_2.png';
// import Legacy from '../Product/Images/P730_Optical_Electrialc_Fanout_Buffer_1.png';

const Home = () => {

    const history = useHistory();

    const capabilities = [
        ["Standard and custom electronics", "fa-light fa-waveform fa-5x"],
        ["Pulse and picosecond timing delay generation", "fa-light fa-wave-square fa-5x"],
        ["High-precision analog measurement and signal generation", "fa-light fa-solid fa-waves-sine fa-5x"],
        ["Data acquisition and control instrumentation", "fa-light fa-chart-scatter fa-5x"],
        ["Fiberoptics and photonics", "fa-light fa-monitor-waveform fa-5x"],
        ["Laser driver and control solutions", "fa-light fa-wave-triangle fa-5x"],
    ]

    const products = [
        ["Digital Delay Generators", DDG, "DDG"],
        ["Laser Drivers & Controllers", LaserControl, "LDC"],
        ["Photonics", Photonics, "PHO"],
        ["Measurement & Simulation", MeasureSim, "MAS"],
        ["VME", VME, "VME"],
        ["Pulse Generators", PulseGen, "PSG"],
        ["Waveform Generators", WaveformGen, "WFG"],
        // ["Legacy", Legacy, "LEG"],
    ]

    const custom = [
        " Aerospace instrumentation and simulation",
        " Picosecond timing", 
        " High speed photonics and fiberoptic timing distribution",
        " Digital delay and pulse generation",
        " Precision analog and mixed signal processing",    
    ]

    // Dropdown navigation
    const goToCategory = (e) => {
        const categorySelected = e.target.title;
        history.push(`/Category/${categorySelected}`)
      }

    // Carousel of Standard Products
      let [productIndex, setProductIndex] = useState(0);

      const incrementProdIndex = () => {
        if (productIndex === 6) {
            setProductIndex(0);
            updateArrayW();
        } else {
            setProductIndex(idx => idx + 1);
            updateArrayW();
        }
        updateArrayW();
      }

      const decrementProdIndex = () => {
        if (productIndex === 0) {
            setProductIndex(6)
            updateArrayW();
        } else {
            setProductIndex(idx => idx - 1)
            updateArrayW();
        }
      }

      let [productArray, setProductArray] = useState([0,1,2,3,4,5,6])

      const updateArrayW = () => {
        if (productIndex === 0) {
            setProductArray([1,2,3,4,5,6,0])
        } else if (productIndex === 1) {
            setProductArray([2,3,4,5,6,0,1])
        } else if (productIndex === 2) {
            setProductArray([3,4,5,6,0,1,2])
        } else if (productIndex === 3) {
            setProductArray([4,5,6,0,1,2,3])
        } else if (productIndex === 4) {
            setProductArray([5,6,0,1,2,3,4])
        } else if (productIndex === 5) {
            setProductArray([6,0,1,2,3,4,5])
        } else {
            setProductArray([0,1,2,3,4,5,6])
        }
      }

    return (
        <div>

            <div className="home-background">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div id="slogan-all">
                            <div id="slogan-row">
                                <div>GET THE EASY STUFF</div> 
                                <div>SOMEWHERE ELSE.</div>
                            </div>
                            <div id="sub-slogan-row">
                                <div>Electronics for demanding aerospace and defense, scientific, laser and fiberoptic systems, and industrial applications</div> 
                            </div>
                        </div>
                        <div>
                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-light dropdown-toggle" id="home-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Product Category
                            </button>
                            <ul className="dropdown-menu">
                                <li onClick={goToCategory} title={"VME"} className="dropdown-item">VME</li> 
                                <li onClick={goToCategory} title={"DDG"} className="dropdown-item">Digital Delay Generators</li>
                                <li onClick={goToCategory} title={"PSG"} className="dropdown-item">Pulse Generators</li>
                                <li onClick={goToCategory} title={"WFG"} className="dropdown-item">Waveform Generators</li> 
                                <li onClick={goToCategory} title={"LDC"} className="dropdown-item">Laser Drivers/Controllers</li>
                                <li onClick={goToCategory} title={"PHO"} className="dropdown-item">Photonics</li>
                                <li onClick={goToCategory} title={"MAS"} className="dropdown-item">Measurement/Simulation</li>
                                <li onClick={goToCategory} title={"OEM"} className="dropdown-item">OEM/Embedded</li>
                                <li onClick={goToCategory} title={"LEG"} className="dropdown-item">Legacy</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={T680_Home} className="img-fluid" alt="..."/>
                    </div>
                </div>
            </div>

            <div className="row light-section-row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 light-section-intro">
                                <h2>Challenges Meet Capabilities</h2>
                                <p className="capabilities-body">Using existing intellectual property and expertise, Highland can rapidly supply and develop electronics to provide solutions to our customer's greatest challenges.</p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    {capabilities.map((capability, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="shadow p-3 mb-5 bg-white rounded h-75 text-center" key={index}>
                                <i className={capability[1]} key={index}></i>
                                <div className="card-body capabilities-body" key={index}>
                                    <h6 key={index} className="card-title">{capability[0]}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            


            <div id="product-background">
                <div className=" row products-intro">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2 id="product-intro">Ample Product Solutions</h2>
                        <p>Highland's vast catalog serves a wide range of industries and applications, with extensive options to satisfy diversified requirements.</p>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div>
                        <div className="row product-row">

                            <div className="col-md-3"></div>
                            <div className="col-md-2">
                                <a className="product-link" href ={"/Category/"+products[productArray[2]][2]}>
                                    <img src={products[productArray[2]][1]} className="img-thumbnail bgOpacity" alt={products[productArray[2]][0]}></img>
                                    <h5>{products[productArray[2]][0]}</h5>
                                </a>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <a className="product-link" href ={"/Category/"+products[productArray[3]][2]}>
                                    <img src={products[productArray[3]][1]} className="img-thumbnail bgOpacity" alt={products[productArray[3]][0]}></img>
                                    <h5>{products[productArray[3]][0]}</h5>
                                </a>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row product-row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a className="product-link" href ={"/Category/"+products[productArray[1]][2]}>
                                    <img src={products[productArray[1]][1]} className="img-thumbnail bgOpacity" alt={products[productArray[1]][0]}></img>
                                    <h5>{products[productArray[1]][0]}</h5>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a className="product-link" href ={"/Category/"+products[productArray[0]][2]}>
                                    <img src={products[productArray[0]][1]} className="img-thumbnail" id="highlightedProduct" alt={products[productArray[0]][0]}></img>
                                    <h5>{products[productArray[0]][0]}</h5>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a className="product-link" href ={"/Category/"+products[productArray[4]][2]}>
                                    <img src={products[productArray[4]][1]} className="img-thumbnail bgOpacity" alt={products[productArray[4]][0]}></img>
                                    <h5>{products[productArray[4]][0]}</h5>
                                </a>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className = "row">
                            <div className="col-md-4"></div>
                            <div className="col-md-2">
                                <button onClick={decrementProdIndex} type="button" className="btn btn-outline-light carousel-button"><i className="fa-solid fa-chevrons-left"></i></button>
                            </div>
                            <div className="col-md-2">
                                <button onClick={incrementProdIndex} type="button" className="btn btn-outline-light carousel-button"><i className="fa-solid fa-chevrons-right"></i></button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                </div>
            </div>

                <div className="row light-section-row">
                    <div className="row">
                        <h2 id="custom-intro">Custom Electronics</h2>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 light-section-intro">
                            <img src={Custom_Home} className="img-fluid" alt="Jet Schematic"></img>
                            <p>Highland's engineering team can quickly adapt its products and technology into new designs of custom and embedded electronics.</p>
                        </div>
                        <div className="col-md-4" id="custom-list">
                            <ul className="list-group list-group-flush">
                                {custom.map((cust, id) => (
                                    <li key={id} className="list-group-item bgOpacity"><i className="fa-light fa-circle-check"></i>{cust}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>

                </div> 


        </div>
    )
}

export default Home
