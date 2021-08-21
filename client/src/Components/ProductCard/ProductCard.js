import React from 'react'
import { useHistory } from "react-router-dom";

const ProductCard = ({ props }) => {

    const history = useHistory();

    const productCardStyles = {
        margin: "20px 20px 0px 20px",
    }

    return (
        <div className="row">
            {props?
            props.map((product, idx) => (
                <div className="col-md-4 d-flex align-items-stretch" key ={idx}>
                    <div className="card " style={productCardStyles}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.model} {product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <button onClick={() => history.push(`/Pages/Product/Product/${product.model}`)} 
                                    className="btn btn-outline-primary">
                                    More {product.model} Information
                            </button>
                        </div>
                    </div>
                </div>
            )):
            null}
        </div>
    )
}

export default ProductCard
