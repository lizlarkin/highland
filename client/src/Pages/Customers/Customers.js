import React, { useState} from "react";
import Agilent from './Images/Agilent.png';
import Andor from './Images/Andor.png';
import BAE from './Images/BAE.png';
import Boeing from './Images/Boeing.png';
import CERN from './Images/CERN.png';
import EADS from './Images/EADS.png';
import GeneralAtomics from './Images/General_Atomics.png';
import GeneralDynamics from './Images/General_Dynamics.png';
import GeneralElectric from './Images/General_Electric.png';
import Hamamatsu from './Images/Hamamatsu.png';
import HamiltonSundstrand from './Images/Hamilton_Sundstrand.png';
import Honeywell from './Images/Honeywell.png';
import IBM from './Images/IBM.png';
import JeffersonLab from './Images/Jefferson_Lab.png';
import JohnsHopkins from './Images/Johns_Hopkins.png';
import L3Harris from './Images/L3Harris.png';
import LLNL from './Images/LLNL.png';
import LockheedMartin from './Images/Lockheed_Martin.png';
import LANL from './Images/LANL.png';
import MIT from './Images/MIT_LL.png';
import NASA from './Images/NASA_JPL.png';
import NIST from './Images/NIST.png';
import NorthropGrumman from './Images/Northrop_Grumman.png';
import Panasonic from './Images/Panasonic.png';
import PNNLBattelle from './Images/PNNL_Battelle.png';
import PrattWhitney from './Images/Pratt_Whitney.png';
import Raytheon from './Images/Raytheon.png';
import RollsRoyce from './Images/Rolls_Royce.png';
import Saab from './Images/Saab.png';
import SAIC from './Images/SAIC.png';
import Sandia from './Images/Sandia.png';
import Thales from './Images/Thales.png';
import Thorlabs from './Images/Thorlabs.png';
import Trumpf from './Images/Trumpf.png';
import United from './Images/United.png';
import GenJumbo from "../../Components/GeneralJumbotron/GenJumbo";

const Customers = () => {

    // TO DO: Needs to be in correct multiple.

    const customerStyles = {
        custDiv: {
            minHeight: "125px",
            backgroundColor: "white",
            marginBottom: "3%",
            border: "none",
        },
        text: {
            textAlign: "center",
            width: "150%"
        }
    }

    const customersArr = [
        [Agilent, "Agilent Technologies", "Embedded custom electronics for NMR/MRI systems"],
        [Andor, "Andor Technology", "Embedded custom timing electronics for ICCD camera controllers"],
        [BAE, "BAE Systems", "Custom function generation for radar test sets in electronic countermeasures"],
        [Boeing, "Boeing", "Simulation for avionic systems"],
        [CERN, "CERN", "Picosecond delay generation for particle accelerators"],
        [EADS, "EADS Group", "Frequency measurement and arbitrary waveform generation for aerospace systems"],
        [GeneralAtomics, "General Atomics", "Pulse generation for nuclear fusion diagnostics and measurements"],
        [GeneralDynamics, "General Dynamics", ""],
        [GeneralElectric, "General Electric", "Instrumentation for testing of locomotive turbine engines"],
        [Hamamatsu, "Hamamatsu Photonics", "Compact delay generators for photonic systems"],
        [HamiltonSundstrand, "Hamilton Sundstrand", "Measurement and simulation instrumentation for aircraft power systems"],
        [Honeywell, "Honeywell", ""],
        [IBM, "IBM Corporation", ""],
        [JeffersonLab, "Thomas Jefferson National Accelerator Facility", "Instruments for superconductive magnet/cavity controllers and cryogenic temperature control"],
        [JohnsHopkins, "Johns Hopkins University Applied Physics Laboratory", ""],
        [L3Harris, "L3Harris Technologies", ""],
        [LLNL, "Lawrence Livermore National Laboratory", "Custom timing systems, beam modulators, and diagnostics for National Ignition Facility"],
        [LockheedMartin, "Lockheed Martin Corporation", "Waveform generators for flight simulator training"],
        [LANL, "Los Alamos National Laboratory", "Electrical and fiber optic converters for diagnostic timing systems"],
        [MIT, "MIT Lincoln Laboratory", ""],
        [NASA, "NASA-JPL", ""],
        [NIST, "National Institute of Standards and Technology", ""],
        [NorthropGrumman, "Northrop Grumman Corporation", "Digital delay and pulse generation for DOD applications"],
        [Panasonic, "Panasonic Corporation", "Delay generators for research and development of cameras"],
        [PNNLBattelle, "Pacific Northwest National Laboratory", ""],
        [PrattWhitney, "Pratt & Whitney", "Aircraft engine test and simulation instrumentation"],
        [Raytheon, "Raytheon Technologies Corporation", "Fiber optical and electrical converters for submarine communication systems"],
        [RollsRoyce, "Rolls Royce", ""],
        [Saab, "Saab AB", ""],
        [SAIC, "Science Applications International Corporation", "Specialized function generators for aircraft heads-up display controllers"],
        [Sandia, "Sandia National Laboratories", ""],
        [Thales, "Thales Group", ""],
        [Thorlabs, "Thorlabs", ""],
        [Trumpf, "Trumpf Group", ""],
        [United, "United Airlines", "APU airplane test cell instrumentation"],
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

    // Flip customer logo and customer application text
    const [custNum, setCustNum] = useState();

    const storeCustNum = (e) => {
        setCustNum(e.target.id)
    } 

    return (
        <div>
            <div>
                <GenJumbo />
            </div>

            {rows?
            rows.map((customers, index) => (
                <div className="row" key={index}>
                    <div className="col-md-1"></div>
                    {customers.length===3?
                    customers.map((customer, idx) => (
                        <React.Fragment key={idx}>
                            {customer[2].length>0?
                            <button 
                                className="col-md-2" 
                                onClick={storeCustNum}
                                style={customerStyles.custDiv}>
                                    {
                                    custNum===index.toString()+idx.toString()?
                                    <div className="card card-body" style={customerStyles.text}>
                                        {customer[2]}
                                    </div>
                                    :
                                    <img src={customer[0]} className="img-fluid" alt={customer[1]} id={index.toString()+idx.toString()}/>
                                    }
                            </button>
                            :
                            <div 
                            className="col-md-2" 
                            style={customerStyles.custDiv}>
                                <img src={customer[0]} className="img-fluid" alt={customer[1]} id={index.toString()+idx.toString()}/>
                            </div>
                            }
                            <div className="col-md-2"></div>
                        </React.Fragment>
                    ))
                    :customers.length===2?
                    customers.map((cust, ix) => (
                        <React.Fragment key={ix}>
                            <div className="col-md-2"></div>
                            {cust[2].length>0?
                            <button className="col-md-2"  
                                onClick={storeCustNum}
                                style={customerStyles.custDiv}>
                                    {custNum===index.toString()+ix.toString()?
                                    <div className="card card-body" style={customerStyles.text}>
                                        {cust[2]}
                                    </div>
                                    :
                                    <img src={cust[0]} className="img-fluid" alt={cust[1]} id={index.toString()+ix.toString()}/>
                                    }
                            </button>
                            :
                            <div className="col-md-2"  
                            style={customerStyles.custDiv}>
                                <img src={cust[0]} className="img-fluid" alt={cust[1]} id={index.toString()+ix.toString()}/>
                            </div>
                            }
                        </React.Fragment>
                    ))
                    :null}   
                </div>
        
            )):null}

           
        </div>
    )
}

export default Customers
