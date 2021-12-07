import React from 'react'
import { useHistory } from "react-router-dom";

// Image imports
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const ProductCard = ({categoryData}) => {

    console.log("here", ProductPhotos)

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
            width: "75%"
        },
    }

    return (
        <div className="row">
            {categoryData?
            categoryData.map((product, idx) => (
                <div className="col-md-4 d-flex align-items-stretch text-center" key ={idx}>
                    <div className="card " style={productCardStyles}>
                    <h5 className="card-title" style={productCardStyles.title}>{product.model} {product.name}</h5>
                        <img src={ProductPhotos[ProductPhotos.findIndex(search => search[0].includes(product.model))][0]} className="card-img-top" alt={product.imgCaptions[0]}/>
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
