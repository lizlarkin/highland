import React from 'react';

const ProductOverview = ({ features, description }) => {

    const overviewStyles = {
        marginTop: "10px"
    }

    return (
        <div>
            <h3 className="prod-header">Overview</h3>
            

            <div className="content-container">
        
                        <h5>Features: </h5>
                            <ul>
                                {features?
                                features.map((feature, idx) => (
                                <li key={idx} style={overviewStyles}>{feature}</li>
                                ))
                                :null}
                            </ul>
                        <h5>Description: </h5>
                            {description?
                            description.map((aboutParagraph, idx) => (
                            <p key={idx} style={overviewStyles}>{aboutParagraph}</p>
                            ))
                            :null}
            </div>
        </div>
     


    )
}

export default ProductOverview
