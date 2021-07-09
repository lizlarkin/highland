import React from 'react'
import CategoryJumbotron from './../../Components/CategoryJumbotron/CategoryJumbotron';
import htifront from "./img/htifront.png";
import htismt from "./img/htismt.jpg";

const About = () => {

    const pageTitle = "About Highland Technology";

    const aboutStyles = {
        backgroundStyles: {
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: "blur(2px)",
            // width: "100%",
            height: "700px",
            backgroundImage: `url(${htifront})`,
            marginTop: "10px",
        },
        buildingImg: {
            backgroundImage: `url(${htifront})`,
        },
        manufacturingImg: {
            backgroundImage: `url(${htismt})`,
        },
        aboutText: {
            color: "white",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "25px",
            backgroundColor: "rgba(0,0,0, 0.4)",
            // position: "relative",
            // top: "-350px",
            // left: "-5%",
            // transform: "translate(-5%, -15%)",
            // zIndex: "2",
            padding: "20px",
            textAlign: "center",
            width: "70%",
        },
        lineSpaceing: {
            marginTop: "30px",
        }

    }

    return (
        <>
        {/* <CategoryJumbotron title={pageTitle}/> */}

        <div className="row">
            <div className="row" >
                <div className="col-md-12" style={aboutStyles.backgroundStyles}></div>
            </div>
            {/* <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>About Highland Technology</h1>
                    <h4 style={aboutStyles.lineSpaceing}>
                            Founded in 1984, Highland Technology designs, manufactures, and supports 
                            standard and custom electronics for demanding aerospace and defense, 
                            scientific, and industrial applications.
                    </h4>
                    <h4 style={aboutStyles.lineSpaceing}>
                            Headquartered in San Francisco, California, Highland occupies a 21,000 
                            square-foot facility housing engineering, manufacturing, sales, marketing, 
                            and corporate staff. Highland is an owner operated, privately held California 
                            corporation. All products are manufactured in-house or by qualified US domestic 
                            partners.
                    </h4>
                </div>
                <div className="col-md-2"></div>
            </div>    */}
        </div> 

        <div className="row">
            <div className="row">
                <div className="col-md-12" style={aboutStyles.backgroundStyles}></div>
            </div>
            {/* <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>Operations</h1>
                    <h4 style={aboutStyles.lineSpaceing}>
                    Highland Technology manufactures 98% of its products. Whenever possible, Highland sources 
                    American-made materials, components, and services to ensure high quality. Highland believes 
                    that high quality in the supply chain ultimately reduces indirect costs, savings which far 
                    exceed small marginal cost increases upfront.
                    </h4>
                    <h4 style={aboutStyles.lineSpaceing}>
                    Highland procures materials from American Original Component Manufacturers, Original Equipment
                    Manufacturers, and Authorized Distributors, and requests compliance documentation from its top 
                    tier suppliers to ensure ethical and responsible corporate social responsibility and compliance 
                    with all local, state, and federal laws.
                    </h4>
                    <h4 style={aboutStyles.lineSpaceing}>
                    Highland has a Supplier Selection and Management Policy and Procedure, Counterfeit Part Avoidance
                    Procedure, and Material Control Receiving Procedure that detail management and inspection
                    processes to ensure that unauthorized, reclaimed, or counterfeit parts are not used.
                    </h4>
                    <h4 style={aboutStyles.lineSpaceing}>
                    When parts are no longer in production, Highland purchases obsolete or EOL parts only from traceable
                    suppliers. Highland’s End Of Life Policy &amp; Procedure outlines strategic sourcing and careful tracking of
                    critical components in order to avoid product discontinuation and preserve high ethical and quality
                    standards.
                    </h4>
                </div>
                <div className="col-md-2"></div>
            </div>    */}
        </div> 
        </>

    )
}

export default About


