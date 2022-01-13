import React from 'react'

const ProductSpecs = ({ specs, specsTwo, specsFour, specsNotes }) => {

    const specStyles = {
        specSpan: {
            marginLeft: "25px",
        },
        specNotes: {
            fontSize: "smaller",
        }
    }

    console.log(specsFour.length>0?specsFour:"nope")

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

                {specsTwo.length>0?
                <>
                <h5>{specsTwo[0]}</h5>
                <table className="table table-striped table-hover">
                    <tbody>
                        {specsTwo?
                        specsTwo.slice(1).map((specification, idx) => (
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
                </>
                :null}

                {specsFour.length>0?
                <>
                <h5>{specsFour[0]}</h5>
                <table className="table table-striped table-hover">
                    {specsFour?
                    specsFour[1].map((specTitle, idx) => (
                        <th key={idx}>{specTitle}</th>
                    )):null}
                    <tbody>
                        {specsFour?
                        specsFour.slice(2).map((specification, idx) => (
                            <tr key={idx}>
                                {specification.map((specRow, idx) => (
                                    <td key={idx} className="col-md-3">
                                        {typeof(specRow) === "string" ? 
                                        specRow
                                        :
                                        specRow.map((specLine, idx) => (
                                            <div key={idx}>{specLine}</div>
                                        ))}
                                    </td>
                                ))}
                            </tr>
                        ))
                        :null}
                    </tbody>
                </table>
                </>
                :null}

                {specsNotes.length>0?
                specsNotes.map((note, idx) => (
                    <div key={idx} style={specStyles.specNotes}>{note}</div>
                )):
                null}

                </div>
        </div>
    )
}

export default ProductSpecs
