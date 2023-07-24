import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import NavContext from "../../Context/NavContext";
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';
import {ProductPhotos} from '../../Pages/Product/Images/ProductPhotos';

const Cart = () => {

    const history = useHistory();
    const { userData, incrementQuoteNum } = useContext(UserContext); 
    const { getCartQuantity } = useContext(NavContext);

    const cartStyles = {
        cartBtnSm: {
            width: "49%",
            marginBottom: "3%"
        },
        cartBtnLg: {
            width: "100%",
            marginBottom: "3%"
        },
        cartHeadings: {
            fontWeight: "500",
            marginTop: "2%"
        }
    }

    const [cartList, setCartList] = useState([]);
    let modelArr = [];
    const [prodList, setProdList] = useState();

    const getProdData = async () => {
        try {
            // Get Product Data based on Models in Cart
            const prodData = await axios.get(`/products/models/${modelArr}`);
            setProdList(prodData.data)
        } catch (error) {
            console.log(error)
        }
    };

    const getAllCart = async () => {
        try {
            // Get Data from Cart Collection based on User ID
            const allInCart = await axios.get(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            setCartList(allInCart.data)

            // Get Data from Product Collection based on Models in from User Cart
            allInCart.data.map((models) => (
                modelArr.push(models.prod.split("-")[0])
            ))
            getProdData();
            
        } catch (error) {
            console.log(error)   
        }
    };

    // Delete All in one cart section
    const deleteCart = async (e) => {
        const cartIdToDelete = e.target.id;
        console.log("cartIdToDelete", cartIdToDelete)
        try {
            await axios.delete(`/cart/${cartIdToDelete}`);
            getAllCart();
            getCartQuantity();
        } catch (error) {
            console.log("error deleting one cart", error)
        }
    }

    // Delete Entire Cart
    const deleteAll = async () => {
        try {
            await axios.delete(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            getAllCart();
            getCartQuantity();
        } catch (error) {
            console.log("error deleting all", error)
        }
    }

    // Edit one section of cart
    // const editCart = async (e) => {
    //     const modelToEdit = e.target.name;
    //     history.push(`/Pages/Product/Product/${modelToEdit}`)
    // }

    // Request Quote
    const [quoteList, setQuoteList] = useState()

    const finalizeItems = () => {
        setQuoteList({
            products: [cartList],
        })
    };

    const requestQuote = async () => {
        try {
            // Store Quote in Quote History
            const authToken = localStorage.getItem("auth-token");
            await axios.post("/quotes", 
            quoteList,
            { headers: { "x-auth-token": authToken },
            });
            // Update Users Quote Activity
            await axios.put(`/users/updateQuoteNum/${userData.user.id}`);
            // Update Context
            incrementQuoteNum();
            // Take user to account page
            history.push("/Account");
            // Delete Items from Cart List
            deleteAll();
        } catch (error) {
            console.log("error saving quote: ", error)
        }
    }
    
    useEffect(() => {
        getAllCart()
    }, [])

    return (
        <div>
            <div>
                <GenJumbo />
            </div>
            
            <div className="row">

                <div className="col-md-1"></div>

                <div className="col-md-10">
                    {cartList?
                        cartList.map((carts, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={ProductPhotos[ProductPhotos.findIndex(search => search[0].includes(carts.prod.split("-")[0]))][0]} 
                                             className="img-fluid rounded-start" 
                                             alt={carts.prod}/>
                                    </div>
                                    <div className="col-md-8"> 
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {carts.prod}
                                                {" "}
                                                {prodList?
                                                prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))][1]
                                                :null}
                                                
                                            </h5>
                                            <div className="row">
                                                <div className="col-md-1"></div>
                                                <div className="col-md-11">
                                                    <div style={cartStyles.cartHeadings}>Quantity: {carts.qty}</div>

                                                    {prodList?
                                                    prodList
                                                    [prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))] // index of model
                                                    [2] // index that holds config info
                                                    [prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))][2].findIndex(el=>el.includes(parseInt(carts.prod.split("-")[1])))]
                                                    [2][0]?
                                                    <div style={cartStyles.cartHeadings}>Configuration: </div>
                                                    :null
                                                    :null}

                                                    {prodList?
                                                    prodList
                                                    [prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))] // index of model
                                                    [2] // index that holds config info
                                                    [prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))][2].findIndex(el=>el.includes(parseInt(carts.prod.split("-")[1])))]
                                                    [2][0]?
                                                    prodList
                                                    [prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))] // index of model
                                                    [2] // index that holds config info
                                                    [prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))][2].findIndex(el=>el.includes(parseInt(carts.prod.split("-")[1])))]
                                                    [2].map((conf, i) => (
                                                        <li key={i}>{conf}</li>
                                                    ))
                                                    :null
                                                    :null}

                                                    {prodList?
                                                    carts.acc.length>0?
                                                        Object.keys(carts.acc[0]).length>0?
                                                            <div style={cartStyles.cartHeadings}>Accessories:</div>
                                                    :null:null:null}

                                                    {prodList?
                                                        <div> 
                                                        {carts.acc.map((accessories) => (
                                                            Object.entries(accessories).map((accessory, ix) => (
                                                                <div key={ix}>
                                                                    <li>{accessory[0]+": "
                                                                    +
                                                                    prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))] // index of model
                                                                    [3] // index that holds accessory info
                                                                    [prodList[prodList.findIndex(search=>search[0].includes(carts.prod.split("-")[0]))][3].findIndex(el=>el.includes(accessory[0]))][1]
                                                                    }
                                                                    <span className="badge bg-light text-dark">Quantity: {accessory[1]}</span>
                                                                    </li>
                                                                </div>
                                                            ))
                                                        ))}
                                                        </div>
                                                    :null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8"></div>
                                    <div className="col-md-4">
                                        {/* <button onClick={editCart} className="btn btn-outline-secondary" type="button" style={cartStyles.cartBtnSm} name={data.model}><i className="far fa-edit"></i> Edit</button> */}
                                        <button onClick={deleteCart} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnSm} id={carts._id}><i className="fas fa-trash-alt"></i> Remove</button>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    :null
                    }

                    {cartList.length>1?
                        <div className = "row">
                            <div className="col-md-9"></div>
                            <div className="col-md-3">
                                <button onClick={deleteAll} className="btn btn-outline-danger" type="button" style={cartStyles.cartBtnLg} id={1}><i className="fas fa-trash-alt"></i> Remove All</button>
                            </div>
                        </div>
                    :null}

                    {cartList.length>0?
                    <div className = "row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3" >
                            <button onClick={() => finalizeItems()} type="submit" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={cartStyles.cartBtnLg}>Request Quote</button>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Thank you!</h5>
                                </div>
                                <div className="modal-body">
                                    Your quote request has been received. A member of our sales team will respond shortly. 
                                </div>
                                <div className="modal-footer">
                                    <button onClick={requestQuote} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>                    
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{textAlign: "center"}}>No products selected for quote.</div>
                        <div className="col-md-3"></div>
                    </div>
                    }

                </div>



                <div className="col-md-1"></div>

            </div>

        </div>
    )
}

export default Cart
