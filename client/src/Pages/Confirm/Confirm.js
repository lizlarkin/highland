import React from 'react';

const Confirm = () => {

    const confirmStyles = {
        marginTop: "10%",
    }
    return (
        <div className="row" style={confirmStyles}>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                You were sent an email to confirm your account. Please follow the confirmation link. 
            </div>
            <div className="col-md-2"></div>
            
        </div>
    )
}

export default Confirm
