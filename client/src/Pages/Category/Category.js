import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from './../../Components/ProductCard/ProductCard';
import CategoryJumbotron from "../../Components/CategoryJumbotron/CategoryJumbotron";

const Category = () => {

    const categorySelected = window.location.href.split("/")[7]

    const [categoryData, setCategoryData] = useState();

    const [title, setTitle] = useState();
    // const [intro, setIntro] = useState();

    const assignPageTitle = () => {
        if (categorySelected==="VME") setTitle("VME")
        if (categorySelected==="DDG") setTitle("Digital Delay and Pulse Generators")
        if (categorySelected==="WFG") setTitle("Waveform Generators")
        if (categorySelected==="LDC") setTitle("Laser Drivers & Controllers")
        if (categorySelected==="PHO") setTitle("Photonics")
        if (categorySelected==="MAS") setTitle("Measurement & Simulation")
        if (categorySelected==="OEM") setTitle("OEM/Embedded")
        if (categorySelected==="LEG") setTitle("Legacy")
    }
            
    useEffect(() => {
        const getCategoryData = async () => {
            try {
               const categoryData = await axios.get(`/products/category/${categorySelected}`);
               setCategoryData(categoryData.data);
               assignPageTitle();
            } catch (error) {
                console.log(error.response)
            }
        }
        getCategoryData();
    }, [categorySelected])

    return (
        <div>
            <CategoryJumbotron title={title}/>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <ProductCard props={categoryData}/>
                </div>
                <div className="col-md-1"></div>
                
            </div>
        </div>
    )
}

export default Category
