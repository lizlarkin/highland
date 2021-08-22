import React from 'react'

const ProductSpecs = ({ specs }) => {

    const specStyles = {
        specSpan: {
            marginLeft: "25px",
        }
    }

    return (
        <div >
            <h3 className="prod-header">Specifications</h3>
            
                <div className="content-container">

                <table className="table table-striped table-hover">
                    <tbody>
                        {specs?
                        specs.map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((specLine, idx) => (
                                    <div key={idx}>
                                        {typeof(specLine) === "string" ? 
                                        <td>{specLine}</td> : 
                                        specLine.map((specSpan, idx) => (
                                            <div key={idx} style={specStyles.specSpan}>{specSpan}</div>
                                         ))}
                                    </div>
                                ))}</td>
                            </tr>
                        ))
                        :null}
                    </tbody>
                </table>

                </div>
        </div>
    )
}

export default ProductSpecs
