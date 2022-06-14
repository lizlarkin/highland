import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';
import cymerAward from "./images/Cymer_Award.png";
import llnlAward from "./images/LLNL_Award.png";
import varianAward from "./images/Varian_Award.png";
import aerospaceAward from "./images/Aerospace_Defense_Award.png";

const testimonials = [
    {
        photo: llnlAward,
        text: 
        [
            `"Over the last 10 plus years, Highland Technology, Inc. has consistently provided successful custom solutions in support of projects within Lawrence Livermore National Laboratory's Laser Programs.`, 
            `Highland designed and built a large order of custom Arbitrary Waveform Generator (AWG) high-speed electronics subsystems to a very demanding schedule and set of requirements for the National Ignition Facility (NIF). These subsystems are a key part of the NIF Master Oscillator Pulse Shaping System. The quality and control of each pulse shape at the target is critical to the success of experiments in the upcoming National Ignition Campaign (NIC)."`,
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
            `"Hamilton Sundstrand [Special Test Equipment] has been using Highland Technology VME products for nearly 15 years. We have worked closely with them over the years on creating solutions to meet our diverse and complex I/O needs. We have had a number of products built to uniquely meet our real-time simulation, control, and data acquisition needs to satisfy requirements for our military and commercial aerospace programs.`, 
            `Highland Technology is an outstanding company with whom to do business. They REALLY listen to the customer and will stop at nothing to make sure the customer is completely satisfied. All the products we have purchased from HT have always worked as advertised. Additionally, they have always been very responsive to adding capability in firmware or hardware at little or no cost to us.`,
            `Highland’s motto is 'Get the Easy Stuff Elsewhere.' If you have an instrumentation interface problem that you can’t solve, Highland Technology is the company to do it. With our team’s efforts here at Hamilton, Highland Technology is the first company that we go to."`,
        ],
        authors: 
        [
            "Dean W. Anneser, Real-time Test Systems, Fellow",
        ],
        org: "United Technologies",
    },
    {
        photo: cymerAward,
        text: 
        [
            `"In recognition of your contributions to Successful Shipment of the NLA 100`, 
            `First shipment - January 31, 2003`,
            `Demonstrating Cymer's Values!"`,
        ],
        org: "Cymer",
    },
    {
        text: 
        [
            `"On behalf of the USM-464 Project Team, we would like to recognize you and your team at Highland Technology for all of your efforts over the past two years on the USM-464 Countermeasures Test Set (CTS). The Highland Project Team came up with multiple technical solutions for the Function Generator that supported BAE Systems in presenting a more viable end product.`, 
            `Working together, the Highland and USM-464 Project Teams were able to evaluate issues and come up with resolutions to problems that arose in the ongoing development of the USM-464 CTS. Our USM-464 Project Team appreciates your hard work and dedication to meeting aggressive program commitments. We look forward to working closely with Highland Technology. Keep up the great work!"`,
        ],
        authors: 
        [
            "Stephen E. Ford, Platform Electronic Support Equipment Programs, Manager",
            "Frederick V. Cross, USM-464 SRMU Production, Program Manager",
            "Erik T. DeVinney, Electronic Warfare, Project Engineering Manager",
            "Glenn E. Simons,  Electronic Warfare, Sr. Subcontract Administrator"
        ],
        org: "BAE Systems",
    },
]

const testimonialsStyles = {
    testimonialRow: {
        marginBottom: "2%"
    },
    testimonialTitle: {
        marginTop: "2%",
        marginBottom: "2%"
    },
    testimonialAuthors: {
        marginTop: "2%"
    }
    
}


const Testimonials = () => {
    return (
        <div>
            <GenJumbo />
            <div className="container">

                {/* Aerospace & Defense Award */}
                <div className="row" style={testimonialsStyles.testimonialRow}>
                    <div class="row g-1">
                        <div class="col-md-6">
                            <img src={aerospaceAward} class="img-fluid rounded-start" alt={"Aerospace Defense & Review Award"}/>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                text
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Array Content */}
                <div class="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-12" key={index}>
                            <div class="card mb-3" >
                            {testimonial.photo?
                                <div class="row g-1">
                                    <div class="col-md-9">
                                        <div class="card-body">
                                            <h5 className="card-title" style={testimonialsStyles.testimonialTitle}>{testimonial.org}</h5>
                                            <blockquote class="blockquote mb-0">
                                                {testimonial.text.map((para, idx) => (
                                                    <p key={idx}>{para}</p>
                                                ))}
                                                {testimonial.authors?
                                                testimonial.authors.map((auth, id) => (
                                                    <footer style={testimonialsStyles.testimonialAuthors} key={id} class="blockquote-footer"> <cite title="Source Title">{auth}</cite></footer>
                                                )):null}
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <img src={testimonial.photo} class="img-fluid rounded-start" alt={testimonial.org + "Award"}/>
                                    </div>
                                </div>
                            :
                            <div class="row g-1">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 className="card-title" style={testimonialsStyles.testimonialTitle}>{testimonial.org}</h5>
                                    <blockquote class="blockquote mb-0">
                                        {testimonial.text.map((para, idx) => (
                                            <p key={idx}>{para}</p>
                                        ))}
                                        {testimonial.authors?
                                        testimonial.authors.map((auth, id) => (
                                            <footer style={testimonialsStyles.testimonialAuthors} key={id} class="blockquote-footer"> <cite title="Source Title">{auth}</cite></footer>
                                        )):null}
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                            }

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
