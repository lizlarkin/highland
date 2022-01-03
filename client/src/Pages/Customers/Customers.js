import React from 'react';
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import Agilent from './Images/Agilent.png';
import Andor from './Images/Andor.png';
import BAE from './Images/BAE.png';
import Boeing from './Images/Boeing.png';
import CERN from './Images/CERN.png';
import EADS from './Images/EADS.png';
import GeneralAtomics from './Images/General_Atomics.png';
import GeneralElectric from './Images/General_Electric.png';
import Hamamatsu from './Images/Hamamatsu.png';

const Customers = () => {

    // TO DO: What happens with different multiple? 

    const customerStyles = {
        logo: {
            border: "none",
        },
    }

    const customersArr = [
        [Agilent, "Agilent Technologies", "Embedded custom electronics for NMR/MRI systems"],
        [Andor, "Andor Technology", "Embedded custom timing electronics for ICCD camera controllers"],
        [BAE, "BAE Systems", "Custom function generation for radar test sets in electronic countermeasures"],
        [Boeing, "Boeing", "Simulation for avionic systems"],
        [CERN, "CERN", "Picosecond delay generation for particle accelerators"],
        [EADS, "EADS Group", "Frequency measurement and arbitrary waveform generation for aerospace systems"],
        [GeneralAtomics, "General Atomics", "Pulse generation for nuclear fusion diagnostics and measurements"],
        [GeneralElectric, "General Electric", "Instrumentation for testing of locomotive turbine engines"],
        [Hamamatsu, "Hamamatsu Photonics", "Compact delay generators for photonic systems"],
        [CERN, "Hamilton Sundstrand", "Measurement and simulation instrumentation for aircraft power systems"],
        [CERN, "Thomas Jefferson National Accelerator Facility", "Instrumentation for superconductive magnet and cavity controllers and cryogenic temperature control"],
        [CERN, "Lawrence Livermore National Laboratory", "Custom timing systems, beam modulators, and diagnostics for National Ignition Facility"],
        [CERN, "Lockheed Martin Corporation", "Waveform generators for flight simulator training"],
        [CERN, "Los Alamos National Laboratory", "Electrical and fiber optic converters for diagnostic timing systems"],
        [CERN, "Northrop Grumman Corporation", "Digital delay and pulse generation for DOD applications"],
        [CERN, "Panasonic Corporation", "Delay generators for research and development of cameras"],
        [CERN, "Pratt & Whitney", "Aircraft engine test and simulation instrumentation"],
        [CERN, "Raytheon Technologies Corporation", "Fiber optical and electrical converters for submarine communication systems"],
        [CERN, "Science Applications International Corporation", "Specialized function generators for aircraft heads-up display controllers"],
        [CERN, "United Airlines", "APU airplane test cell instrumentation"],
    ]

    // group customers into alternating subarrays of 3 and 2
    const custGroups = (list, group) => {
      const chunkArray = [];
      let cc = 0, i = 0;
      while (i < list.length) {
        const csize = group[cc];
        chunkArray.push(list.slice(i, i + csize));
        cc = (cc + 1) % group.length;
        i += csize;
      }
      return chunkArray;
    }
    
    const rows = custGroups(customersArr, [3,2]);
      
    return (
        <div>
            <CategoryJumbotron title={"Customers"}/>

            {rows?
            rows.map((customers, index) => (
                <div className="row" key={index}>
                    <div className="col-md-1"></div>
                    {customers.length===3?
                    customers.map((customer,idx) => (
                        <>
                            <div className="col-md-2">
                                <a data-bs-toggle="collapse" href={"#collapseExample"+index.toString()} role="button" aria-expanded="false" aria-controls={"collapseExample"+index.toString()}>
                                    <img src={customer[0]} className="img-fluid" alt={customer[1]}/>
                                </a>
                                <div className="collapse" id={"collapseExample"+index.toString()}>
                                    <div className="card card-body">
                                        {customer[2]}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </>
                    ))
                    :customers.length===2?
                    customers.map((customer,idx) => (
                        <>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <a data-bs-toggle="collapse" href={"#collapseExample"+index.toString()} role="button" aria-expanded="false" aria-controls={"collapseExample"+index.toString()}>
                                    <img src={customer[0]} className="img-fluid" alt={customer[1]}/>
                                </a>
                                <div className="collapse" id={"collapseExample"+index.toString()}>
                                    <div className="card card-body">
                                        {customer[2]}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                    :null}   
                </div>
        
            )):null}

           
        </div>
    )
}

export default Customers
