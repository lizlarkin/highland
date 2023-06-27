import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
import NavContext from "../../Context/NavContext";
import axios from "axios";
import {AccessoryPhotos} from '../../Pages/Product/AccImages/AccImages';

const ProductQuote = ({ name, model, accessories, category, EOLdates }) => {

    const quoteStyles = {
        qtyInput: {
            width: "100%",
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
        accessoryBtn: {
            width: "100%",
            textAlign: "left",
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
    const { getCartQuantity } = useContext(NavContext);
    const history = useHistory();
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [selectedAccessories, setSelectedAccessories] = useState();
    const [configNums, setConfigNums] = useState([]) // Hold array of configuration numbers in state
    const [configNum, setConfigNum] = useState([]); // Hold one configration option selected by user
    const [dashNums, setDashNums] = useState([]); // Hold array of dash numbers in state
    const [dashNum, setDashNum] = useState(); // Hold one Highland dash number selected by user
    const [config, setConfig] = useState([]); // holds backend data about product version options
    let   [reqCount, setReqCount] = useState(0) // total number of required selections
    let   [checkNum, setCheckNum] = useState([]) // total number of required selections made

    const cart = {
        prod: model+"-"+dashNum,
        qty: selectedQuantity,
        acc: selectedAccessories,
        userId: userData.user, 
    }

    const selectQuantity = (e) => {
        setSelectedQuantity(e.target.value);
    }

    // Set configuration number based on user option selections   
    const updateConfigNum = (e) => {
        if (e.target.checked) {
            // Make a copy of the array
            let tempConfigNum = [...configNum]
            // Update array item selected
            tempConfigNum[e.target.id] = e.target.value
            // Set ConfigArr State
            setConfigNum(tempConfigNum.join(''))
            // Create Check Number Array the populates true for each option selected once
            let checkNumCopy = [...checkNum]
            checkNumCopy[e.target.id] = true
            setCheckNum(checkNumCopy)
        } else if (!e.target.checked) {
            // Make a copy of the array
            let tempConfigNum = [...configNum]
            // Update array item selected
            tempConfigNum[e.target.id] = 0
            // Set ConfigArr State
            setConfigNum(tempConfigNum.join(''))
            }   
        }

    const handleAddAccessories = (e) => {
        if (e.target.value > 0) {
            setSelectedAccessories({...selectedAccessories, [e.target.id]: parseInt(e.target.value)})
        } else { // for cases in which user adds and then removes accessories (sets the accessory quantity >1 and then =0)
            setSelectedAccessories({...selectedAccessories, [e.target.id]: undefined})
        }
    }

    const addToCart = async (e) => {
        e.preventDefault();
            try {
                if (cart.qty < 1) {
                    return alert("Please add quantity.")
                } else if (checkNum.length<reqCount) {
                    return alert ("Please make all required selections.")
                } else if (EOLdates[2] && cart.quantity > EOLdates[2]) {
                    return alert ("Maximum quantity is " + EOLdates[2]+".")
                } 
                else {
                    // Add items to Cart DB
                    const authToken = localStorage.getItem("auth-token");
                    await axios.post("/cart", 
                        cart,
                        { headers: { "x-auth-token": authToken },
                    });
                    // Update Context
                    getCartQuantity()
                    // Redirect to cart page
                    history.push("/Cart")     
                }
            } catch (error) {
                console.log(error)
            } 
    }
 
    useEffect(() => {
        if (!userData.user) history.push("/login");
        const getProductData = async () => {
            try {
                // get all product data from backend based on Model
                const prodData = await axios.get(`/products/${model}`);
                // Set configuration data array
                setConfig(prodData.data[0].config);
                // Set Number of Required Selections
                let countReq = 0;
                prodData.data[0].config.map((type) => (
                    type[0]==="required"?countReq++:0
                ))
                setReqCount(countReq);
                // Set Array of all configuration numbers
                let configArr = []; // Hold array of all possible configuration numbers
                prodData.data[0].versions.map((version) => (
                    configArr.push(version[0].toString().replaceAll(',', ''))
                ))
                setConfigNums(configArr)
                // Set Array of all dash/version numbers
                let dashArr = []; // Hold array of all possible dash numbers
                prodData.data[0].versions.map((version) => (
                    dashArr.push(version[1].toString().replaceAll(',', ''))
                ))
                setDashNums(dashArr)
                // Set Base Configuration Number to State
                setConfigNum(configArr[0]);
                // Set Base Dash Number to State
                setDashNum(dashArr[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getProductData();
    }, [userData.user, history, model])

    // Get dash number associated with selected product configuration
    useEffect(() => {
        // Set index of selected configuration in configuration array
        let configIndex = configNums.indexOf(configNum) 
        // Set Dash number based on config index num    
        setDashNum(dashNums[configIndex])
    }, [configNum, configNums, dashNums])
    
    return (
        <div>

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">

                {/* Manage EOL quoting: If no stock remains or is undefined, hide quote functionality and replace with contact factory text. */}
                {(category[0]==="LEG"&&EOLdates[2]<1)||(category[0]==="LEG"&&!EOLdates[2])?
                    "End of life procedures have been initiated for this product. Please contact factory."
                    :
                (category[0]==="OEM")?
                    "Custom product. Please contact factory."
                    :
                <>
                    <div className="row" style={quoteStyles.title}>

                        <div className="col-md-1"></div>

                        <div className="col-md-8">
                        {model && name?
                                <h5>{model}-{dashNum} {name}</h5>
                            :null}
                        </div>

                        <div className="col-md-2" style={quoteStyles.titleBtn}>
                                <input onChange={selectQuantity} type="number" min="0" max={EOLdates?EOLdates[2]>0?EOLdates[2]:null:null} className="form-control" placeholder="Quantity"/>
                        </div>

                        <div className="col-md-1"></div>
                    </div>


                    <div className="row">

                        <div className="col-md-1"></div>

                        <div className="col-md-10">
                 
                            {/* <div style={quoteStyles.configContainer}> */}
                            
                                {config.length>0?
                                    config.map((options, index) => (
                                        options[0]==="noOptions"?
                                        null
                                        :
                                        options[0]==="required"?
                                            <div style={quoteStyles.configContainer} key={index}>
                                            <h6 style={quoteStyles.header}>{options[1]}<span className="asterisk">* (required)</span></h6>
                                            {options.slice(2).map((option, idx) => (
                                                <div className="form-check" key={idx}>
                                                    <input onClick={updateConfigNum} className="form-check-input" type="radio" name={"flexRadioDefault"+index} value={option[0]} id={index}/>
                                                    <label className="form-check-label" htmlFor={index}>
                                                        {option[1]}
                                                    </label>
                                                </div>
                                            ))}
                                            </div>
                                        :
                                        options[0]==="optional"?
                                            <div style={quoteStyles.configContainer}>
                                                <h6 style={quoteStyles.header}>{options[1]} (optional)</h6>
                                                {options.slice(3).map((option, idx) => (
                                                    <div className="form-check" key={idx}>
                                                        <input onClick={updateConfigNum} className="form-check-input" type="checkbox" value={option[0]} id={index}/>
                                                        <label className="form-check-label">
                                                            {option[1]}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        :null))
                                :null}


                                    {accessories.length>0?
                                    <>
                                    <h6 style={quoteStyles.header}>Select Accessories (click to view image): </h6>
                                    </>
                                    :null}
                                {accessories.length>0?
                                    accessories.map((accessory, idx) => (
                                        <form>
                                            <div className="row" style={{marginBottom: "1%"}}>
                                                <div className="col-md-9">
                                                    <button key={idx} type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={"#exampleModal"+idx} style={quoteStyles.accessoryBtn}>
                                                        {accessory[1]} {accessory[2]}
                                                    </button>
                                                </div>
                                                <div className="col-md-3">
                                                    <input onChange={handleAddAccessories} id={accessory[0]} type="number" min="0" className="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                                </div>
                                            </div>

                                            <div className="modal fade" id={"exampleModal"+idx} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">{accessory[0]}: {accessory[1]} {accessory[2]}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <img src={AccessoryPhotos[AccessoryPhotos.findIndex(search => search.includes(accessory[0].split("-")[0]))]} className="img-fluid img-thumbnail" alt={accessory[1]}></img> 
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    ))
                                    :null}
                            
                        </div>

                    <div className="col-md-1"></div>

                    </div>

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
