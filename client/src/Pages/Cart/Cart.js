import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const Cart = () => {


    const cartStyles = {
        cartBtnLg: {
            width: "33%",
        },
        cartBtnSm : {
            width: "18%",
        },
        inputText: {
            textAlign: "center",
        }
    }

    const [cartList, setCartList] = useState([]);

    const getAllCart = async () => {
        try {
            const allInCart = await axios.get(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            setCartList(allInCart.data)
            console.log("All In Cart: ", allInCart);
        } catch (error) {
            console.log("error getting quote history", error)   
        }
    }

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
                                            <div className="col-md-7">
                                                <h5 className="card-title">{data.model} {data.name}</h5>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="input-group">
                                                    <input type="number" min="0" className="form-control" placeholder={data.quantity} style={cartStyles.inputText} />
                                                    <button className="btn btn-outline-secondary" type="button" style={cartStyles.cartBtnLg}>Update</button>
                                                    <button onClick={deleteOneCart} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnLg} id={data._id}><i className="fas fa-trash-alt"></i> Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-6">
                                                {data.optional.length>0?
                                                    <>
                                                    <h6>Additional Features:</h6>
                                                    {Object.entries(data.optional[0]).map(((option, index) => (
                                                    <div className="input-group mb-3" key={index}>
                                                        <input type="text" className="form-control" placeholder={option}/>
                                                        <button className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnSm}><i className="fas fa-trash-alt"></i> </button>
                                                    </div>
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-5"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-6">
                                                {data.accessories.length>0?
                                                    <>
                                                    <h6>Accessories:</h6>
                                                    {Object.entries(data.accessories[0]).map(((accessory, index) => (
                                                    <div className="input-group mb-3" key={index}>
                                                        <input type="text" className="form-control" placeholder={accessory[1][1]}/>
                                                        <input type="number" min="0" className="form-control" placeholder={accessory[1][0]} style={cartStyles.inputText}/>
                                                        <button className="btn btn-outline-secondary" type="button" style={cartStyles.cartBtnSm}>Update</button>
                                                        <button className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnSm}><i className="fas fa-trash-alt"></i> </button>
                                                    </div>
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-5"></div>
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
