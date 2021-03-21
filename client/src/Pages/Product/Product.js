import React from 'react'
import ProductJumbotron from '../../Components/ProductJumbotron/ProductJumbotron'


const Product = () => {

    const productStyles={
        productContainer: {
            marginTop: "40px",
        }
    }
    return (
        <div style={productStyles.productContainer}>
            <ProductJumbotron />
        </div>
    )
}

export default Product
