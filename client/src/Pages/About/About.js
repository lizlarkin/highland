import React from 'react'
import CategoryJumbotron from './../../Components/CategoryJumbotron/CategoryJumbotron';
import htifront from "./img/htifront.jpg";
import vmeCrate from "./img/vmeCrate.png";
import smtLine2 from "./img/smtLine2.jpg";
import holidayParty from "./img/holidayParty.JPG";

const About = () => {

    const aboutStyles = {

        backgroundStyles: {
            backgroundRepeat: 'no-repeat',
            // filter: "blur(1.5px)",
            height: "700px",
        },
        buildingBackground: {
            backgroundImage: `url(${htifront})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        },
        operationsBackground: {
            backgroundImage: `url(${smtLine2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        },
        productsBackground: {
            backgroundImage: `url(${vmeCrate})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        },
        businessBackground: {
            backgroundImage: `url(${holidayParty})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        },
        aboutText: {
            color: "white",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "25px",
            backgroundColor: "rgba(0,0,0, 0.55)",
            position: "relative",
            padding: "40px",
            textAlign: "center",
            width: "70%",
            marginTop: "-525px",
            height: "50%"
        },
        lineSpaceing: {
            marginTop: "30px",
        },
        blankRow: {
            height: "25px",
        }
    }

    return (
        <>
        {/* <CategoryJumbotron title={pageTitle}/> */}

        {/* <div className="row" style={aboutStyles.blankRow}></div>  */}

        <div className="row" style={aboutStyles.backgroundStyles}>
                <div className="col-md-12" style={aboutStyles.buildingBackground}></div>  
        </div> 

        <div className="row" >
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
                            corporation. 
                    </h4>
                </div>
                <div className="col-md-2"></div>
        </div> 

        <div className="row" style={aboutStyles.blankRow}></div> 

        <div className="row" style={aboutStyles.backgroundStyles}>
                <div className="col-md-12" style={aboutStyles.productsBackground}></div>  
        </div>

        <div className="row" >
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>Our Products</h1>
                    <h4 style={aboutStyles.lineSpaceing}>
                        Highland provides innovative high-precision analog measurement and signal generation, 
                        data acquisition and control instrumentation, pulse and picosecond timing delay generation, 
                        fiberoptic/photonics, and mixed technology products. 
                    </h4>
                    <h4 style={aboutStyles.lineSpaceing}>
                        Highland Technology's engineering expertise enables us to quickly adapt its products and technology 
                        into new designs of custom and embedded electronics. More than thirty percent of Highland's products
                        were specially and rapidly developed to meet customer needs. Comprehensive product documentation 
                        and a knowledgeable support staff allows us to readily assist customer inquiries.
                        We emphasize a thorough understanding of customer applications, direct engineering support, and 
                        long term availability of products.

                    </h4>
                </div>
                <div className="col-md-2"></div>
        </div> 

        <div className="row" style={aboutStyles.blankRow}></div> 

        <div className="row" style={aboutStyles.backgroundStyles}>
                <div className="col-md-12" style={aboutStyles.operationsBackground}></div>  
        </div>

        <div className="row" >
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>Our Operations</h1>
                    <h4 style={aboutStyles.lineSpaceing}>
                        Highland strives to deliver high quality, reliable products. All Highland products 
                        are manufactured and tested in-house or by qualified US domestic partners. Whenever possible, 
                        Highland sources American-made materials, components, and services to ensure high quality. Highland believes that high quality 
                        in the supply chain ultimately reduces indirect costs - savings which far exceed small 
                        marginal cost increases upfront.
                    </h4>
                </div>
                <div className="col-md-2"></div>
        </div> 

        <div className="row" style={aboutStyles.blankRow}></div> 

        <div className="row" style={aboutStyles.backgroundStyles}>
                <div className="col-md-12" style={aboutStyles.businessBackground}></div>  
        </div>

        <div className="row" >
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>Our Business</h1>
                    <h4 style={aboutStyles.lineSpaceing}>
                    Highland is committed to providing a safe, harmonious, and ethical workplace. In conjunction with
                    policies and procedures, management works to ensure ethical and responsible corporate social responsibility 
                    and compliance with all local, state, and federal laws and guidelines.

                    The company believes that its most important resource in achieving success is its employees and its customer
                    relationship. By working together to continue to build a solid base of intellectual property, to maintain and 
                    improve technical excellence, and to promote the highest quality in manufacturing, we can expand and maintain
                    an enjoyable, rewarding, conscientious, and reliable business.

                    
                    
                    
                    long-term availability of products and support through our long term 
                    lifecycle planning, component and spares management, and component end-of-life planning and stocking programs. 
                    Highland insures our products and full support throughout the life of your product or program.
                    
                    
                    </h4>
                </div>
                <div className="col-md-2"></div>
        </div>

        <div className="row" style={aboutStyles.blankRow}></div> 

        </>

    )
}

export default About


