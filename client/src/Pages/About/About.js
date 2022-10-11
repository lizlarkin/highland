import React from 'react';
import htifront from "./img/htifront.jpg";
import vmeCrate from "./img/vmeCrate.png";
import smtLine2 from "./img/smtLine2.jpg";

const About = () => {

    const aboutStyles = {
        imgSpace: {
            marginBottom: "-3%"
        },
        paragraph: {
            marginTop: "2%"
        },
    }

    const aboutData = [
        {
            img: htifront,
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
                    "Highland designs innovative high-precision analog measurement and signal generation, data acquisition and control instrumentation, pulse and picosecond timing delay generation, fiberoptic/photonics, and mixed technology products.",
                    "Using existing technology and expertise, Highland can rapidly develop custom and embedded electronics to provide solutions to our customers challenges. We emphasize a thorough understanding of customer applications, comprehensive documentation, direct support, and long term product availability."
                ]
        },
        {
            img: smtLine2,
            title: "Our Operations",
            text: 
                [
                    "Highland strives to deliver high quality, reliable products. All Highland products are manufactured and tested in-house or by qualified US domestic partners. Whenever possible, Highland sources American-made materials, components, and services to ensure high quality.",
                    "Our product lifecycle planning, including component and spares management, component end-of-life handling, and stocking practices ensures long-term availability of products and support."
                ]
        },
        {
            img: htifront,
            title: "Our Business",
            text: 
                [
                    "Highland is committed to providing a safe, harmonious, and ethical workplace. In conjunction with policies and procedures, management works to ensure ethical and responsible corporate social responsibility and compliance with all local, state, and federal laws and guidelines.",
                    "We believe that the most important resources are our employees and customer relationships. Emphasizing technical excellence and the highest quality in manufacturing, we can expand our base of intellectual propery and maintain an enjoyable, rewarding, conscientious, and reliable business.",
                ]
        },
    ]

    return (
        <>
        
        {aboutData.map((about, index) => (
            <div className="row" key={index} style={aboutStyles.imgSpace}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 heroContainer img-fluid" style={{backgroundImage: `url(${about.img})`}}>
                    <h1 className="heroHeading">{about.title}</h1>
                        <div className="heroBody">
                            <h4 className="heroText">{about.text[0]}</h4>
                            {about.text[1]?<h4 className="heroText" style={aboutStyles.paragraph}>{about.text[1]}</h4>:null}
                        </div>
                </div>
            </div>
        ))}

        </>

    )
}

export default About


