import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import { useHistory } from "react-router-dom";

const Cart = () => {

    const history = useHistory();

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
            console.log("error getting cart data", error)   
        }
    }

    // Delete All in one cart section
    const deleteCart = async (e) => {
        const cartIdToDelete = e.target.id;
        console.log("id of whole cart", cartIdToDelete)
        try {
            const removeItem = await axios.delete(`/cart/${cartIdToDelete}`);
            getAllCart();
        } catch (error) {
            console.log("error deleting whole cart", error)
        }
    }

    // Edit one section of cart
    const editCart = async (e) => {
        const modelToEdit = e.target.name;
        history.push(`/Pages/Product/Product/${modelToEdit}`)
    }

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
                            <>
                            <div className="card mb-3" key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5 className="card-title">
                                                    {data.model} 
                                                    {"-"}
                                                    {data.required.length>0?
                                                        <>
                                                            {Object.entries(data.required[0]).sort().map(((require, index) => (
                                                                <span key={index}>{require[1][1]}</span>  
                                                            )))}
                                                        </>
                                                    :null}
                                                    {data.optional.length>0?
                                                        <>
                                                            {Object.entries(data.optional).sort().map(((option, index) => (
                                                                option.map((dash, idx) => (
                                                                    <span key={index}>{dash[1]}</span>
                                                                ))
                                                                  
                                                            )))}
                                                        </>
                                                    :null}
                                                    {": "}
                                                    {data.name}
                                                    {data.required.length>0?
                                                        <>
                                                        <span>{" with "}</span>
                                                            {Object.entries(data.required[0]).sort().map(((desc, index) => (
                                                                <span key={index}>
                                                                    {desc[1][0]} 
                                                                    {" "}
                                                                    {desc[0].toLowerCase()} 
                                                                    {desc.length-index===desc.length?", and ":
                                                                    desc.length-index>0?", ":
                                                                    null
                                                                    } 
                                                                </span>
                                                            )))}
                                                        </>
                                                    :null}
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-7">
                                                {data.quantity?
                                                    <>
                                                    <h6>Quantity:</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder={data.quantity} style={cartStyles.accDesc} disabled/>                                                     
                                                    </div>                  
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-7">
                                                {data.optional.length>0?
                                                    <>
                                                    <h6>Additional Features:</h6>
                                                    {Object.entries(data.optional[0]).map(((option, index) => (
                                                        option[1]?
                                                        <div className="input-group mb-3" key={index}>
                                                            <input type="text" className="form-control" placeholder={option[0]} style={cartStyles.accDesc} disabled/>                                                     
                                                        </div>
                                                        :null
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
                                                        accessory[1][0]>0?
                                                        <div className="input-group mb-3" key={index}>
                                                            <input type="text" className="form-control" placeholder={accessory[0] + ": " + accessory[1][1]} style={cartStyles.accDesc} disabled/>
                                                            <input type="number" min="0" className="form-control" placeholder={accessory[1][0]} disabled/>
                                                        </div>
                                                        :null
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-4">
                                                    <button onClick={editCart} className="btn btn-outline-secondary" type="button" style={cartStyles.cartBtnLg} name={data.model}>Edit</button>
                                                    <button onClick={deleteCart} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnLg} id={data._id}><i className="fas fa-trash-alt"></i> Remove</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        ))
                    :null}

                    {cartList?
                    <div className = "row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3" >
                            <button type="submit" class="btn btn-danger" style={{width: "100%"}}>Request Quote</button>
                        </div>                    
                    </div>
                    :null}

                </div>



                <div className="col-md-1"></div>

            </div>

        </div>
    )
}

export default Cart
