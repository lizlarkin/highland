import React, { useState } from 'react';
import './ProductNavigation.css';

const ProductNavigation = () => {

    const [content, setContent] = useState({
        showOverview: true,
        showSpecifications: false,
        showResources: false,
        showOptions: false,
        showQuote: false,
    })

    return (

        <div className = "col-md-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button className="nav-btn" onClick={() => setContent({showOverview: true})}>Overview</button>
                </li>
                <li className="nav-item">
                    <button className="nav-btn" onClick={() => setContent({showSpecifications: true})}>Specifications</button>
                </li>
                <li className="nav-item">
                    <button className="nav-btn" onClick={() => setContent({showResources: true})}>Resources</button>
                </li>
                <li className="nav-item">
                    <button className="nav-btn" onClick={() => setContent({showOptions: true})}>Options</button>
                </li>
                <li className="nav-item">
                    <button className="nav-btn" onClick={() => setContent({showQuote: true})}>Quote Request</button>
                </li>
            </ul>
        </div>
    )
}

export default ProductNavigation
