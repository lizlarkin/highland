import React from 'react';
import "./assets/homeStyles.css";
import potreroVideo from './assets/HighlandHome8.mp4';
import homeLogo from '../../Components/Footer/Images/Highland_logo_white.png';
import VME from '../Product/Images/V120_VME_PCIE_Crate_Controller_1.png';
import DDG from '../Product/Images/P500_Digital_Delay_Generator_1.png';
import PulseGen from '../Product/Images/J270_Pulse_Generator_1.png';
import WaveformGen from '../Product/Images/P350_Waveform_Playback_ARB_1.png';
import LaserControl from '../Product/Images/D100_Laser_Driver_1.png';
import Photonics from '../Product/Images/T850_Pockels_Cell_Driver_1.png';
import MeasureSim from '../Product/Images/T680_Time_Interval_Counter_1.png';
import Legacy from '../Product/Images/P730_Optical_Electrialc_Fanout_Buffer_1.png';

const Home = () => {

    // TO DO:
    // (1) responsive needs work

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

    const custom = [
        " Picosecond timing",
        " Precision analog and mixed signal processing",
        " Digital delay and pulse generation",
        " High speed photonics and fiberoptic timing distribution",
        " Aerospace instrumentation and simulation",
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


            <div className="content">

                <div className="row">
                    <div className="col-md-12">
                        <img src={homeLogo} class="img-fluid" alt="Highland Logo"/>
                        <h1 id="slogan">Get the easy stuff somewhere else.</h1>
                    </div>
                </div>

                <div className="test-row">
                <h1 className="home-header">Capabilities</h1>
                <div className="row row-cols-3">
                    {capabilities.map((capability, index) => (
                        <div className="col" key={index}>
                            <i className={capability[1]}></i>
                            <h5 className="home-description">{capability[0]}</h5>
                        </div>
                    ))}
                </div>
                </div>

                <h1 className="home-header">Standard Products</h1>
                <div className="row row-cols-8">
                    {products.map((product, idx) => (
                        <div className="col" key={idx}>
                            <a className="product-link" href ={"/Category/"+product[2]}>
                                <img src={product[1]} className="img-thumbnail bgOpacity" alt={product}></img>
                                <h5>{product[0]}</h5>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="test-row">
                <h1 className="home-header">Custom Electronics</h1>
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
                    <ul className="list-group list-group-flush">
                        {custom.map((cust, id) => (
                            <li key={id} className="list-group-item bgOpacity"><i className="fa-light fa-circle-check"></i>{cust}</li>
                        ))}
                    </ul>
                </div>
                </div>

            </div>

        </div>
    )
}

export default Home
