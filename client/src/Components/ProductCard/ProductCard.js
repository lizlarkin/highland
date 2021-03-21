import React from 'react'
import {Link} from 'react-router-dom';

const ProductCard = () => {

    const productCardStyles = {
        width: "500px",
    }

    return (
        <div>
            <div className="card" style={productCardStyles}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">P500 4-channel benchtop digital delay and pulse generator</h5>
                <p className="card-text">Generates delays up to 1000 seconds in 1 picosecond increments, and is capable of a high repetition rate of 14 MHz.</p>
                <Link to="/Pages/Product/Product" className="btn btn-outline-primary">More Information</Link>
                
            </div>
            </div>
        </div>
    )
}

export default ProductCard
