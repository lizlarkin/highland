import React from 'react';
import {Link} from 'react-router-dom';

const ProductFAQ = ({ FAQs }) => {

    const FAQstyles = {
        answerDiv: {
            backgroundColor: "#f7f7f7",
        }
    }
       
    return (
        <div >
            <h3 className="prod-header">Frequently Asked Technical Questions</h3>
            
                <div className="content-container">
                {FAQs?
                FAQs.map((data, idx) => (
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button key={idx} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="true">
                                {data[0]}
                            </button>
                        </h2>
                        <div key={idx} id={`collapse${idx}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={`#collapse${idx}`}>
                            <div className="accordion-body" style={FAQstyles.answerDiv}>
                                {data[1]}
                            </div>
                        </div>
                    </div>
                )):
                <div>No technical FAQs are on record for this product yet. To submit a technical question, please <Link to="/Contact">contact our team</Link>.</div>}
                </div>
                
        </div>
    )
}

export default ProductFAQ
