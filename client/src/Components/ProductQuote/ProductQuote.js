import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
import axios from "axios";


const ProductQuote = ({ name, model, requiredOptions, baseModel, accessories, category, EOLdates }) => {


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
    // const [selectedOptions, setSelectedOptions] = useState([]);
    const [optionalOptions, setOptionalOptions] = useState([]);
    const [dash, setDash] = useState([]);
    const [helpLoad, setHelpLoad] = useState(0);

    const cart = {
        model: model,
        name: name,
        quantity: selectedQuantity,
        required: selectedRequired,
        baseModel: baseModel,
        accessories: selectedAccessories,
    }

    const selectQuantity = (e) => {
        setSelectedQuantity(e.target.value);
    }

    // Initialize standard/base dash number
    const configureStandardDash = () => {
        for (let i = 1; i < optionalOptions.length; i++) {
            dashArr.push(optionalOptions[i][0][0]);
            cart.optional = dashArr;
            setDash(dashArr);
        }
    }

    // const [userCartNum, setUserCartNum] = useState(userData.user.cartActivity?:user)

    let dashArr = [];

    // modify dash number based on customer selections of optional featues
    const handleOptionalOptions = (e) => {
        if (e.target.checked) {
            // when option is checked, update index of standard/base dash number, found at index corresponding to that version position
            let dashCopy = [...dash];
            let newDash = [dashCopy[e.target.id]];
            newDash = e.target.value;
            dashCopy[e.target.id] = newDash;
            setDash(dashCopy);
        } else if (!e.target.checked) {
            // when option is unchecked, restore standard/base dash number
            let dashCopy = [...dash];
            let newDash = [dashCopy[e.target.id]];
            newDash = e.target.min;
            dashCopy[e.target.id] = newDash;
            setDash(dashCopy);
        }
    }

    const handleRequiredOptions = (e) => {
        setSelectedRequired({...selectedRequired, [e.target.title]: [e.target.value, e.target.id]})
    } 

    const handleAddAccessories = (e) => {
        setSelectedAccessories({...selectedAccessories, [e.target.id]: [e.target.value, e.target.name]})
    }

    const addToCart = async (e) => {
        e.preventDefault();
            try {
                if (cart.quantity < 1) {
                    return alert("Please add quantity.")
                } else if (requiredOptions.length !== Object.keys(cart.required).length) {
                    return alert("Please make all required selections.")
                } else if (EOLdates[2] && cart.quantity > EOLdates[2]) {
                    return alert ("Maximum quantity is " + EOLdates[2]+".")
                } 
                else {
                    const authToken = localStorage.getItem("auth-token");
                    const newCart = await axios.post("/cart", 
                        cart, 
                        { headers: { "x-auth-token": authToken },
                    });
                    console.log("newCart hit", newCart);
                    axios.post("/users/addCartActivity");
                    history.push("/cart")     
                }
            } catch (error) {
                console.log(error)
            } 
    }
 
    useEffect(() => {
        if (!userData.user) history.push("/login");
        // if (optionalOptions.length>0) initializeOptions();
        const getProductData = async () => {
            try {
               const prodData = await axios.get(`/products/${model}`);
               setOptionalOptions(prodData.data[0].optionsOptional);
               setHelpLoad(1);
            } catch (error) {
                console.log(error.response)
            }
        }
        getProductData();
        if (optionalOptions.length>0) configureStandardDash();
    }, [userData.user, history, helpLoad])



    return (
        <div>

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">

                {/* Manage EOL quoting: If no stock remains or is undefined, hide quote functionality and replace with contact factory text. */}
                {(category[0]==="LEG"&&EOLdates[2]<1)||(category[0]==="LEG"&&!EOLdates[2])?
                    "End of life procedures have been initiated for this product. Please contact factory."
                    :
                <>
                    <div className="row" style={quoteStyles.title}>

                        <div className="col-md-1"></div>

                        <div className="col-md-8">
                        {model && name?
                                <h5>{model}-{dash} {name}</h5>
                            :null}
                        </div>

                        <div className="col-md-2" style={quoteStyles.titleBtn}>
                                <input onChange={selectQuantity} type="number" min="0" max={EOLdates?EOLdates[2]>0?EOLdates[2]:null:null} className="form-control" placeholder="Quantity"/>
                        </div>

                        <div className="col-md-1"></div>
                    </div>

                    {/* {requiredOptions.length>0 || optionalOptions?optionalOptions.length>0:false || accessories.length>0 ? */}
                    <div className="row">

                        <div className="col-md-1"></div>

                        <div className="col-md-10">
                                                        
                            <div style={quoteStyles.configContainer}>

                                {optionalOptions?optionalOptions.length>0?
                                    <>
                                        <h6 style={quoteStyles.header}>Select {optionalOptions[0]} (optional):</h6>
                                        <form>
                                            {optionalOptions.slice(1).map((option, idx) => (
                                                <div className="form-check" key={idx}>
                                                    <input onClick={handleOptionalOptions} className="form-check-input" type="checkbox" title={option[1][1]} value={option[1][0]} min={option[0]} id={idx}/>
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        {option[1][1]}
                                                    </label>
                                                </div>
                                            ))}
                                        </form>     
                                    </>
                                :null
                                :null}  


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

                                


                                    {accessories.length>0?
                                    <>
                                    <h6 style={quoteStyles.header}>Select Accessories (click to view image): </h6>
                                    </>
                                    :null}

                                {accessories.length>0?
                                    accessories.map((accessory, idx) => (
                                        <form>
                                            <div className="input-group mb-3" key={idx}>
                                                <span className="input-group-text overflow-auto" style={quoteStyles.accessoryDesc} >{accessory[1]} {accessory[2]}</span>
                                                <input onChange={handleAddAccessories} id={accessory[0]} name={accessory[1]} type="number" min="0" className="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                            </div>
                                        </form>
                                    ))
                                    :null}
                            </div>
                            
                        </div>

                    <div className="col-md-1"></div>

                    </div>
                    {/* : null} */}

                    <div className = "row" style={quoteStyles.title}>
                        <div className="col-md-9"></div>
                        <div className="col-md-2" style={quoteStyles.titleBtn}>
                            <button onClick={addToCart} type="submit" className="btn btn-danger" style={quoteStyles.cartBtn}>Add to Cart</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </>
                }
              


            </div>
            
        </div>

    )
}

export default ProductQuote
