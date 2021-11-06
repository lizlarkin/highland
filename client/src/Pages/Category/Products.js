import React from 'react';
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import { useHistory } from "react-router-dom";

// Image imports
import VME from "./Images/VME.png";
import DigitalDelayGenerator from "./Images/Digital_Delay_Generator.png";
import WaveformGenerator from "./Images/Waveform_Generator.png";
import MeasurementSimulation from "./Images/Measurement_Simulation.png";

const Products = () => {

    const productStyles = {
        textAlign: "center",
        minHeight: "700px",
        padding: "2%",
        marginBottom: "3%",
        btnToCat: {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        image: {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3%",
            marginBottom: "1%"
        },
    }

    const history = useHistory();

    const goToPage = (e) => {
        const page = e.target.name
        history.push(`/Pages/Category/Category/${page}`)
    }

    return (
        <div>
            <CategoryJumbotron 
                title="All Products" 
                text="For three decades, Highland Technology has provided innovative, high precision electronic products for challenging customer applications."
            />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">VME</h3>
                    <img src={VME} className="card-img-top" alt="VME Card (Versa Module Eurocard)" style={productStyles.image}/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">In 1992, Highland Technology entered the VME market and has since maintained a consistent commitment to VME as an open, robust, and cost-effective platform for high channel count control, measurement, and simulation systems.
                                                 Highland is a member of VITA, the VME standards body, and continues to release new technology into the VME market. As other bus architectures come and go, Highland remains confident that VME will maintain its position as the architecture of choice for essential, long life cycle programs.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="VME">See All VME Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">Digital Delay &amp; Pulse Generators</h3>
                    <img src={DigitalDelayGenerator} className="card-img-top" alt="Digital Delay Generator" style={productStyles.image}/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">Highland has introduced three unique features to digital delay generation: a "Queued Updates" feature allows time settings to be changed without corrupting ongoing timings; a "Train" feature allows multiple pulses to be generated from each trigger; and a "Frames" feature allows complex delay sweeps and pulse scenarios to be pre-loaded and rapidly executed. Digital delay and pulse generators are available in 1-6 channels, with square, Gaussian, and arbitrary waveshapes, and insertion delays as low as 10 nanoseconds.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="DDG">See All Digital Delay/Pulse Generator Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">Photonics</h3>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">Precision fiberoptic and free-space interfaces provide high-speed, low-jitter and low noise signal conversion, and transport of analog and digital signals.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="PHO">See All Photonics Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">Laser Drivers &amp; Controllers</h3>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">Highland Technology offers off the shelf and OEM solutions for many laser driver and control needs including Fast Pulse Generators for E/O Modulation, Fast Laser Diode Drivers, Seed Laser Pulse Picking, MOPA timing and control, and Custom Delay and Waveform Generation.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="LDC">See All Laser Drivers &amp; Controllers Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">Waveform Generators</h3>
                    <img src={WaveformGenerator} className="card-img-top" alt="Waveform Generator" style={productStyles.image}/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">Highland offers waveform generators across a wide range of forms and performance. From simple 4 channel function generators to our flagship arbitrary waveform generators with interchannel modulation, system mastering capability, and unlimited synchronization capability, all of our waveform generators are designed to allow synchronous signal generation for easy integration into end systems.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="WFG">See All Waveform Generator Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">Measurement &amp; Simulation</h3>
                    <img src={MeasurementSimulation} className="card-img-top" alt="Thermocouple Simulator" style={productStyles.image}/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">Highland Technology offers a wide array of tools for measurement, simulation, and control. Tachometers, thermocouples, RTDs, precision voltages, current loops, strain gauges, and more can be measured or simulated by Highland's products.</p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="MAS">See All Measurement &amp; Simulation Products</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="card" style={productStyles}>
                    <h3 className="card-title alert alert-primary">OEM, Embedded, and Custom Electronics</h3>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text">For 25 years Highland has provided custom electronics for challenging customer applications. Areas of expertise include: <br/>
                        Picosecond timing<br/>
                        Precision analog and mixed signal processing<br/>
                        Digital delay and pulse generation<br/>
                        High speed photonics and fiberoptic timing distribution<br/>
                        Aerospace instrumentation and simulation
                        </p>
                        <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name="OEM">See All OEM, Embedded, and Custom Electronics Capability</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Products
