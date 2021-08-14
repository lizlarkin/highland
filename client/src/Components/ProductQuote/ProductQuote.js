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
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [selectedRequired, setSelectedRequired] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    let date = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let newDate =
      date.getDate() +
      "-" +
      monthNames[date.getMonth()] +
      "-" +
      date.getFullYear();
  
    const [dateNow] = useState(newDate);

    const cart = {
        model: model,
        name: name,
        quantity: selectedQuantity,
        required: selectedRequired,
        optional: selectedOptions,
        accessories: selectedAccessories,
        date: dateNow,
    }

    const selectQuantity = (e) => {
        setSelectedQuantity(e.target.value);
    }

    const handleRequiredOptions = (e) => {
        setSelectedRequired({...selectedRequired, [e.target.id]: e.target.value})
    }

    const handleOptionalOptions = (e) => {
        setSelectedOptions({...selectedOptions, [e.target.value]: e.target.checked})
    }

    const handleAddAccessories = (e) => {
        setSelectedAccessories({...selectedAccessories, [e.target.id]: [e.target.value, e.target.name]})
    }

    const addToCart = async (e) => {
        e.preventDefault();
            try {
                if (cart.quantity < 1) {
                    return alert("Please add quantity")
                } else if (requiredOptions.length != Object.keys(cart.required).length) {
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
                                    <h6 key={idx} style={quoteStyles.header}>Select {required[0]}:<span className="asterisk">*</span></h6>
                                    <form>
                                    <div>{required[1].map((option, idx) => (
                                        <div className="form-check" key={idx}>
                                            <input onClick={handleRequiredOptions} className="form-check-input" type="radio" dash={option[0]} value={option[1]} name="requiredRadios" id={required[0]}/>
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
                                            <input onClick={handleOptionalOptions} className="form-check-input" type="checkbox" dash={option[0]} value={option[1]} id={option[0]}/>
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
                                            <span class="input-group-text" style={quoteStyles.accessoryDesc} >{accessory[1]} {accessory[2]}</span>
                                            <input onChange={handleAddAccessories} id={accessory[0]} name={accessory[1]} type="number" min="0" class="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
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
                        {/* does this need to be onSubmit???? */}
                        <button onClick={addToCart} type="submit" class="btn btn-danger" style={quoteStyles.cartBtn}>Add to Cart</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
            
        </div>

    )
}

export default ProductQuote
