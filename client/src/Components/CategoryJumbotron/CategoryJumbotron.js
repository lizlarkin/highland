import React from 'react'

const CategoryJumbotron = ({title}) => {

    const jumbotronStyles = {
        container: {
            height: "300px",
            border: "1px solid lightgray",
            marginTop: "2%",
        },
        heading: {
        textAlign: "center",
        marginTop: "2%",
        },
    }

    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10" style={jumbotronStyles.container}>
            <h1 style={jumbotronStyles.heading}>{title}</h1>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default CategoryJumbotron
