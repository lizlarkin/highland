import React, { useState } from 'react';
import "./ProductStyles.css"
import ProductJumbotron from '../../Components/ProductJumbotron/ProductJumbotron'
import ProductOverview from '../../Components/ProductOverview/ProductOverview';
import ProductSpecs from './../../Components/ProductSpecs/ProductSpecs';
import ProductResources from './../../Components/ProductResources/ProductResources';
import ProductOptions from './../../Components/ProductOptions/ProductOptions';
import ProductQuote from './../../Components/ProductQuote/ProductQuote';
import './../../Components/ProductNavigation/ProductNavigation';


const Product = () => {

    const [content, setContent] = useState({
        showOverview: true,
        showSpecifications: false,
        showResources: false,
        showOptions: false,
        showQuote: false,
    })

    return (
        <div className='product-container'>

            <div>
            <ProductJumbotron />
            </div>

            <div className="row product-content">
            <div className = "col-md-1"></div>
            <div className = "col-md-3">
            
                
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => setContent({showOverview: true})} 
                            style={{ color: content.showOverview ? "white" : "", 
                                     backgroundColor: content.showOverview ? "#3359A6" : ""}}
                            >Overview</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => setContent({showSpecifications: true})}
                            style={{ color: content.showSpecifications ? "white" : "", 
                            backgroundColor: content.showSpecifications ? "#3359A6" : ""}}
                            >Specifications</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => setContent({showResources: true})}
                            style={{ color: content.showResources ? "white" : "", 
                            backgroundColor: content.showResources ? "#3359A6" : ""}}
                            >Resources</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => setContent({showOptions: true})}
                            style={{ color: content.showOptions ? "white" : "", 
                            backgroundColor: content.showOptions ? "#0063a6" : ""}}
                            >Versions &amp; Accessories</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn-quote" 
                            onClick={() => setContent({showQuote: true})}
                            style={{ color: content.showQuote ? "white" : "", 
                            backgroundColor: content.showQuote ? "#b33939" : ""}}
                            >Request Quote</button>
                        </li>
                    </ul>
              
            </div>
          
            <div className = "col-md-7">
            <div>
                
                {content.showOverview && <ProductOverview/>}
                {content.showSpecifications && <ProductSpecs/>}
                {content.showResources && <ProductResources/>}
                {content.showOptions && <ProductOptions/>}
                {content.showQuote && <ProductQuote/>}

            </div>
            </div>
            <div className = "col-md-1"></div>
            </div>


        </div>
        
    )
}

export default Product
