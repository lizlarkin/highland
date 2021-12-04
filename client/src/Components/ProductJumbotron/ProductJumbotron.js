import React, { useEffect, useState } from 'react';
import p500Rear from '../../Pages/Product/Images/p500Rear.png';
import V120 from '../../Pages/Product/Images/V120.png';
import T564 from '../../Pages/Product/Images/T564_Digital_Delay_Generator.png';
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const ProductJumbotron = ({ name, model }) => {

    const [photoArrIndex, setPhotoArrindex] = useState();

    const jumbotronStyles = {
        title: {
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center",   
        },
        color: {
            color: "#0039a6",
            marginTop: "15px",
        },
        indicators: {
            backgroundColor: "#0039a6",
            bottom: "-50px"
        },
        indicatorDiv: {
            bottom: "-50px"
        }
    }

    useEffect(() => {

        const setPhotoIndex = () => {
            setPhotoArrindex(ProductPhotos.findIndex(search => search[0].includes(model)))
        };

        setPhotoIndex()

    }, [model, ProductPhotos])

    return (
        <div className = 'container'>
            <div className = 'row'>

                <div className = 'col-md-5' style={jumbotronStyles.title}>
                    <h1 style={jumbotronStyles.color}>Model {model?model:null}</h1>
                    <h1 style={jumbotronStyles.color}>{name?name:null}</h1>
                </div>

                <div className = 'col-md-7'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div className="carousel-indicators" style={jumbotronStyles.indicatorDiv}>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={jumbotronStyles.indicators}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={jumbotronStyles.indicators}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={jumbotronStyles.indicators}></button>
                        </div>

                        <div className="carousel-inner">
                            {ProductPhotos[photoArrIndex]?
                                <div className="carousel-item active">
                                    <img src={ProductPhotos[photoArrIndex][0]} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={jumbotronStyles.color}>First slide label</h5>
                                        <p style={jumbotronStyles.color}>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            :null}

                            <div className="carousel-item">
                            <img src={p500Rear} className="d-block w-100" alt="..."/>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5 style={jumbotronStyles.color}>Second slide label</h5>
                                <p style={jumbotronStyles.color}>Some representative placeholder content for the second slide.</p>
                            </div> */}
                            </div>
                            <div className="carousel-item">
                            <img src={V120} className="d-block w-100" alt="..."/>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5 style={jumbotronStyles.color}>Third slide label</h5>
                                <p style={jumbotronStyles.color}>Some representative placeholder content for the third slide.</p>
                            </div> */}
                            </div>
                            <div className="carousel-item">
                            <img src={T564} className="d-block w-100" alt="..."/>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5 style={jumbotronStyles.color}>Third slide label</h5>
                                <p style={jumbotronStyles.color}>Some representative placeholder content for the third slide.</p>
                            </div> */}
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                            <span><i className="fas fa-chevron-left" aria-hidden="true" style={jumbotronStyles.color}></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                            <span><i className="fas fa-chevron-right" aria-hidden="true" style={jumbotronStyles.color}></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProductJumbotron
