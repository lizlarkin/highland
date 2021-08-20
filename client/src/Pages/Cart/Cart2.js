import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const Cart = () => {


    const cartStyles = {
        cartBtnLg: {
            width: "49%",
            marginLeft: "1%"
        },
        cartBtnSm : {
            width: "20%",
        },
        inputText: {
            textAlign: "center",
        },
        accDesc: {
            width: "75%"
        }
    }

    const [cartList, setCartList] = useState([]);
    const [version, setVersion] = useState([]);

    const getAllCart = async () => {
        try {
            const allInCart = await axios.get(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            setCartList(allInCart.data)
            console.log("All In Cart: ", allInCart.data);
            setVersion(cartList.required)
        } catch (error) {
            console.log("error getting quote history", error)   
        }
    }

    // Delete All in one cart section
    const deleteOneCart = async (e) => {
        const cartIdToDelete = e.target.id;
        console.log("id of whole cart", cartIdToDelete)
        try {
            const removeItem = await axios.delete(`/cart/${cartIdToDelete}`);
            getAllCart();
        } catch (error) {
            console.log("error deleting whole cart", error)
        }
    }

    // Update cart selections

    // Update button starts disabled, any change enables button state
    const [highlightUpdate, setHighlightUpdate] = useState(false)

    const toggleHighlight = () => {
        setHighlightUpdate(true)
    };


    // Change model quantity
    const [modelQuantity, setModelQuantity] = useState();

    const updateModelQuantity = (e) => {
        let index = e.target.id;
        console.log('index of quantity', index)
        setModelQuantity({[e.target.name]: e.target.value})
        console.log("update qty:", modelQuantity)
    }

    // Toggle optional selections on and off
    const [optionBool, setOptionBool] = useState(true);

    const toggleIncluded = (e) => {
        const optionToChange = e.target.name;
        setOptionBool(prevOptionBool  => !prevOptionBool);
        toggleHighlight();
        console.log("optionBool", optionToChange +": ");
    };



    useEffect(() => {
        getAllCart();
    }, [])

    return (
        <div>
            <CategoryJumbotron title={"Cart"} text={"Please review items and submit quote request. A member of our sales team will respond shortly."}/>
            
            <div className="row">

                <div className="col-md-1"></div>

                <div className="col-md-10">
                    {cartList?
                        cartList.map((data, index) => (
                            <div className="card mb-3" key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5 className="card-title">
                                                    {data.model} 
                                                    {"-"}
                                                    {data.required.length>0?
                                                        <>
                                                            {Object.entries(data.required[0]).map(((require, index) => (
                                                                <span key={index}>{require[1][1]}</span>
                                                            )))}
                                                        </>
                                                    :null}
                                                    {" "}
                                                    {data.name}
                                                    {data.required.length>0?
                                                        <>
                                                        <span>{" with "}</span>
                                                            {Object.entries(data.required[0]).map(((desc, index) => (
                                                                <span key={index}>{desc[1][0]}</span>
                                                            )))}
                                                        </>
                                                    :null}
                                                </h5>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="input-group">
                                                    <input onClick={updateModelQuantity} type="number" min="0" className="form-control" placeholder={data.quantity} style={cartStyles.inputText} name={data.model}/>
                                                    {/* <button onClick={deleteOneCart} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnLg} id={data._id}><i className="fas fa-trash-alt"></i> Remove</button> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-7">
                                                {data.optional.length>0?
                                                    <>
                                                    <h6>Additional Features:</h6>
                                                    {Object.entries(data.optional[0]).map(((option, index) => (
                                                    <div className="input-group mb-3" key={index}>
                                                        <input type="text" className="form-control" placeholder={option} style={cartStyles.accDesc}/>
                                                        {optionBool?
                                                        <button name={option} onClick={toggleIncluded} className="btn btn-outline-success" type="button"><i class="far fa-check-square"></i> </button>
                                                        :
                                                        <button name={option} onClick={toggleIncluded} className="btn btn-outline-danger" type="button"><i class="far fa-minus-square"></i> </button>
                                                        }                                                        
                                                    </div>
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-7">
                                                {data.accessories.length>0?
                                                    <>
                                                    <h6>Accessories:</h6>
                                                    {Object.entries(data.accessories[0]).map(((accessory, index) => (
                                                    <div className="input-group mb-3" key={index}>
                                                        <input type="text" className="form-control" placeholder={accessory[1][1]} style={cartStyles.accDesc}/>
                                                        <input type="number" min="0" className="form-control" placeholder={accessory[1][0]} />
                                                    </div>
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-4">
                                                    {!highlightUpdate?
                                                    <button className="btn btn-outline-primary" type="button" style={cartStyles.cartBtnLg} disabled>Update</button>
                                                    :
                                                    <button className="btn btn-outline-primary" type="button" style={cartStyles.cartBtnLg}>Update</button>
                                                    }
                                                    <button onClick={deleteOneCart} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnLg} id={data._id}><i className="fas fa-trash-alt"></i> Remove All</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    :null}

                </div>

                <div className="col-md-1"></div>

            </div>

        </div>
    )
}

export default Cart
