import React, { useEffect, useState } from 'react';
import All_Products from "./img/All_Products.png";
import VME from "./img/VME.png";
import Digital_Delay_Generators from "./img/Digital_Delay_Generators.png";
import Pulse_Generators from "./img/Pulse_Generators.png";
import Waveform_Generators from "./img/Waveform_Generators.png";
import Laser_Drivers_Controllers from "./img/Laser_Drivers_Controllers.png";
import Photonics from "./img/Photonics.png";
import Measurement_Simulation from "./img/Measurement_Simulation.png";
import OEM_Embedded from "./img/OEM.png";
import Legacy from "./img/Legacy.png"


const CategoryJumbotron = ({title, text}) => {

    const [background, setBackground] = useState()

    useEffect(() => {
        const assignBackground = () => {
            if (title==="All Products") setBackground(All_Products)
            if (title==="VME") setBackground(VME)
            if (title==="DIGITAL DELAY GENERATORS") setBackground(Digital_Delay_Generators)
            if (title==="PULSE GENERATORS") setBackground(Pulse_Generators)
            if (title==="WAVEFORM GENERATORS") setBackground(Waveform_Generators)
            if (title==="LASER DRIVERS & CONTROLLERS") setBackground(Laser_Drivers_Controllers)
            if (title==="PHOTONICS") setBackground(Photonics)
            if (title==="MEASUREMENT & SIMULATION") setBackground(Measurement_Simulation)
            if (title==="OEM/EMBEDDED") setBackground(OEM_Embedded)
            if (title==="LEGACY") setBackground(Legacy)
        };
        assignBackground();
    }, [title])

    return (
        <div className="row">
            <div className="heroContainer" style={{backgroundImage: `url(${background})`}}>
                <h1 className="heroHeading">{title}</h1>
                <div className="heroBody">
                    <h5 className="heroText">{text}</h5>
                </div>
            </div>
        </div>
    )
}

export default CategoryJumbotron
