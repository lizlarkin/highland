import React from 'react'
import { useHistory } from "react-router-dom";

// Image imports
import VME4 from "./Images/VME4.png";

const ProductCard = ({ props }) => {

    const history = useHistory();

    const productCardStyles = {
        margin: "20px 20px 0px 20px",
        width: "100%",
        title: {
            marginTop: "5%",
        },
        productBtn: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%"
        },
    }

    return (
        <div className="row">
            {props?
            props.map((product, idx) => (
                <div className="col-md-4 d-flex align-items-stretch text-center" key ={idx}>
                    <div className="card " style={productCardStyles}>
                    <h5 className="card-title" style={productCardStyles.title}>{product.model} {product.name}</h5>
                        <img src={VME4} className="card-img-top" alt={product.description}/>
                        <div className="card-body d-flex flex-column">
                            <p className="card-text">{product.description}</p>
                            <button onClick={() => history.push(`/Product/${product.model}`)} 
                                    className="btn btn-outline-primary mt-auto"
                                    style={productCardStyles.productBtn}>
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
