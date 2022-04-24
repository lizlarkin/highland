import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
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
    const history = useHistory();
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [dash, setDash] = useState([]);  // configured on page load and updated based on user selections
    const [helpLoad, setHelpLoad] = useState(0); // helps configure base dash numbers
    const [versions, setVersions] = useState([]); // holds backend data about product version options
    const [configuration, setConfiguration] = useState([]) // holds descriptions of selected options
    let   [checkRequired, setCheckRequired] = useState([]) // array generated when users make required selections to check that all required selections are made
    let   [checkNum, setCheckNum] = useState(0) // stores number of required selections

    const cart = {
        model: model,
        name: name,
        version: dash,
        config: configuration,
        qty: selectedQuantity,
        acc: selectedAccessories,
        userId: userData.user, 
    }

    const selectQuantity = (e) => {
        setSelectedQuantity(e.target.value);
    }

    let dashArr = [];
    // Initialize standard/base dash number
    const configureStandardDash = () => {
        for (let i = 0; i < versions.length; i++) {
            dashArr.push(versions[i][2]);
            cart.configuredDash = dashArr;
            setDash(dashArr);
        }
        // Count number of occurences of "required" selections
        let count = []
        for (let j = 0; j < versions.length; j++) {
            if (versions[j][0]==='required') {
                count++
            }
        }
        setCheckNum(count)
    }

    // modify dash number based on customer selections of optional featues
    const handleOptionalVersions = (e) => {
        if (e.target.checked) {
            // when option is checked, update index of standard/base dash number, found at index corresponding to that version position
            let dashCopy = [...dash];
            let newDash = [dashCopy[e.target.id]];
            newDash = e.target.value;
            dashCopy[e.target.id] = newDash;
            setDash(dashCopy);
            let configCopy = [...configuration];
            let newConfig = [configCopy[e.target.id]];
            newConfig = e.target.getAttribute('data-config');
            configCopy[e.target.id] = newConfig;
            setConfiguration(configCopy)
        } else if (!e.target.checked) {
            // when option is unchecked, restore standard/base dash number
            let dashCopy = [...dash];
            let newDash = [dashCopy[e.target.id]];
            newDash = e.target.getAttribute('data-defaultdash');
            dashCopy[e.target.id] = newDash;
            setDash(dashCopy);
            let configCopy = [...configuration];
            configCopy[e.target.id] = null
            setConfiguration(configCopy)
        }
    }

    const handleRequiredVersions = (e) => {
        let dashCopy = [...dash];
        let newDash = [dashCopy[e.target.id]];
        newDash = e.target.value;
        dashCopy[e.target.id] = newDash;
        setDash(dashCopy);
        let configCopy = [...configuration];
        let newConfig = [configCopy[e.target.id]];
        newConfig = e.target.getAttribute('data-config');
        configCopy[e.target.id] = newConfig;
        setConfiguration(configCopy)
        // Check to make sure user has made all required selections
        if (e.target.checked) {
            let checkRequiredCopy = [...checkRequired];
            let newCheck = [checkRequiredCopy[e.target.id]];
            newCheck = e.target.value;
            checkRequiredCopy[e.target.id] = true;
            setCheckRequired(checkRequiredCopy);
        }
    }

    const handleAddAccessories = (e) => {
        if (e.target.value > 0) {
        setSelectedAccessories({...selectedAccessories, [e.target.id]: [e.target.name, e.target.value]})
        } else { // for cases in which user adds and then removes accessories (sets the accessory quantity >1 and then =0)
            setSelectedAccessories({...selectedAccessories, [e.target.id]: undefined})
        }
    }

    const addToCart = async (e) => {
        e.preventDefault();
            try {
                if (cart.qty < 1) {
                    return alert("Please add quantity.")
                } else if (checkRequired.filter(value => value === true).length<checkNum) {
                    return alert ("Please make all required selections.")
                } else if (EOLdates[2] && cart.quantity > EOLdates[2]) {
                    return alert ("Maximum quantity is " + EOLdates[2]+".")
                } 
                else {
                    const authToken = localStorage.getItem("auth-token");
                    await axios.post("/cart", 
                        cart, 
                        { headers: { "x-auth-token": authToken },
                    });
                    axios.post("/users/addCartActivity");
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
               const prodData = await axios.get(`/products/${model}`);
               setVersions(prodData.data[0].versions);
               setHelpLoad(1);
            } catch (error) {
                console.log(error.response)
            }
        }
        getProductData();
        if (versions.length>0) configureStandardDash();
    }, [userData.user, history, helpLoad, model])



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


                    <div className="row">

                        <div className="col-md-1"></div>

                        <div className="col-md-10">
                 
                            {/* <div style={quoteStyles.configContainer}> */}

                                {versions.length>0?
                                    versions.map((options, index) => (
                                        options[0]==="noOptions"?
                                        null
                                        :
                                        options[0]==="required"?
                                            <div style={quoteStyles.configContainer} key={index}>
                                            <h6 style={quoteStyles.header}>{options[1]}<span className="asterisk">* (required)</span></h6>
                                            {options.slice(3).map((option, idx) => (
                                                <div className="form-check" key={idx}>
                                                    <input onClick={handleRequiredVersions} className="form-check-input" type="radio" name={"flexRadioDefault"+index} value={option[0]} id={index} data-config={option[1]}/>
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
                                                        <input onClick={handleOptionalVersions} className="form-check-input" type="checkbox" value={option[0]} data-defaultdash={options[2]} id={index} data-config={option[1]}/>
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
                                                    <input onChange={handleAddAccessories} id={accessory[0]} name={accessory[1]} type="number" min="0" className="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                                </div>
                                            </div>

                                            <div className="modal fade" id={"exampleModal"+idx} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">{accessory[1]} {accessory[2]}</h5>
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
                            {/* </div> */}
                            
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
