import React from 'react';
import P545 from '../../Pages/Product/Images/P545.png';
import P540 from '../../Pages/Product/Images/P540.png';
import V120 from '../../Pages/Product/Images/V120.png';

const ProductJumbotron = () => {

    const jumbotronStyles = {
        title: {
            marginTop: "auto",
            marginBottom: "auto",
        },
        color: {
            color: "#0039a6",
        },
        indicators: {
            backgroundColor: "#0039a6",
        }


    }
    return (
        <div className = 'container'>
            <div className = 'row'>

                <div className = 'col-md-6' style={jumbotronStyles.title}>
                    <h1 style={jumbotronStyles.color}>P500</h1>
                    <h1 style={jumbotronStyles.color}>4-channel benchtop digital delay and pulse generator</h1>
                </div>

                <div className = 'col-md-6'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={jumbotronStyles.indicators}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={jumbotronStyles.indicators}></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={jumbotronStyles.indicators}></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={P545} className="d-block w-100" alt="..."/>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5 style={jumbotronStyles.color}>First slide label</h5>
                                <p style={jumbotronStyles.color}>Some representative placeholder content for the first slide.</p>
                            </div> */}
                            </div>
                            <div className="carousel-item">
                            <img src={P540} className="d-block w-100" alt="..."/>
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
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                            <span><i class="fas fa-chevron-left" aria-hidden="true" style={jumbotronStyles.color}></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                            <span><i class="fas fa-chevron-right" aria-hidden="true" style={jumbotronStyles.color}></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProductJumbotron
