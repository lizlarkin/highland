import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { DateContext } from "../../Context/DateContext";
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';

const Cart = () => {

    const history = useHistory();

    const { userData } = useContext(UserContext);
    const { dateNow } = useContext(DateContext);

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
        configDetail: {
            marginBottom: "3%",
        },
        accDetail: {
            marginBottom: "3%"
        },
        accQuantity: {
            float: "right",
            fontSize: "85%",
            color: "black",
            fontWeight: "normal",
            backgroundColor: "white"
        }
    }

    const [cartList, setCartList] = useState([]);
    // const [version, setVersion] = useState([]);

    const getAllCart = async () => {
        try {
            const allInCart = await axios.get(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
            console.log("cart list", allInCart)
            setCartList(allInCart.data)
            // setVersion(cartList.required)
        } catch (error) {
            console.log(error)   
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

    // Delete Entire Cart
    const deleteAll = async () => {
        try {
            const removeAll = await axios.delete(`/cart`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") }
            });
        } catch (error) {
            console.log("error deleting all", error)
        }
    }

    // Edit one section of cart
    const editCart = async (e) => {
        const modelToEdit = e.target.name;
        history.push(`/Pages/Product/Product/${modelToEdit}`)
    }

    // Request Quote

    const [quoteList, setQuoteList] = useState()

    const finalizeItems = () => {
        setQuoteList({
            date: dateNow,
            products: [cartList],
        })
    };

    const requestQuote = async () => {
        try {
            const authToken = localStorage.getItem("auth-token");
            const saveQuote = await axios.post("/quotes", 
            quoteList,
            { headers: { "x-auth-token": authToken },
            });
            console.log("HERE QUOTE LIST HERE! ", quoteList)
            console.log("save quote", saveQuote);
            history.push("/Account");
            deleteAll();
        } catch (error) {
            console.log("error saving quote: ", error)
        }
        }
    

    useEffect(() => {
        getAllCart();
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
                                                                    <span index={index} key={idx}>{dash[1]}</span>
                                                                ))
                                                                  
                                                            )))}
                                                        </>
                                                    :data.baseModel}
                                                    {": "}
                                                    {data.name}
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-3">
                                                {data.quantity?
                                                    <>
                                                    <h6>Quantity:</h6>
                                                    <ul className="list-group" key={index}>
                                                        <li className="list-group-item list-group-item-dark" style={cartStyles.configDetail}>{data.quantity}</li>                                                   
                                                    </ul>               
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-8"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10">
                                                {data.required.length>0?
                                                    <>
                                                    <h6>Product Configuration:</h6>
                                                    {Object.entries(data.required[0]).sort().map(((config, index) => (
                                                        config[1]?
                                                        <ul className="list-group" key={index}>
                                                            <li className="list-group-item list-group-item-dark" style={cartStyles.configDetail}>{config[1][0]} {config[0].toLowerCase()==="configuration"?null:config[0].toLowerCase()}</li>  
                                                        </ul>
                                                        :null
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-1"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10">
                                                {data.optional.length>0?
                                                    <>
                                                    <h6>Additional Features:</h6>
                                                    {data.optional.map(((option, index) => (
                                                        option[2]?
                                                        <ul className="list-group" key={index}>
                                                            <li className="list-group-item list-group-item-dark" style={cartStyles.configDetail}>{option[0]} </li>                                                   
                                                        </ul>
                                                        :null
                                                    )))}
                                                    </>
                                                :null}
                                            </div>
                                            <div className="col-md-1"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10">
                                                {console.log(data.accessories)}
                                                {data.accessories.length>0?
                                                data.accessories[0][0]>0?
                                                    <>
                                                    <h6>Accessories | Quantity:</h6>
                                                    <div className="col-md-10"></div>
                                                    {Object.entries(data.accessories[0]).map(((accessory, index) => (
                                                        accessory[1][0]>0?
                                                        <ul className="list-group" key={index}>
                                                            <li className="list-group-item list-group-item-dark" style={cartStyles.accDetail}>{accessory[0] + ": " + accessory[1][1]}  
                                                                <span className="badge badge-dark badge-pill" style={cartStyles.accQuantity} > Qty: {accessory[1][0]}</span>  
                                                            </li>
                                                        </ul>
                                                        :null
                                                    )))}
                                                    </>
                                                :null
                                                :null}
                                            </div>

                                            <div className="col-md-1"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-4">
                                                    <button onClick={editCart} className="btn btn-outline-secondary" type="button" style={cartStyles.cartBtnLg} name={data.model}><i className="far fa-edit"></i> Edit</button>
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
                            <button onClick={() => finalizeItems()} type="submit" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width: "100%"}}>Request Quote</button>
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
                    :null}

                </div>



                <div className="col-md-1"></div>

            </div>

        </div>
    )
}

export default Cart
