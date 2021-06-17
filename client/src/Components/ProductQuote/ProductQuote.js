import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";


const ProductQuote = ({ props }) => {

    const quoteStyles = {
        rightAlign: {
            float: "right",
            width: "20%",
            marginTop: "10px",
        },
        qtyInput: {
            width: "20%",
        },
        title: {
            marginBottom: "60px",
            marginTop: "10px",
        },
        header: {
            marginTop: "30px",
            textDecoration: "underline",
        },
        accessoryDesc: {
            width: "80%",
        }
    }

    const { userData } = useContext(UserContext);
    const history = useHistory();
    const [quantity, setQuantity] = useState({quantity: 0});
    const [cart, setCart] = useState({
        model: "",
        quantity: "",
    });

    const [products] = useState([
        {
            optionsA: [
                {
                    optionType: "wavelength",
                    optionMessage: "Please select wavelength"
                },
                {             
                    name: "850",
                    description: "850 nm",
                    default: "checked",
                },
                {             
                    name: "1310",
                    description: "1310 nm",
                    default: "",
                },
                {             
                    name: "1550",
                    description: "1550 nm",
                    default: "",
                },
            ],
            connectors: [
                {             
                    name: "ST",
                    description: "ST connectorization",
                    default: true,
                },
                {             
                    name: "FC",
                    description: "FC connectorization",
                    default: false,
                },
            ],
            accessories: [
                {             
                    name: "J12-1",
                    description: "Extra 12 volt power supply",
                },
                {
                    name: "J41-1",
                    description: "3' SMB to SMB cable",
                }, 
                {
                    name: "J41-2",
                    description: '6" SMB to SMB cable',
                },
                {
                    name: "J42-1",
                    description: "3' SMB to SMA cable",
                }, 
                {
                    name: "J53-1",
                    description: "3' SMB to BNC cable",
                },
                {
                    name: "J53-2",
                    description: '6" SMB to BNC cable',
                }, 
                {
                    name: "J59-1",
                    description: "3' ST to ST fiberoptic cable (multi mode simplex)",
                },
                {
                    name: "J60-1",
                    description: "3' FC to FC fiberoptic cable (single mode simplex)",
                }, 
                {
                    name: "J61-1",
                    description: "3' ST to ST fiberoptic cable (single mode simplex)",
                },    
                ],
        },    
    ]);

    const selectQuantity = (e) => {
        setCart({...cart, quantity: e.target.value});
        console.log(cart);
    }

    const addToCart = (e) => {
        setCart({...cart, model: e.target.name, quantity: quantity});
        console.log(cart);
    };
 

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
    }, [userData.user, history])



    return (
        <div>

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">
                
                <div className="row">

                    <div className="col-md-1"></div>

                    
                    <div className="col-md-10">

                        <div style={quoteStyles.title}>

                            <form>
                                {props?
                                    <h5>{props.data[0].model} {props.data[0].name} (add standard accessories?)</h5>
                                :null}

                                {props.data[0].optionsRequired.length>0?
                                    props.data[0].optionsRequired[0].map((required, idx) => (
                                        <div>
                                        <h6 key={idx}>{required.description}</h6>
                                        {props.data[0].optionsRequired[1].map((options, idx) => (
                                            <p>{options.options}</p>
                                        ))}
                                        </div>
                                    ))
                                :null}

                                {products.map((product, index) =>(
                                <div key={index}>    
                              
                                    <div>
                                        <input onChange={selectQuantity} type="number" min="0" className="form-control" placeholder="Quantity" style={quoteStyles.rightAlign}/>
                                    </div>
                                    <h6 style={quoteStyles.header}>Wavelength Options</h6>  
                  
                                    {products.map((product) => 
                                    product.optionsA.map((optionA) =>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={optionA.name} checked={optionA.default}/>
                                        <label className="form-check-label" >
                                            {optionA.description}
                                        </label>
                                    </div>
                                    ))}

                                    <h6 style={quoteStyles.header}>Connector Options</h6>
                                    {products.map((product) => 
                                    product.connectors.map((connector) =>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={connector.name} checked={connector.default}/>
                                        <label className="form-check-label" >
                                            {connector.description}
                                        </label>
                                    </div>
                                    ))}

                                    <h6 style={quoteStyles.header}>Accessories</h6>
                                    {products.map((product) => 
                                    product.accessories.map((accessory) =>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" style={quoteStyles.accessoryDesc}>{accessory.description}</span>
                                        <input type="number" min="0" class="form-control" placeholder="Quantity" style={quoteStyles.qtyInput}/>
                                    </div>
                                    ))}

                                    <button onClick={addToCart} style={quoteStyles.rightAlign} type="button" class="btn btn-danger" name={product.model}>Add to Cart</button>
                                </div>
                                ))}
                            </form>
                            
                        </div>       

                    </div>


                </div>


            </div>
            
        </div>

    )
}

export default ProductQuote
