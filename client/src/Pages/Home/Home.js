import React from 'react';
import potreroVideo from './assets/HighlandHome.mp4';
import VME from '../Product/Images/V120_VME_PCIE_Crate_Controller_1.png';
import DDG from '../Product/Images/P500_Digital_Delay_Generator_1.png';
import PulseGen from '../Product/Images/J270_Pulse_Generator_1.png';
import WaveformGen from '../Product/Images/P350_Waveform_Playback_ARB_1.png';
import LaserControl from '../Product/Images/D100_Laser_Driver_1.png';
import Photonics from '../Product/Images/J730_Optic_Electric_Converter_1.png';
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
        ["VME", VME],
        ["Digital Delay Generators", DDG],
        ["Pulse Generators", PulseGen],
        ["Waveform Generators",WaveformGen],
        ["Laser Drivers & Controllers",LaserControl],
        ["Photonics", Photonics],
        ["Measurement & Simulation", MeasureSim],
        ["Legacy", Legacy],
    ]

    const homeStyles = {
        video: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            marginTop: "-2%"
        },
        capabilities: {
            textAlign: "center",
            fontWeight: "bold",
            color: "#30415D",
        },
        symbol: {
            color: "#30415D",
        },
        greyRow: {
            backgroundColor: "#F0F0F0"
        },
        heading: {
            textAlign: "center", 
            marginBottom: "2%", 
            marginTop: "2%",
            color: "#30415D",
        },
        productNames: {
            textAlign: "center"
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <video className='videoTag' autoPlay muted style={homeStyles.video}>
                        <source src={potreroVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>

            <div className="row" style={homeStyles.greyRow}>
                <h1 style={homeStyles.heading}>Capabilities &amp; Applications</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* <div className="row"> ALSO SHOW IT LIKE THIS   */}
                    {capabilities.map((capability, index) => (
                            <div className="col" key={index}>
                                <div className="card h-75 border-0" style={homeStyles.greyRow}>
                                    <div className="card-img-top align-items-center d-flex justify-content-center" style={homeStyles.symbol}>
                                        <i className={capability[1]}></i>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title" style={homeStyles.capabilities}>{capability[0]}</h5>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>

            <div className="row">
                <h1 style={homeStyles.heading}>Standard Products</h1>
                <div className="row row-cols-1 row-cols-md-6 g-1">
                    {
                        products.map((product, index) => (
                            <div className="col" key={index}>
                                <img src={product[1]} className="img-thumbnail" alt={product}></img>
                                <h6 style={homeStyles.productNames}>{product[0]}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Home
