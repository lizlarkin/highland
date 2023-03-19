import React from 'react';
import htifront from "./img/htifront.jpg";
import vmeCrate from "./img/vmeCrate.png";
import smtLine from "./img/Line2.png";
import Highland_Front from "./img/Highland_Front.png"

const About = () => {

    const aboutStyles = {
        aboutHeading: {
            textAlign: "center"
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
            img: Highland_Front,
            title: "About Highland Technology",
            text: 
                [ 
                    "Founded in 1984, Highland Technology designs, manufactures, and supports standard and custom electronics for demanding aerospace and defense, scientific, and industrial applications.",
                    "Headquartered in San Francisco, California, Highland occupies a 21,000 square-foot facility housing engineering, manufacturing, sales, marketing, and corporate staff. Highland is an owner operated, privately held California corporation."
                ]
        },
        {
            img: vmeCrate,
            title: "Our Products",
            text: 
                [
                    "Highland provides innovative high-precision analog measurement and signal generation, data acquisition and control instrumentation, pulse and picosecond timing delay generation, fiberoptic/photonics, and mixed technology products. ",
                    "Using existing intellectual property and expertise, Highland can rapidly develop custom and embedded electronics to provide solutions to our customer's challenges. We emphasize a thorough understanding of customer applications, comprehensive documentation, direct support, and long term product availability."
                ]
        },
        {
            img: smtLine,
            title: "Our Operations",
            text: 
                [
                    "All Highland products are manufactured and tested in-house to guarantee quality and reliability. Whenever possible, Highland sources American-made materials, components, and services to ensure high standards of both product and labor.",
                    "Our lifecycle planning procedure, including component and spares management, component end-of-life handling, and stocking practices ensures long-term availability of products and support."
                ]
        },
        {
            img: htifront,
            title: "Our Business",
            text: 
                [
                    "Highland's leadership insists on providing a safe, harmonious, and ethical workplace that prioritizes corporate social responsibility, including environmental awareness, community outreach, and employee driven ...",
                    // "Highland is committed to providing a safe, harmonious, and ethical workplace. In conjunction with policies and procedures, management works to ensure ethical and responsible corporate social responsibility and compliance with all local, state, and federal laws and guidelines.",
                    "We believe that our most important resources are our employee and customer relationships. Emphasizing technical excellence and the highest quality in manufacturing, we can expand our base of intellectual propery and maintain an enjoyable, rewarding, conscientious, and reliable business.",
                ]
        },
    ]

    return (
        <>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 heroContainer img-fluid" style={{backgroundImage: `url(${aboutData[0].img})`}}>
                    <h1 className="heroHeading">{aboutData[0].title}</h1>
                        <div className="heroBody">
                            {aboutData[0].text.map((txt, idx) => (
                            <h4 className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</h4>
                            ))}
                        </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[1].title}</h2>
                    {aboutData[1].text.map((txt, idx) => (
                        <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-5">
                    <img src={aboutData[1].img} className="img-fluid" alt={aboutData[1].title}/>   
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <img src={aboutData[2].img} className="img-fluid" alt={aboutData[2].title}/> 
                </div>
                    <div className="col-md-5" style={aboutStyles.productsTxt}>
                        <h2 style={aboutStyles.aboutHeading}>{aboutData[2].title}</h2>
                        {aboutData[2].text.map((txt, idx) => (
                        <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                        ))}
                    </div>
                    <div className="col-md-1">
                    </div>      
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5" style={aboutStyles.productsTxt}>
                    <h2 style={aboutStyles.aboutHeading}>{aboutData[3].title}</h2>
                    {aboutData[3].text.map((txt, idx) => (
                        <p className="heroText" style={aboutStyles.aboutText} key={idx}>{txt}</p>
                    ))}
                </div>
                <div className="col-md-5">
                    <img src={aboutData[3].img} className="img-fluid" alt={aboutData[3].title}/>   
                </div>
                <div className="col-md-1"></div>
            </div>

        </>

    )
}

export default About


