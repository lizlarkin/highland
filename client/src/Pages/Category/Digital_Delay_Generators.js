import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from './../../Components/ProductCard/ProductCard';
import CategoryJumbotron from "../../Components/CategoryJumbotron/CategoryJumbotron";

const Digital_Delay_Generators = () => {

    const [categoryData, setCategoryData] = useState();
    

    useEffect(() => {
        const getCategoryData = async () => {
            try {
               const data = await axios.get('/products/category/DDG');
               setCategoryData(data.data);
            } catch (error) {
                console.log(error.response)
            }
        }
        getCategoryData();
    }, [])

    console.log(categoryData?categoryData:null);

    return (
        <div>
            <CategoryJumbotron title={"Digital Delay and Pulse Generators"}/>
            <div>
                <ProductCard props={categoryData}/>
            </div>
        </div>
    )
}

export default Digital_Delay_Generators
