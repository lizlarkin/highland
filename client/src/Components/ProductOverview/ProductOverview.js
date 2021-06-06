import React from 'react';
import { useHistory } from "react-router-dom";

const ProductOverview = ({ props }) => {

    const history = useHistory();

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
                            <div className="list-group">
                            {props?
                            props.data[0].related.map((relative, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => history.replace((`${relative.split(" ")[0]}`))}  
                                type="button" className="list-group-item list-group-item-action">
                                {relative}
                            </button>
                            )):null
                            }    
                        </div>
                    </div>
        
        </div>


    )
}

export default ProductOverview
