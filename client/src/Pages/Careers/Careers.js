import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';

const Careers = () => {

    const careersStyles = {
        careersHeader: {
            textAlign: "center",
            color: "#0042CF",
            marginTop: "3%"
        },
    }

    const openPositions = [
        {
            title: "Electronics Design Engineer",
            intro: "Highland Technology is looking for a Design Engineer with a strong background in electronic embedded systems, interested in working with projects that are mentally challenging, in a mission-driven, collaborative environment and prepared to tackle a broad selection of challenges. You will be expected to construct and guide high-performance electronic development.",
            responsibilities: [
                "Design digital and analog circuits",
                "Establish requirement specifications",
                "Brainstorm and define architectures",
                "Write and supervise microprocessor and FPGA code",
                "Create design and production test plans and programs",
                "Write thorough product documentation",
                "Participate in design reviews and provide input to identify potential issues and drive design choices",
            ],
            requirements: [
                "B.S in Electrical Engineering or similar",
                "2+ years of work experience",
                "Digital circuit design and analysis",
                "Analog circuit design and analysis",
                "Experience with digital communication such as Ethernet, RS-232, USB, etc.",
                "Ability to operate standard electrical and electronics test equipment such as a DVM, oscilloscope, function generator, etc.",
                "Proficiency with the following embedded programming languages: C and VHDL",
                "Experience with FPGA and microcontrollers",
                "Experience with Xilinx and Altera design tools",
                "Embedded Linux",
                "Experience with Python or any Object-Oriented Programming languages",
                "Effective communication skills, and proficient use of the English language",
                "US Citizenship",
            ],
        },
        {
            title: "Production Team Lead",
            intro: "Production Team Lead will lead manufacturing team members in electronic and mechanical assembly of Highland Technology products. Products comprise complex, high-density PCAs, cable assemblies, point-to-point wiring, and small chassis installations.",
            responsibilities: [
                "Running automatic machinery including automatic pick and place line and selective solder machine",
                "Planning and prioritizing daily work schedules and allocating resources",
                "Documenting policies and procedures, and monitoring and reviewing production activities for conformance to procedures, work instructions, and quality standards",
                "Solving problems to ensure stable and efficient workflow",
                "Overseeing machine maintenance",
                "Supervising and conforming with safety, compliance, and environmental regulations",
                "Facilitating returned material flow to ensure expeditious turnaround and reliability",
                "Assisting with material control operations as necessary",
                "Maintaining a clean and organized work environment",
            ],
            other: [
                "Applicants should have experience participating as an active member of the production assembly team as demonstrated with the following skills:",
                "Populating PCBs on a production basis",
                "Using hand tools, power tools, fixtures, and jigs to secure components and assemblies",
                "Reworking and assembling under microscope or other magnifying device",
                "Following and monitoring adherence to quality standards",
                "Following documentation including work orders, drawings, wiring diagrams, parts lists, engineering change orders, and procedures",
                "Documenting work-in-process and completed projects",
                "Understanding and following verbal instructions",
            ]
        },
        {
            title: "Technician or Project Engineer",
            intro: "A technician or project engineer will work closely with design engineers to support product development and troubleshoot across many domains. Applicants should be comfortable working with op-amps, basic transistor circuits, and analog filtering, and have skills in measurement and soldering.",
            responsibilities: [
                "Researching, selecting, and testing components",
                "Breadboarding circuits",
                "Assisting in circuit, microprocessor and FPGA code, and production testing designs",
                "Writing thorough product documentation",
            ]
        },
        {
            title: "Paid Internships",
            intro: "Highland will consider paid internships for students or recent graduates who have an exceptional enthusiasm and talent for electronic design.",
        },
        
    ]

    return (
        <div>
            <div>
                <GenJumbo />
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <h2 style={careersStyles.careersHeader}>Open Positions</h2>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {openPositions.length>0?
                        <div className="accordion" id="accordionExample">
                        {openPositions.map((position, index) => (
                              <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls="collapseOne">
                                    {position.title}
                                    </button>
                                </h2>
                              <div id={"collapse"+index} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">
                                        <div className="card-title">{position.intro}</div>
                                        {position.responsibilities?
                                            <div style={{marginTop: "2%"}}>
                                            <h6>Responsibilities:</h6>
                                            <ul>
                                                {position.responsibilities.map((resp, idx) => (
                                                    <li key={idx}>{resp}</li>
                                                ))}
                                            </ul>
                                            </div>
                                        :null}
                                        {position.requirements?
                                            <>
                                            <h6>Requirements:</h6>
                                            <ul>
                                                {position.requirements.map((reqs, idx) => (
                                                    <li key={idx}>{reqs}</li>
                                                ))}
                                            </ul>
                                            </>
                                        :null}
                                        {position.other?
                                            <>
                                            <h6>{position.other[0]}</h6>
                                            <ul>
                                                {position.other.splice(1).map((oth, idx) => (
                                                    <li key={idx}>{oth}</li>
                                                ))}
                                            </ul>
                                            </>
                                        :null}
                                        <p>This offer is for full-time, non-remote, salaried employment. Salary is commensurate with qualifications and experience. Pay package includes health and dental benefits, vacation, performance-based bonus opportunities, and retirement plan.</p>
                                        <p>To apply, please send resume to <a href="mailto: careers@highlandtechnology.com" className="card-link">Careers</a>.</p>
                                    </div>
                                </div>
                              </div>
                            </div>   
                        ))}
                        </div>
                    :null}    
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Careers
