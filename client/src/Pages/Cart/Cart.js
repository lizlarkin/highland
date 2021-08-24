import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const Cart = () => {

    const history = useHistory();

    const { userData } = useContext(UserContext);

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
            console.log("save quote", saveQuote);
            history.push("/pages/account");
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
            <CategoryJumbotron title={"Cart"} text={"Please review items and submit quote request below."}/>
            
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
                                                    :null}
                                                    {": "}
                                                    {data.name}
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
                                                {data.required.length>0?
                                                    <>
                                                    <h6>Product Configuration:</h6>
                                                    {Object.entries(data.required[0]).sort().map(((config, index) => (
                                                        config[1]?
                                                        <div className="input-group mb-3" key={index}>
                                                            <input type="text" className="form-control" placeholder={config[1][0] +" "+ config[0].toLowerCase()} style={cartStyles.accDesc} disabled/>                                                     
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
                                                {data.optional.length>0?
                                                    <>
                                                    <h6>Additional Features:</h6>
                                                    {data.optional.map(((option, index) => (
                                                        option[2]?
                                                        <div className="input-group mb-3" key={index}>
                                                            <input type="text" className="form-control" placeholder={option[0]} style={cartStyles.accDesc} disabled/>                                                     
                                                        </div>
                                                        :"none"
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
                                                    <h6>Accessories | Quantity:</h6>
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
                            <button onClick={() => finalizeItems()} type="submit" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width: "100%"}}>Request Quote</button>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
