import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
import axios from "axios";


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
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [selectedRequired, setSelectedRequired] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const cart = {
        model: model,
        name: name,
        quantity: selectedQuantity,
        required: selectedRequired,
        optional: selectedOptions,
        accessories: selectedAccessories,
    }

    const selectQuantity = (e) => {
        setSelectedQuantity(e.target.value);
    }

    const handleRequiredOptions = (e) => {
        setSelectedRequired({...selectedRequired, [e.target.title]: [e.target.value, e.target.id]})
    }

    const [options, setOptions] = useState();

    let initialOptions=[];

    const initializeOptions = () => {
        for (let i = 0; i < optionalOptions[0][1].length; i++) {
            let childArr = optionalOptions[0][1]
            initialOptions.push([childArr[i][2], childArr[i][1]])    
        }
        setOptions(initialOptions)  
        setSelectedOptions(initialOptions)
    }

    const handleOptionalOptions = (e) => {
        if (e.target.checked) {
            options[e.target.id] = [e.target.title, e.target.value, "true"]
            setSelectedOptions(options)
        } else {
            options[e.target.id] = [e.target.title, e.target.min] 
            setSelectedOptions(options)
        }
    }

    const handleAddAccessories = (e) => {
        setSelectedAccessories({...selectedAccessories, [e.target.id]: [e.target.value, e.target.name]})
    }

    const addToCart = async (e) => {
        e.preventDefault();
            try {
                if (cart.quantity < 1) {
                    return alert("Please add quantity")
                } else if (requiredOptions.length !== Object.keys(cart.required).length) {
                    return alert("Please make all required selections")
                }
                else {
                    const authToken = localStorage.getItem("auth-token");
                    // console.log(authToken)
                    // console.log(cart)
                    const newCart = await axios.post("/cart", 
                    cart, 
                    { headers: { "x-auth-token": authToken },
                    });
                    console.log(newCart);
                    history.push("/pages/cart")     
                }
            } catch (error) {
                console.log(error)
            } 
    }
 
    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
        if (optionalOptions.length>0) initializeOptions()
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
                
                {requiredOptions.length>0 || optionalOptions.length>0 || accessories.length>0 ?
                <div className="row">

                    <div className="col-md-1"></div>

                    <div className="col-md-10">
                                                       
                        <div style={quoteStyles.configContainer}>
                            {requiredOptions.length>0?
                                requiredOptions.map((required, idx) => (
                                    <>
                                    <h6 key={idx} style={quoteStyles.header}>Select {required[0]}:<span className="asterisk">*</span></h6>
                                    <form>
                                    <div>{required[1].map((option, index) => (
                                        <div className="form-check" key={index}>
                                            <input onClick={handleRequiredOptions} className="form-check-input" type="radio" value={option[1]} name="requiredRadios" title={required[0]} id={option[0]}/>
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
                                            <input onClick={handleOptionalOptions} className="form-check-input" type="checkbox" title={option[2]} value={option[0]} min={option[1]} id={idx}/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                {option[2]}
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
                                        <div className="input-group mb-3" key={idx}>
                                            <span className="input-group-text" style={quoteStyles.accessoryDesc} >{accessory[1]} {accessory[2]}</span>
                                            <input onChange={handleAddAccessories} id={accessory[0]} name={accessory[1]} type="number" min="0" className="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                        </div>
                                    </form>
                                ))
                                :null}
                        </div>
                        
                    </div>

                    <div className="col-md-1"></div>
                </div>
                : null}

                <div className = "row" style={quoteStyles.title}>
                    <div className="col-md-9"></div>
                    <div className="col-md-2" style={quoteStyles.titleBtn}>
                        <button onClick={addToCart} type="submit" className="btn btn-danger" style={quoteStyles.cartBtn}>Add to Cart</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
            
        </div>

    )
}

export default ProductQuote
