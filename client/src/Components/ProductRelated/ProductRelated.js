import React from 'react';
import { useHistory } from "react-router-dom";

const ProductRelated = ({ related }) => {

    const history = useHistory();

    const goToPage = (e) => {
        let productSelected = e.target.id;
        history.push(`/Product/${productSelected}`)
    }


    return (
        <div >
            <h3 className="prod-header">Related Products</h3>
            
            <div className="content-container">

                <div className="list-group">
                            {related?
                            related.map((relative, idx) => (
                            <button 
                                onClick={goToPage}
                                key={idx} 
                                id={relative.split(" ")[0]}  
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

export default ProductRelated
