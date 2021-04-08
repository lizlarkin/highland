import React from 'react'

const QuoteDropdown = () => {
    const dropdownStyles = {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
    }

    return (
        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" style={dropdownStyles}>
            <option selected>Quantity</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
      </select>
    )
}

export default QuoteDropdown
