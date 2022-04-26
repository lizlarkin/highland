import React from 'react'
import "./ProductContact.css"

const SalesContact = () => {
    return (
        <div className="card contact-aside">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Contact Sales</h6>
                <p className="card-text">
                    <i className="fas fa-phone-alt"></i> <br/>
                    415-551-1700
                </p>
                <i className="fas fa-envelope"></i> <br/>
                <a href="mailto: sales@highlandtechnology.com" className="card-link">Email Sales</a>
            </div>
        </div>
    )
}

export default SalesContact
