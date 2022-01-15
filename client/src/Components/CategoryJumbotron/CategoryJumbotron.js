import React, { useEffect, useState } from 'react';
import Digital_Delay_Generators from "./img/Digital_Delay_Generators.png"
import Laser_Drivers_Controllers from "./img/Laser_Drivers_Controllers.png"


const CategoryJumbotron = ({title, text}) => {

    const [background, setBackground] = useState()

    useEffect(() => {
        const assignBackground = () => {
            if (title==="VME") setBackground("VME")
            if (title==="DIGITAL DELAY GENERATORS") setBackground(Digital_Delay_Generators)
            if (title==="PULSE GENERATORS") setBackground("PULSE GENERATORS")
            if (title==="WAVEFORM GENERATORS") setBackground("WAVEFORM GENERATORS")
            if (title==="LASER DRIVERS & CONTROLLERS") setBackground(Laser_Drivers_Controllers)
            if (title==="PHOTONICS") setBackground("PHOTONICS")
            if (title==="MEASUREMENT & SIMULATION") setBackground("MEASUREMENT & SIMULATION")
            if (title==="OEM/EMBEDDED") setBackground("OEM/EMBEDDED")
            if (title==="LEGACY") setBackground("LEGACY")
        };
        assignBackground();
    }, [title])

    return (
        <div className="row">
            <div className="col-md-12 heroContainer" style={{backgroundImage: `url(${background})`}}>
                <h1 className="heroHeading">{title}</h1>
                <div className="heroBody">
                    <h5 className="heroText">{text}</h5>
                </div>
            </div>
        </div>
    )
}

export default CategoryJumbotron
