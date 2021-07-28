import React from 'react'
import CategoryJumbotron from './../../Components/CategoryJumbotron/CategoryJumbotron';
import htifront2 from "./img/htifront2.png";
import smtLinePlaceholder from "./img/smtLinePlaceholder.jpg";

const About = () => {

    const aboutStyles = {

        backgroundStyles: {
            backgroundImage: `url(${htifront2})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: "blur(2px)",
            height: "700px",
        },
        operationsStyles: {
            backgroundImage: `url(${smtLinePlaceholder})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: "blur(2px)",
            height: "700px",
        },
        aboutText: {
            color: "white",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "25px",
            backgroundColor: "rgba(0,0,0, 0.4)",
            position: "relative",
            padding: "40px",
            textAlign: "center",
            width: "70%",
            marginTop: "-500px",
            height: "50%"
        },
        opsText: {
            color: "white",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "25px",
            backgroundColor: "rgba(0,0,0, 0.4)",
            position: "relative",
            padding: "40px",
            textAlign: "center",
            width: "70%",
            marginTop: "-100px",
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

        <div className="row" style={aboutStyles.backgroundStyles}>
                <div className="col-md-12"></div>  
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
                            corporation. All products are manufactured in-house or by qualified US domestic 
                            partners.
                    </h4>
                </div>
                <div className="col-md-2"></div>
        </div> 

        <div className="row" style={aboutStyles.blankRow}></div> 

        <div className="row" style={aboutStyles.operationsStyles}>
                <div className="col-md-12"></div>  
        </div>


        <div className="row" >
                <div className="col-md-2"></div>
                <div className="col-md-8" style={aboutStyles.aboutText}>
                    <h1>Our Operations</h1>
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
        </div> 

        <div className="row">
            <div className="col-md-12">
                <h1>Our Products</h1>
                <div className="row">
                    <div className="col-md-6">Words</div>
                    <div className="col-md-6">Picture</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">Our Operations</div>
        </div>
        <div className="row">
            <div className="col-md-12">Our Business</div>
        </div>

        </>

    )
}

export default About


