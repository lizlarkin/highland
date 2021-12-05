import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductStyles.css"
import ProductJumbotron from '../../Components/ProductJumbotron/ProductJumbotron'
import ProductOverview from '../../Components/ProductOverview/ProductOverview';
import ProductSpecs from './../../Components/ProductSpecs/ProductSpecs';
import ProductResources from './../../Components/ProductResources/ProductResources';
import ProductQuote from './../../Components/ProductQuote/ProductQuote';
import './../../Components/ProductNavigation/ProductNavigation';
import ProductRelated from '../../Components/ProductRelated/ProductRelated';
import ProductFAQ from '../../Components/ProductFAQ/ProductFAQ';
import SalesContact from '../../Components/ProductContact/SalesContact';
import TechnicalContact from './../../Components/ProductContact/TechnicalContact';


const Product = () => {

    const pathname = window.location.href.split("/");
    const model = pathname[4];

    const [content, setContent] = useState({
        showOverview: true,
        showSpecifications: false,
        showResources: false,
        showFAQ: false,
        showRelated: false,
        showQuote: false,
    })

    const [contact, setContact] = useState({
            showSales: false,
            showSupport: false,
    });

    const [productName, setProductName] = useState();
    const [productModel, setProductModel] = useState();
    const [productRequired, setProductRequired] = useState();
    const [productOptions, setProductOptions] = useState()
    const [productAccessories, setProductAccessories] = useState();
    const [productFeatures, setProductFeatures] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productSpecs, setProductSpecs] = useState();
    const [productRelatives, setProductRelatives] = useState();
    const [productFAQs, setProductFAQs] = useState();
    const [productImgCaptions, setProductImgCaptions] = useState();

    useEffect(() => {
        const getProductData = async () => {
            try {
               const prodData = await axios.get(`/products/${model}`);
               setProductName(prodData.data[0].name);
               setProductModel(prodData.data[0].model);
               setProductRequired(prodData.data[0].optionsRequired);
               setProductOptions(prodData.data[0].optionsOptional);
               setProductAccessories(prodData.data[0].accessories);
               setProductFeatures(prodData.data[0].features);
               setProductDescription(prodData.data[0].about);
               setProductSpecs(prodData.data[0].specifications);
               setProductRelatives(prodData.data[0].related);
               setProductFAQs(prodData.data[0].FAQs);
               setProductImgCaptions(prodData.data[0].imgCaptions);
            } catch (error) {
                console.log(error.response)
            }
        }
        getProductData();
        window.scrollTo(0, 0)
    }, [model])

    return (
        <div className='product-container'>

            <div>
            <ProductJumbotron name={productName} model={productModel} captions={productImgCaptions}/>
            </div>

        <div className="row product-content">
            <div className = "col-md-1"></div>

            <div className = "col-md-3">
            
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button className="nav-btn-quote" 
                            onClick={() => {
                                setContent({showQuote: true})
                                setContact({showSales: true})
                            }}
                            style={{ color: content.showQuote ? "white" : "", 
                            backgroundColor: content.showQuote ? "#b33939" : ""}}
                            >Request Quote</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => {
                                setContent({showOverview: true})
                                setContact({})
                            }}
                            style={{ color: content.showOverview ? "white" : "", 
                                     backgroundColor: content.showOverview ? "#3359A6" : ""}}
                            >Overview</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => {
                                setContent({showSpecifications: true})
                                setContact({})
                            }}
                            style={{ color: content.showSpecifications ? "white" : "", 
                            backgroundColor: content.showSpecifications ? "#3359A6" : ""}}
                            >Specifications</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => {
                                setContent({showResources: true})
                                setContact({})
                            }}
                            style={{ color: content.showResources ? "white" : "", 
                            backgroundColor: content.showResources ? "#3359A6" : ""}}
                            >Resources</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => {
                                setContent({showFAQ: true})
                                setContact({showSupport: true})
                            }}
                            style={{ color: content.showFAQ ? "white" : "", 
                            backgroundColor: content.showFAQ ? "#3359A6" : ""}}
                            >Technical FAQs</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-btn" 
                            onClick={() => {
                                setContent({showRelated: true})
                                setContact({})
                            }}
                            style={{ color: content.showRelated ? "white" : "", 
                            backgroundColor: content.showRelated ? "#3359A6" : ""}}
                            >Related Products</button>
                        </li>
                    </ul>
              
                    {contact.showSales && <SalesContact />}
                    {contact.showSupport && <TechnicalContact/>}

            </div>
          
            <div className = "col-md-7">
                <div>
                    {content.showOverview && <ProductOverview features={productFeatures} description={productDescription}/>}
                    {content.showSpecifications && <ProductSpecs specs={productSpecs}/>}
                    {content.showResources && <ProductResources model={productModel}/>}
                    {content.showFAQ && <ProductFAQ FAQs={productFAQs}/>}
                    {content.showRelated && <ProductRelated related={productRelatives}/>}
                    {content.showQuote && <ProductQuote name={productName} model={productModel} requiredOptions={productRequired} optionalOptions={productOptions} accessories={productAccessories}/>}  
                </div>
            </div>
            
            <div className = "col-md-1"></div>
            
        </div>


        </div>
        
    )
}

export default Product
