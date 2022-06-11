import React from 'react';
import "./assets/homeStyles.css";
import potreroVideo from './assets/HighlandHome.mp4';
import VME from '../Product/Images/V120_VME_PCIE_Crate_Controller_1.png';
import DDG from '../Product/Images/P500_Digital_Delay_Generator_1.png';
import PulseGen from '../Product/Images/J270_Pulse_Generator_1.png';
import WaveformGen from '../Product/Images/P350_Waveform_Playback_ARB_1.png';
import LaserControl from '../Product/Images/D100_Laser_Driver_1.png';
import Photonics from '../Product/Images/T850_Pockels_Cell_Driver_1.png';
import MeasureSim from '../Product/Images/T680_Time_Interval_Counter_1.png';
import Legacy from '../Product/Images/P730_Optical_Electrialc_Fanout_Buffer_1.png';

const Home = () => {

    const capabilities = [
        ["Standard and custom electronics", "fa-light fa-waveform fa-5x"],
        ["Pulse and picosecond timing delay generation", "fa-light fa-wave-square fa-5x"],
        ["High-precision analog measurement and signal generation", "fa-light fa-wave-sine fa-5x"],
        ["Data acquisition and control instrumentation", "fa-light fa-chart-scatter fa-5x"],
        ["Fiberoptics and photonics", "fa-light fa-monitor-waveform fa-5x"],
        ["Laser driver and control solutions", "fa-light fa-wave-triangle fa-5x"],
    ]

    const products = [
        ["VME", VME, "VME"],
        ["Digital Delay Generators", DDG, "DDG"],
        ["Pulse Generators", PulseGen, "PSG"],
        ["Waveform Generators", WaveformGen, "WFG"],
        ["Laser Drivers & Controllers", LaserControl, "LDC"],
        ["Photonics", Photonics, "PHO"],
        ["Measurement & Simulation", MeasureSim, "MAS"],
        ["Legacy", Legacy, "LEG"],
    ]

    return (
        <div>
            <div className="row">
                <div className="embed-responsive col-md-12">
                    <video className='videoTag' autoPlay muted id="video">
                        <source src={potreroVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>

            <div className="row grey-row">
                <h1 className="heading">Capabilities</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* <div className="row"> ALSO SHOW IT LIKE THIS   */}
                    {capabilities.map((capability, index) => (
                            <div className="col" key={index}>
                                <div className="card h-75 border-0 grey-row">
                                    <div className="card-img-top align-items-center d-flex justify-content-center symbol">
                                        <i className={capability[1]}></i>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title capabilities">{capability[0]}</h5>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row white-row">
                    <h1 className="heading">Standard Products</h1>
                    <div className="row">
                        <div className="col-md-2"></div>
                        {
                            products.map((product, index) => (
                                <div className="col-sm-1" key={index}>
                                    <a href ={"/Category/"+product[2]}>
                                        <img src={product[1]} className="img-thumbnail homeProduct" alt={product}></img>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title capabilities">{product[0]}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="row grey-row" id="compensate-footer">
                <h1 className="heading">Custom Electronics</h1>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 capabilities">
                        Highland emphasizes thorough understanding of customer applications, direct engineering support, and long term availability of products. 
                        The company's engineering expertise enables it to quickly adapt its products and technology into new designs of custom and embedded electronics. 
                        Areas of expertise and examples of applications include: 
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item grey-row capabilities"><i className="fa-light fa-circle-check"></i> Picosecond timing</li>
                            <li className="list-group-item grey-row capabilities"><i className="fa-light fa-circle-check"></i> Precision analog and mixed signal processing</li>
                            <li className="list-group-item grey-row capabilities"><i className="fa-light fa-circle-check"></i> Digital delay and pulse generation</li>
                            <li className="list-group-item grey-row capabilities"><i className="fa-light fa-circle-check"></i> High speed photonics and fiberoptic timing distribution</li>
                            <li className="list-group-item grey-row capabilities"><i className="fa-light fa-circle-check"></i> Aerospace instrumentation and simulation</li>
                        </ul>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        </div>
    )
}

export default Home
