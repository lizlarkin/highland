import React from 'react'

const ProductSpecs = ({ specs, specsTwo, specsTwoB, specsTwoC, specsTwoD, specsTwoE, specsMulti, specsMultiB, specsNotes }) => {

    const specStyles = {
        specSpan: {
            marginLeft: "25px",
        },
        specNotes: {
            fontSize: "smaller",
        }
    }

    return (
        <div>
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
                                        <div>{specLine}</div> : 
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

                {specsTwo?
                    specsTwo.length>0?
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
                                        <div>{specLine}</div> : 
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
                :null:null}

                {specsTwoB?
                    specsTwoB.length>0?
                <>
                <h5>{specsTwoB[0]}</h5>
                <table className="table table-striped table-hover">
                    <tbody>
                        {specsTwoB?
                        specsTwoB.slice(1).map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((specLine, idx) => (
                                    <div key={idx}>
                                        {typeof(specLine) === "string" ? 
                                        <div>{specLine}</div> : 
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
                :null:null}

                {specsTwoC?
                    specsTwoC.length>0?
                <>
                <h5>{specsTwoC[0]}</h5>
                <table className="table table-striped table-hover">
                    <tbody>
                        {specsTwoC?
                        specsTwoC.slice(1).map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((specLine, idx) => (
                                    <div key={idx}>
                                        {typeof(specLine) === "string" ? 
                                        <div>{specLine}</div> : 
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
                :null:null}

            {specsTwoD?
                    specsTwoD.length>0?
                <>
                <h5>{specsTwoD[0]}</h5>
                <table className="table table-striped table-hover">
                    <tbody>
                        {specsTwoD?
                        specsTwoD.slice(1).map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((specLine, idx) => (
                                    <div key={idx}>
                                        {typeof(specLine) === "string" ? 
                                        <div>{specLine}</div> : 
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
                :null:null} 

            {specsTwoE?
                    specsTwoE.length>0?
                <>
                <h5>{specsTwoE[0]}</h5>
                <table className="table table-striped table-hover">
                    <tbody>
                        {specsTwoE?
                        specsTwoE.slice(1).map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((specLine, idx) => (
                                    <div key={idx}>
                                        {typeof(specLine) === "string" ? 
                                        <div>{specLine}</div> : 
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
                :null:null}    

                {specsMulti?
                    specsMulti.length>0?
                <>
                <h5>{specsMulti[0]}</h5>
                <table className="table table-striped table-hover">
                    <tr>
                        {specsMulti?
                        specsMulti[1].map((specTitle, idx) => (
                            <th key={idx}>{specTitle}</th>
                        )):null}
                    </tr>
                    <tbody>
                        {specsMulti?
                        specsMulti.slice(2).map((specification, idx) => (
                            <tr key={idx}>
                                {specification.map((specRow, idx) => (
                                    <td key={idx} className={specsMulti.length>0?specsMulti[1].length===3?"col-md-4":specsMulti[1].length===4?"col-md-3":specsMulti[1].length===5?"col-md-2":"col-md-1":null}>
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
                :null:null}

            {specsMultiB?
                specsMultiB.length>0?
                <>
                <h5>{specsMultiB[0]}</h5>
                <table className="table table-striped table-hover">
                    <tr>
                        {specsMultiB?
                        specsMultiB[1].map((specTitle, idx) => (
                            <th key={idx}>{specTitle}</th>
                        )):null}
                    </tr>
                    <tbody>
                        {specsMultiB?
                        specsMultiB.slice(2).map((specification, idx) => (
                            <tr key={idx}>
                                {specification.map((specRow, idx) => (
                                    <td key={idx} className={specsMultiB.length>0?specsMultiB[1].length===3?"col-md-4":specsMultiB[1].length===4?"col-md-3":specsMultiB[1].length===5?"col-md-2":"col-md-1":null}>
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
                :null:null}


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
