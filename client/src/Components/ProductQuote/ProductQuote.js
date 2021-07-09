import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";


const ProductQuote = ({ name, model, requiredOptions, optionalOptions, accessories }) => {

    const quoteStyles = {
        qtyInput: {
            width: "20%",
        },
        title: {
            marginTop: "20px",
        },
        titleBtn: {
            width: "20%",
        },
        header: {
            margin: "20px 0px 20px 0px",
            // textDecoration: "underline",
            borderBottom: "1px solid lightgrey",
        },
        accessoryDesc: {
            width: "80%",
        },
        configContainer: {
            border: "1px solid lightgrey",
            borderRadius: "1.5%",
            padding: "1%",
            marginTop: "5%",
        },
        cartBtn: {
            width: "100%",
            fontWeight: "bold",
        }
    }

    const { userData } = useContext(UserContext);
    const history = useHistory();
    const [quantity, setQuantity] = useState({quantity: 0});
    const [cart, setCart] = useState({
        model: "",
        quantity: "",
        required: [],
    });

    const selectQuantity = (e) => {
        setCart({...cart, quantity: e.target.value});
        console.log(cart);
    }

    const addToCart = (e) => {
        setCart({...cart, model: e.target.name, quantity: quantity});
        console.log(cart);
    };

    const handleRequired = (e) => {
        setCart({...cart, [e.target.value]: e.target.value})
    }
 

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
    }, [userData.user, history])


    return (
        <div>

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">

                <div className="row" style={quoteStyles.title}>

                    <div className="col-md-1"></div>

                    <div className="col-md-8">
                    {model && name?
                            <h5>{model} {name}</h5>
                        :null}
                    </div>

                    <div className="col-md-2" style={quoteStyles.titleBtn}>
                            <input onChange={selectQuantity} type="number" min="0" className="form-control" placeholder="Quantity"/>
                    </div>

                    <div className="col-md-1"></div>
                </div>
                
                <div className="row">

                    <div className="col-md-1"></div>

                    <div className="col-md-10">
                                                       
                        <div style={quoteStyles.configContainer}>
                            {requiredOptions.length>0?
                                requiredOptions.map((required, idx) => (
                                    <>
                                    <h6 key={idx} style={quoteStyles.header}>Select {required[0]} (required):</h6>
                                    <form>
                                    <div>{required[1].map((option, idx) => (
                                        <div className="form-check" key={idx}>
                                            <input onClick={handleRequired} className="form-check-input" type="radio" value={option[1]} dash={option[0]} name="requiredRadios"/>
                                            <label className="form-check-label">
                                            {option[1]}
                                            </label>
                                        </div>
                                    ))}      
                                    </div> 
                                    </form>   
                                    </>                                    
                                ))
                                :null}

                                {optionalOptions.length>0?
                                optionalOptions.map((option, idx) => (
                                    <>
                                    <h6 key={idx} style={quoteStyles.header}>Select {option[0]} (optional):</h6>
                                    <form>
                                    <div>{option[1].map((option, idx) => (
                                        <div className="form-check" key={idx}>
                                            <input className="form-check-input" type="checkbox" value={option[0]}/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                {option[1]}
                                            </label>
                                        </div>
                                    ))}      
                                    </div> 
                                    </form>   
                                    </>                                    
                                ))
                                :null}  

                                {accessories.length>0?
                                <>
                                <h6 style={quoteStyles.header}>Select Accessories (click to view image): </h6>
                                </>
                                :null}

                               {accessories.length>0?
                                accessories.map((accessory, idx) => (
                                    <form>
                                        <div class="input-group mb-3" key={idx}>
                                            <span class="input-group-text" style={quoteStyles.accessoryDesc} name={accessory[0]}>{accessory[1]} {accessory[2]}</span>
                                            <input type="number" min="0" class="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                        </div>
                                    </form>
                                ))
                                :null}
                        </div>
                        
                    </div>

                    <div className="col-md-1"></div>
                </div>

                <div className = "row" style={quoteStyles.title}>
                    <div className="col-md-9"></div>
                    <div className="col-md-2" style={quoteStyles.titleBtn}>
                        <button onClick={addToCart} type="button" class="btn btn-danger" style={quoteStyles.cartBtn}>Add to Cart</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
            
        </div>

    )
}

export default ProductQuote
