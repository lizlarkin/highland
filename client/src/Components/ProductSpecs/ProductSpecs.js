import React from 'react'

const ProductSpecs = ({ props }) => {

    return (
        <div >
            <h3 className="prod-header">Specifications</h3>
            
                <div className="content-container">

                <table class="table table-striped table-hover">
                    <tbody>
                        {props?
                        props.data[0].specifications.map((specification, idx) => (
                            <tr key={idx}>
                                <td>{specification[0]}</td>
                                <td>{specification[1].map((spec, idx) => (
                                    <div key={idx}>{spec}</div>
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
