import React from 'react'

const ProductOverview = ({ props }) => {

    console.log("Props from Overview: ", props)

    const overviewStyles = {
        marginTop: "10px"
    }

    return (
        <div >
            <h3 className="prod-header">Overview</h3>
            

                    <div className="content-container">
                        <h5>Features: </h5>
                            <ul>
                                {props?
                                props.data[0].features.map((feature, idx) => (
                                <li key={idx} style={overviewStyles}>{feature}</li>
                                ))
                                :null}
                            </ul>
                        <h5>Description: </h5>
                            {props?
                            props.data[0].about.map((aboutParagraph, idx) => (
                            <p key={idx} style={overviewStyles}>{aboutParagraph}</p>
                            ))
                            :null}
                        <h5>Related: </h5>
                        <ul>
                          <li>P400</li>
                          <li>J720</li>
                        </ul>
                    </div>
        
        </div>


    )
}

export default ProductOverview
