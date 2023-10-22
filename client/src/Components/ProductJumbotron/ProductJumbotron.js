import React, { useEffect, useState } from 'react';
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const ProductJumbotron = ({ name, model, captions, category, EOLdates }) => {

    const [photoArrIndex, setPhotoArrindex] = useState();

    const jumbotronStyles = {
        title: {
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center", 
            color: "#0039a6",  
        },
        model: {
            marginTop: "15px",
            marginBottom: "15px",
        },
        photoDiv: {
            paddingBottom: "5%",
        },
        indicators: {
            backgroundColor: "#0039a6",
        },
        indicatorDiv: {
            bottom: "-50px",
        },
        captionDiv: {
            bottom: "-17px",
            height: "5%",
        },
        caption: {
            color: "#0039a6", 
            fontFamily: "STIXGeneral",
            fontSize: "80%",
        },
        arrowBtns: {
            height: "10%",
            top: "40%",
            width: "10%",
            color: "#0039a6",
        },
    }

    useEffect(() => {
        const setPhotoIndex = () => {
            setPhotoArrindex(ProductPhotos.findIndex(search => search[0].includes(model)))
        };
        setPhotoIndex()
    }, [model])

    return (
        <div className = 'container-fluid'>
            <div className = 'row'>

                <div className = 'col-md-5' style={jumbotronStyles.title}>
                    <h1 style={jumbotronStyles.model}>Model {model?model:null}</h1>
                    <h1>{name?name:null}</h1>
                    {category?category[0]==="LEG"?
                        <div className="alert alert-danger" role="alert">
                            <h6><i className="fas fa-exclamation-triangle"></i> End of life procedures have been initiated for this product.</h6>
                            <div>Last Time Buy: {EOLdates?EOLdates[0]:null}</div>
                            <div>End of Support: {EOLdates?EOLdates[1]:null}</div>
                            {EOLdates?
                            EOLdates[2]>0?
                            <div>Remaining Stock: {EOLdates[2]}</div>
                            :null
                            :null}  
                            {EOLdates?
                            EOLdates[3]? 
                            EOLdates[3].map((sub) => (
                                <div>
                                    <a href = {`/Product/${sub.split(" ")[0]}`}  className="alert-link">
                                        Replacement: {sub}
                                    </a>
                                </div>
                            ))
                            :"No replacements planned. Contact factory to discuss options."
                            :null} 
                    </div>
                    :null:null}

                </div>

                <div className = 'col-md-7'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        {/* Carousel Slide Buttons */}
                        <div className="carousel-indicators" style={jumbotronStyles.indicatorDiv}>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={jumbotronStyles.indicators}></button>
                            {ProductPhotos[photoArrIndex]?
                                ProductPhotos[photoArrIndex].slice(1).map((photo, idx) => (
                                    <button key={idx} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={idx+1} aria-label={"Slide " + idx+1} style={jumbotronStyles.indicators}></button>
                                ))
                            :null}
                        </div>

                        {/* Default Product Image */}
                        <div className="carousel-inner" style={jumbotronStyles.photoDiv}>
                            {ProductPhotos[photoArrIndex]?
                                <div className="carousel-item active">
                                    <img src={ProductPhotos[photoArrIndex][0]} className="d-block w-100" alt={captions?captions[0]:null}/>
                                    <div className="carousel-caption d-none d-md-block" style={jumbotronStyles.captionDiv}>
                                        <p style={jumbotronStyles.caption}>{captions?captions[0]:null}</p>
                                    </div>
                                </div>
                            :null}

                        {/* Additional Product Images */}
                            {ProductPhotos[photoArrIndex]?
                            ProductPhotos[photoArrIndex].slice(1).map((photo, idx) => (
                            <div className="carousel-item" key={idx}>
                                <img src={photo} className="d-block w-100" alt={captions?captions[idx+1]:null}/>
                                <div className="carousel-caption d-none d-md-block" style={jumbotronStyles.captionDiv}>
                                    <p style={jumbotronStyles.caption}>{captions?captions[idx+1]:null}</p>
                                </div>
                            </div>
                            ))
                            :null}
                        </div>

                        {/* Next and Previous Arrow Buttons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev" style={jumbotronStyles.arrowBtns}>
                            <span><i className="fas fa-chevron-left" aria-hidden="true"></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={jumbotronStyles.arrowBtns}>
                            <span><i className="fas fa-chevron-right" aria-hidden="true"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
            
    )
}

export default ProductJumbotron
