import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const Cart = () => {

    const cartStyles = {
        cartBtn: {
            width: "33%",
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

    useEffect(() => {
        getAllCart();
    }, [])

    return (
        <div>
            <CategoryJumbotron title={"Items Requested for Quote"} text={"Please review items and submit quote request. A member of our sales team will respond shortly."}/>
            
            <div className="row">

                <div className="col-md-1"></div>

                <div className="col-md-10">
                    {cartList?
                        cartList.map((data, index) => (
                            <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h5 className="card-title">{data.model} {data.name}</h5>
                                            </div>
                                            <div className="col-md-4">
                                                <div class="input-group">
                                                    <input type="number" min="0" class="form-control" placeholder={data.quantity} />
                                                    <button class="btn btn-outline-secondary" type="button" style={cartStyles.cartBtn}>Update</button>
                                                    <button class="btn btn-outline-danger" type="button" style={cartStyles.cartBtn}><i class="fas fa-trash-alt"></i> Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <h6>Extra Features:</h6>
                                        <h6>Accessories:</h6>
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
