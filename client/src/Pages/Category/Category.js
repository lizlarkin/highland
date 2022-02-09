import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from './../../Components/ProductCard/ProductCard';
import CategoryJumbotron from "../../Components/CategoryJumbotron/CategoryJumbotron";

const Category = () => {

    const categorySelected = window.location.href.slice(-3)

    const [categoryData, setCategoryData] = useState();

    const [title, setTitle] = useState();
    const [text, setText] = useState();

    const assignPageTitle = () => {
        if (categorySelected==="VME") setTitle("VME")
        if (categorySelected==="DDG") setTitle("DIGITAL DELAY GENERATORS")
        if (categorySelected==="PSG") setTitle("PULSE GENERATORS")
        if (categorySelected==="WFG") setTitle("WAVEFORM GENERATORS")
        if (categorySelected==="LDC") setTitle("LASER DRIVERS & CONTROLLERS")
        if (categorySelected==="PHO") setTitle("PHOTONICS")
        if (categorySelected==="MAS") setTitle("MEASUREMENT & SIMULATION")
        if (categorySelected==="OEM") setTitle("OEM/EMBEDDED")
        if (categorySelected==="LEG") setTitle("LEGACY")
    }

    const assignPageText = () => {
        if (categorySelected==="VME") setText("Since Highland Technology entered the VME market in 1992, we have maintained a consistent commitment to VME as an open, robust, and cost-effective platform for high channel count control, measurement, and simulation systems. Highland is a member of VITA, the VME standards body, and continues to release new technology into the VME market. As other bus architectures come and go, Highland remains confident that VME will maintain its position as the architecture of choice for essential, long life cycle programs.")
        if (categorySelected==="DDG") setText('Highland has introduced three unique features to digital delay generation: a "Queued Updates" feature allows time settings to be changed without corrupting ongoing timings; a "Train" feature allows multiple pulses to be generated from each trigger; and a "Frames" feature allows complex delay sweeps and pulse scenarios to be pre-loaded and rapidly executed. Digital delay and pulse generators are available in 1-6 channels, with square, Gaussian, and arbitrary waveshapes, and insertion delays as low as 10 nanoseconds.')
        if (categorySelected==="PSG") setText("Need this text for pulse generators")
        if (categorySelected==="WFG") setText("Highland offers waveform generators across a wide range of forms and performance. From simple 4 channel function generators to our flagship arbitrary waveform generators with interchannel modulation, system mastering capability, and unlimited synchronization capability, all of our waveform generators are designed to allow synchronous signal generation for easy integration into end systems.")
        if (categorySelected==="LDC") setText("Highland Technology offers off the shelf and OEM solutions for many laser driver and control needs including: Fast Pulse Generators for E/O Modulation, Fast Laser Diode Drivers, Seed Laser Pulse Picking, MOPA timing and control, Custom Delay and Waveform Generation, and many more!")
        if (categorySelected==="PHO") setText("Precision fiberoptic and free-space interfaces provide high-speed, low-jitter and low noise signal conversion, and transport of analog and digital signals.")
        if (categorySelected==="MAS") setText("Highland Technology offers a wide array of tools for measurement, simulation, and control. Tachometers, thermocouples, RTDs, precision voltages, current loops, strain gauges, and more can be measured or simulated by Highland's products.")
        if (categorySelected==="OEM") setText("For 25 years Highland has provided custom electronics for challenging customer applications. Areas of expertise include: Picosecond timing, Precision analog and mixed signal processing, Digital delay and pulse generation, High speed photonics and fiberoptic timing distribution, and Aerospace instrumentation and simulation. Products demonstrating these capabilities are shown here.")
        if (categorySelected==="LEG") setText("Need Legacy text")
    }
            
    useEffect(() => {
        const getCategoryData = async () => {
            try {
               const categoryData = await axios.get(`/products/category/${categorySelected}`);
               setCategoryData(categoryData.data);
               assignPageTitle();
               assignPageText();
            } catch (error) {
                console.log(error.response)
            }
        }
        getCategoryData();
    }, [window.location.href])

    return (
        <div>
            <CategoryJumbotron title={title} text={text}/>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <ProductCard categoryData={categoryData}/>
                </div>
                <div className="col-md-1"></div>
                
            </div>
        </div>
    )
}

export default Category
