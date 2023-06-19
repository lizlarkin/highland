import React from 'react';

const ProductRelated = ({ related }) => {

    return (
        <div >
            <h3 className="prod-header">Related Products</h3>
            
            <div className="content-container">

                <div className="list-group">
                            {related?
                            related.map((relative, idx) => (
                            <a 
                                href = {`/Product/${relative.split(" ")[0]}`}
                                key={idx}  
                                type="button" className="list-group-item list-group-item-action">
                                {relative}
                            </a>
                            )):null
                            }    
                </div>
                
            </div>
                
        </div>
    )
}

export default ProductRelated
