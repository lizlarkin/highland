import React from 'react'
import {Link} from 'react-router-dom';

const ProductCard = ({ props }) => {

    const productCardStyles = {
        width: "500px",
    }

    return (
        <div>
            {props?props[0].category:null}
            {props?
            props.map((product, idx) => (
                <div className="card" key ={idx} style={productCardStyles}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.model} {product.name}</h5>
                    <p className="card-text">{product._id}</p>
                    <Link to="/Pages/Product/Product" className="btn btn-outline-primary">More Information</Link>
                    
                </div>
                </div>
            )):
            null}
        </div>
    )
}

export default ProductCard
