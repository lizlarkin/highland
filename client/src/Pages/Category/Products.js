import React from 'react';
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import { useHistory } from "react-router-dom";

// Image imports
import VME from "../Product/Images/V420_VME_Resistance_Simulator_3.png";
import DigitalDelayGenerator from "../Product/Images/P500_Digital_Delay_Generator_1.png";
import PulseGenerator from "../Product/Images/J270_Pulse_Generator_1.png";
import WaveformGenerator from "../Product/Images/P350_Waveform_Playback_ARB_1.png";
import LaserDriver from "../Product/Images/D100_Laser_Driver_1.png";
import Photonics from "../Product/Images/J724_Electrical_Fiberoptic_Converter_6.png";
import MeasurementSimulation from "../Product/Images/T500_Amplitude_Modulator_Chassis_1.png";
import Embedded from "../Product/Images/T560_Digital_Delay_Generator_1.png";

const Products = () => {

    const ProductData = [
        {
            Name: "VME",
            Img: VME,
            Text: "In 1992, Highland Technology entered the VME market and has since maintained a consistent commitment to VME as an open, robust, and cost-effective platform for high channel count control, measurement, and simulation systems. Highland is a member of VITA, the VME standards body, and continues to release new technology into the VME market. As other bus architectures come and go, Highland remains confident that VME will maintain its position as the architecture of choice for essential, long life cycle programs.",
            Link: "VME",
        },
        {
            Name: "Digital Delay Generators",
            Img: DigitalDelayGenerator,
            Text: 'Highland has introduced three unique features to digital delay generation: a "Queued Updates" feature allows time settings to be changed without corrupting ongoing timings; a "Train" feature allows multiple pulses to be generated from each trigger; and a "Frames" feature allows complex delay sweeps and pulse scenarios to be pre-loaded and rapidly executed. Digital delay and pulse generators are available in 1-6 channels, with square, Gaussian, and arbitrary waveshapes, and insertion delays as low as 10 nanoseconds.',
            Link: "DDG",
        },
        {
            Name: "Pulse Generators",
            Img: PulseGenerator,
            Text: "Highland Technology pulse generators translate low-level signals with slow edges into clean, fast pulses with amplitudes of up to 100V. DC and transformer coupled models are available.",
            Link: "PSG",
        },
        {
            Name: "Waveform Generators",
            Img: WaveformGenerator,
            Text: "Highland offers waveform generators across a wide range of forms and performance. From simple 4 channel function generators to our flagship arbitrary waveform generators with interchannel modulation, system mastering capability, and unlimited synchronization capability, all of our waveform generators are designed to allow synchronous signal generation for easy integration into end systems.",
            Link: "WFG",
        },
        {
            Name: "Laser Drivers & Controllers",
            Img: LaserDriver,
            Text: "Highland Technology offers off the shelf and OEM solutions for many laser driver and control needs including Fast Pulse Generators for E/O Modulation, Fast Laser Diode Drivers, Seed Laser Pulse Picking, MOPA timing and control, and Custom Delay and Waveform Generation.",
            Link: "LDC",
        },
        {
            Name: "Photonics",
            Img: Photonics,
            Text: "Precision fiberoptic and free-space interfaces provide high-speed, low-jitter and low noise signal conversion, and transport of analog and digital signals.",
            Link: "PHO",
        },
        {
            Name: "Measurement & Simulation",
            Img: MeasurementSimulation,
            Text: "Highland Technology offers a wide array of tools for measurement, simulation, and control. Tachometers, thermocouples, RTDs, precision voltages, current loops, strain gauges, and more can be measured or simulated by Highland's products.",
            Link: "MAS",
        },
        {
            Name: "OEM/Embedded",
            Img: Embedded,
            Text: "For almost 40 years Highland has provided custom electronics for challenging customer applications. Areas of expertise include: picosecond timing, precision analog and mixed signal processing, digital delay and pulse generation, high speed photonics and fiberoptic timing distribution, and aerospace instrumentation and simulation",
            Link: "OEM",
        },
    ]

    const productStyles = {
        textAlign: "center",
        padding: "2%",
        marginBottom: "3%",
        btnToCat: {
            width: "75%",
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
        history.push(`/Category/${page}`)
    }

    return (
        <div>
            <CategoryJumbotron 
                title="All Products" 
                text="For three decades, Highland Technology has provided innovative, high precision electronic products for challenging customer applications."
            />
            <div className="row px-4">
                {ProductData.map((product, index) => (
                    <div className="col-6 p-3 d-flex align-items-stretch" key={index}>
                        <div className="card" style={productStyles}>
                            <h3 className="card-title alert alert-primary">{product.Name}</h3>
                            <img src={product.Img} className="card-img-top" alt={product.Name} style={productStyles.image}/>
                            <div className="card-body d-flex flex-column">
                                <p className="card-text">{product.Text}</p>
                                <button onClick={goToPage} className = "btn btn-outline-primary mt-auto" style={productStyles.btnToCat} name={product.Link}>See All {product.Name} Products</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
