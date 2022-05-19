import React from 'react';
import potreroVideo from './assets/HighlandHome5.mp4';
import arrow from './assets/arrow.png';
import Bullet0 from './assets/Bullet0.png';
import Bullet1 from './assets/Bullet1.png';
import Bullet2 from './assets/Bullet2.png';
import Bullet3 from './assets/Bullet3.png';
import Bullet4 from './assets/Bullet4.png';
import Bullet5 from './assets/Bullet5.png';

const Home = () => {

    const capabilities = [
        "Standard and custom electronics",
        "Pulse and picosecond timing delay generation",
        "High-precision analog measurement and signal generation",
        "Data acquisition and control instrumentation",
        "Fiberoptics and photonics",
        "Laser driver and control solutions"
    ]

    const homeStyles = {
        video: {
            width: "102%",
            height: "102%",
            overflow: "hidden"
        },
        // capCard: {
        //     background: "linear-gradient(90deg, #7092be, #7d9bc4, #9bb2d2, #bfcee3, #dee6f1, #ebf0f7)",
        // },
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <video className='videoTag' autoPlay muted style={homeStyles.video}>
                        <source src={potreroVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {capabilities.map((capability, index) => (
                <div class="col" key={index}>
                    <div class="card h-100 text-dark bg-light mb-3">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body card-body align-items-center d-flex justify-content-center">
                            <h5 class="card-title text-center">{capability}</h5>
                        </div>
                    </div>
                </div>       
                ))}
            </div>
            {/* {capabilities.map((capability, index) => (
                <div className="row" style={homeStyles.capabilitiesCards}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card mb-3 border-0">
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img style={homeStyles.bulletPoint} src={Bullet0} className="img-fluid rounded-start align-items-center" alt="bullet point"/>
                                </div>
                                <div className="col-md-8 d-flex">
                                    <div className="card-body align-items-center d-flex">
                                        <h5 className="card-title">{capability}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            ))} */}
        </div>
    )
}

export default Home
