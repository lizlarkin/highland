import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';
import NIFAward from "./images/NIF_Award.png";
import aerospaceAward from "./images/Aerospace_Defense_Award.png";
import cymerAward from "./images/Cymer_Award.png";
import llnlAward from "./images/LLNL_Award.png";


const testimonials = [
    {
        text: 
        [
            `Hamilton Sundstrand [Special Test Equipment] has been using Highland Technology VME products for nearly 15 years. We have worked closely with them over the years on creating solutions to meet our diverse and complex I/O needs. We have had a number of products built to uniquely meet our real-time simulation, control, and data acquisition needs to satisfy requirements for our military and commercial aerospace programs.`, 
            `Highland Technology is an outstanding company with whom to do business. They REALLY listen to the customer and will stop at nothing to make sure the customer is completely satisfied. All the products we have purchased from HT have always worked as advertised. Additionally, they have always been very responsive to adding capability in firmware or hardware at little or no cost to us.`,
            `Highland’s motto is 'Get the Easy Stuff Elsewhere.' If you have an instrumentation interface problem that you can’t solve, Highland Technology is the company to do it. With our team’s efforts here at Hamilton, Highland Technology is the first company that we go to.`,
        ],
        authors: 
        [
            "Dean W. Anneser, Real-time Test Systems, Fellow",
        ],
        org: "United Technologies",
    },
    {
        text: 
        [
            `Over the last 10 plus years, Highland Technology, Inc. has consistently provided successful custom solutions in support of projects within Lawrence Livermore National Laboratory's Laser Programs.`, 
            `Highland designed and built a large order of custom Arbitrary Waveform Generator (AWG) high-speed electronics subsystems to a very demanding schedule and set of requirements for the National Ignition Facility (NIF). These subsystems are a key part of the NIF Master Oscillator Pulse Shaping System. The quality and control of each pulse shape at the target is critical to the success of experiments in the upcoming National Ignition Campaign (NIC).`,
        ],
        authors: 
        [
            "D. F. Browning, Master Oscillator Systems, Engineer",
        ],
        org: "National Ignition Facility, Lawrence Livermore National Laboratory",
    },
    {
        text: 
        [
            `On behalf of the USM-464 Project Team, we would like to recognize you and your team at Highland Technology for all of your efforts over the past two years on the USM-464 Countermeasures Test Set (CTS). The Highland Project Team came up with multiple technical solutions for the Function Generator that supported BAE Systems in presenting a more viable end product.`, 
            `Working together, the Highland and USM-464 Project Teams were able to evaluate issues and come up with resolutions to problems that arose in the ongoing development of the USM-464 CTS. Our USM-464 Project Team appreciates your hard work and dedication to meeting aggressive program commitments. We look forward to working closely with Highland Technology. Keep up the great work!`,
        ],
        authors: 
        [
            "Stephen E. Ford, Platform Electronic Support Equipment Programs, Manager",
            "Frederick V. Cross, USM-464 SRMU Production, Program Manager",
            // "Erik T. DeVinney, Electronic Warfare, Project Engineering Manager",
            // "Glenn E. Simons,  Electronic Warfare, Sr. Subcontract Administrator"
        ],
        org: "BAE Systems",
    },
]

const testimonialsStyles = {
    testimonialRow: {
        marginBottom: "4%"
    },
    testimonialCredit: {
        marginTop: "4%"
    },
}


const Testimonials = () => {
    return (
        <div>
            <GenJumbo />
            <div className="container-fluid">
                
                {/* Row 2: Aerospace & Defense Award */}
                <div className="row" style={testimonialsStyles.testimonialRow}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={aerospaceAward} className="img-fluid rounded-start" alt="Aerospace Defense & Review Award"/>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                {/* Row 1: Collins + 2010 LLNL */}
                <div className="row" style={testimonialsStyles.testimonialRow}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card text-dark bg-light">
                            <div className="card-body">
                                <i className="fa-duotone fa-quote-left"></i>
                                {testimonials[0].text.map((txt, index) => (
                                    <p className="card-text" key={index}>{txt}</p>
                                ))}
                                <i className="fa-duotone fa-quote-right"></i>
                                <h5 className="card-title" style={testimonialsStyles.testimonialCredit}>{testimonials[0].org}</h5>
                                {testimonials[0].authors.map((auth, idx) => (
                                    <h6 className="card-subtitle mb-2 text-muted" key={idx}>{auth}</h6>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card border-0">
                            <img src={NIFAward} className="card-img-top" alt="2010 NIF PM Award"/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                {/* Row 3: BAE + Cymer */}
                <div className="row" style={testimonialsStyles.testimonialRow}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card border-0">
                            <img src={cymerAward} className="card-img-top" alt="2003 Cymer NLA Award"/>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card text-dark bg-light">
                            <div className="card-body">
                                <i className="fa-duotone fa-quote-left"></i>
                                {testimonials[1].text.map((txt, index) => (
                                    <p className="card-text" key={index}>{txt}</p>
                                ))}
                                <i className="fa-duotone fa-quote-right"></i>
                                <h5 className="card-title" style={testimonialsStyles.testimonialCredit}>{testimonials[1].org}</h5>
                                {testimonials[1].authors.map((auth, idx) => (
                                    <h6 className="card-subtitle mb-2 text-muted" key={idx}>{auth}</h6>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                {/* Row 4: BAE + 2008 LLNL */}
                <div className="row" style={testimonialsStyles.testimonialRow}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card text-dark bg-light">
                            <div className="card-body">
                                <i className="fa-duotone fa-quote-left"></i>
                                {testimonials[2].text.map((txt, index) => (
                                    <p className="card-text" key={index}>{txt}</p>
                                ))}
                                <i className="fa-duotone fa-quote-right"></i>
                                <h5 className="card-title" style={testimonialsStyles.testimonialCredit}>{testimonials[2].org}</h5>
                                {testimonials[2].authors.map((auth, idx) => (
                                    <h6 className="card-subtitle mb-2 text-muted" key={idx}>{auth}</h6>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div className="card border-0">
                            <img src={llnlAward} className="card-img-top" alt="2008 LLNL NIF Award"/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
