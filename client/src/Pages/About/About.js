import React from 'react';
import John_Larkin from "./img/JohnLarkin.png";
import Mission_Statement from "./img/Mission.jpeg";
import Highland_Front from "./img/Highland_Front.png";
import highlandStaff from "./img/Highland_Staff.png";
import vmeCrate from "./img/Products.png";

const About = () => {

    const aboutStyles = {
        aboutSection: {
            marginTop: "1%",
            marginBottom: "1%"
        },
        photo: {
            margin: "auto",
        },
        backgroundHeading: {
            textAlign: "center",
            color: "white",
            marginTop: "4%",
            marginBottom: "4%",
        },
        backgroundTxt: {
            color: "white",
            textAlign: "center",
            marginBottom: "3%",
        },
        productsTxt: {
            padding: "3%",
            textAlign: "center",
            backgroundColor: "white",
        },
        aboutText: {
            marginTop: "4%",
        }
    }

    const aboutData = [
        {
            img: John_Larkin,
            title: "Our Story",
            text: 
                [ 
                    "Founded in 1984 by John Larkin, Highland Technology formed to provide products to support scientific innovation, initially focused on high energy physics and NMR spectrometer systems.", 
                    "Over our 40-year history, Highland has expanded to design, manufacture, and support a large catalog of standard and custom electronics for demanding aerospace and defense, scientific, and industrial applications.",
                ]
        },
        {
            img: Mission_Statement,
            title: "Our Mission",
            text: 
                [ 
                    "Highland offers solutions to difficult and critical technical challenges in precision measurement simulation and control systems. We immerse ourselves in understanding the technical needs of our clients so that we can respond to those needs with effective and innovative designs.", 
                    "We want to be the company you enlist to solve your most demanding instrumentation challenges.   ",
                ]
        },
        {
            img: Highland_Front,
            title: "Our Operations",
            text: 
                [
                    "Headquartered in San Francisco, California, Highland occupies a 21,000 square-foot facility housing engineering, manufacturing, sales, marketing, and corporate staff.",
                    "All Highland products are manufactured and tested in-house to guarantee quality and reliability. Our internal Quality Management System is based on ISO and IPC standards. Whenever possible, Highland sources American-made materials, components, and services to ensure high standards of labor and manufacturing.",
                    "Retaining full control over our sourcing and manufacturing processes, including lifecycle planning and component end-of-life management, we can secure both quality and long-term availability of our products and support services."
                    
                ]
        },
        {
            img: vmeCrate,
            title: "Our Products",
            text: 
                [
                    "Highland provides innovative high-precision analog measurement and signal generation, data acquisition and control instrumentation, pulse and picosecond timing delay generation, fiberoptic/photonics, and mixed technology products.",
                ]
        },
        {
            img: highlandStaff,
            title: "Our Business",
            text: 
                [
                    "Highland provides a safe, harmonious, and ethical workplace that prioritizes environmental awareness, philanthropy, and employee welfare and advancement.",
                    "We believe that our most important resources are our employee, customer, and community relationships." 
                    // Emphasizing technical excellence and the highest quality in manufacturing, we can expand our base of intellectual propery and maintain an enjoyable, rewarding, conscientious, and reliable business.",
                ]
        },
    ]

    return (
        <>

            {/* Our Story */}
            <div className="row" style={aboutStyles.aboutSection}>
                <div className="col-md-2"></div>
                <div className="col-md-4" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[0].title}</h2>
                    {aboutData[0].text.map((txt, idx) => (
                    <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-4" style={aboutStyles.photo}>
                    <img src={aboutData[0].img} className="img-fluid mx-auto d-block" alt={aboutData[0].title}/> 
                </div>
                <div className="col-md-2"></div>      
            </div>

            {/* Our Mission */}
            <div className="row" style={aboutStyles.aboutSection}>
                <div className="col-md-2"></div>
                <div className="col-md-4" style={aboutStyles.photo}>
                    <img src={aboutData[1].img} className="img-fluid mx-auto d-block" alt={aboutData[0].title}/> 
                </div>
                <div className="col-md-4" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[1].title}</h2>
                    {aboutData[1].text.map((txt, idx) => (
                    <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-2"></div>      
            </div>

            {/* Our Operations */}
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 heroContainer img-fluid" style={{backgroundImage: `url(${aboutData[2].img})`}}>
                    <h2 style={aboutStyles.backgroundHeading}>{aboutData[2].title}</h2>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                            {aboutData[2].text.map((txt, idx) => (
                            <h5 className="heroText" style={aboutStyles.backgroundTxt} key={idx}>{txt}</h5>
                            ))}
                            </div>
                            <div className="col-md-2"></div>
                        </div>      
                </div>
            </div>

            {/* Our Products */}
            <div className="row" style={aboutStyles.aboutSection}>
                <div className="col-md-2"></div>
                <div className="col-md-4" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[3].title}</h2>
                    {aboutData[3].text.map((txt, idx) => (
                    <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-4" style={aboutStyles.photo}>
                    <img src={aboutData[3].img} className="img-fluid mx-auto d-block" alt={aboutData[0].title}/> 
                </div>
                <div className="col-md-2"></div>      
            </div>

            {/* Our Business */}
            <div className="row" style={aboutStyles.aboutSection}>
                <div className="col-md-2"></div>
                <div className="col-md-4" style={aboutStyles.photo}>
                    <img src={aboutData[4].img} className="img-fluid mx-auto d-block" alt={aboutData[0].title}/> 
                </div>
                <div className="col-md-4" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[4].title}</h2>
                    {aboutData[4].text.map((txt, idx) => (
                    <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-2"></div>      
            </div>

        </>

    )
}

export default About


