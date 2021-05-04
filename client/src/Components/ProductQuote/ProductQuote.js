import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";


const ProductQuote = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    const [products] = useState([
        {
            name: 'J730 single-channel compact fiberoptic-to-electrical converter (12 volt power supply included)',
            wavelengths: [
                {             
                    name: "850",
                    description: "850 nm",
                },
                {             
                    name: "1310",
                    description: "1310 nm",
                },
                {             
                    name: "1550",
                    description: "1550 nm",
                },
            ],
            connectors: [
                {             
                    name: "ST",
                    description: "ST connectorization",
                },
                {             
                    name: "FC",
                    description: "FC connectorization",
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
            // related: {
            //     relative_T124: "1 to 4 logic buffer",
            // }
    ]);

    useEffect(() => {
        if (!userData.user) history.push("/pages/login");
    }, [userData.user, history])



    return (
        <div>

            <h3 className="prod-header">Request Quote</h3>

            <div className="content-container">
                
                
                <div className="row">

                    <div className="col-md-2"></div>

                    
                    <div className="col-md-8">

                        {products.map((product)=>
                        <h5>{product.name}</h5>)}
                        <input type="number" min="0" className="form-control" placeholder="Enter Quantity" />

                        <h6>Wavelength Options</h6>
                        <ul>
                            {products.map((product) => 
                            product.wavelengths.map((wavelength) => 
                            <li>{wavelength.description}</li>))}
                        </ul>

                        <h6>Connector Options</h6>
                        <ul>
                            {products.map((product) => 
                            product.connectors.map((connector) => 
                            <li>{connector.description}</li>))}
                        </ul>

                        <h6>Accessories</h6>
                        <ul>
                            {products.map((product) => 
                            product.accessories.map((accessory) => 
                            <li>{accessory.name}: {accessory.description}</li>))}
                        </ul>

                    </div>

                    <div className="col-md-2"></div>

                </div>

                <div className="row">

                </div>

            </div>
            
        </div>

    )
}

export default ProductQuote
