import React from 'react';
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const FAQ = () => {
    return (
        <div>
            <CategoryJumbotron title={"Frequently Asked Questions"}/>

            <ul>
                <li>Sales</li>
                <li>Shipping &amp; Export</li>
                <li>Payment</li>
                <li>Lead Time</li>
                <li>Warranty</li>
                <li>Manufacturing</li>
            </ul>

            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-10">
                    <h2>Sales FAQs</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I place a purchase order?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What are Highland's Terms and Conditions of sales? 
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Highland's Terms and Conditions of sale can be downloaded here. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-md-1"></div>
            </div>

            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-10">
                    <h2>Shipping &amp; Export FAQs</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What are Highland’s shipping terms?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our shipping terms are EXWorks San Francisco. We can bill for the freight charges, or we can ship on the buyer’s collect account. We will use the customer’s preferred carrier and method whenever specified. If there is no preferred carrier, our default carrier is UPS.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is Highland able to provide estimated shipping costs for an order?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes, once a destination address is provided, we can calculate the estimated shipping charges. Unless otherwise specified, all estimated shipping charges include insurance. 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Does Highland pay for export or customs fees?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    No. All freight, duties and/or export tariffs are to be paid by the customer. 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is Highland’s Harmonized System (HS)/Tariff code?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>HS Code for new products: 8543.70.9655</p> 
                                    <p>HS Code for RMAs: 9801.10.0000</p>  
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can all Highland products be exported? 
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    All sales are subject to U.S. Department of Commerce Export Regulations.
                                    Highland will collect an End User Statement for all international sales in order to ensure that product export to the destination 
                                    country is permitted. Each End User Statement requires disclosure of the Ultimate and Intermediate Consignees, and 
                                    agreement to comply with export laws of the United States. A copy of the End User Statement form can 
                                    be downloaded here. Highland reserves the right to deny export for any reason.  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-md-1"></div>
            </div>

            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-10">                    
                <h2>Payment FAQs</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What types of payment do you accept?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We accept payment via check, bank transfer, and credit card payments. A 3% processing fee is added to all credit card orders over $9,000. 
                                    Net 30 terms are available after credit approval.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    If I choose prepayment, where do I find instructions to make a payment?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    After a PO is processed, our accounting department will send a proforma invoice that will include payment information.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I apply for Net 30 payment terms?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    For Net 30, we ask that the customer fill out and return a credit application. It typically takes a week to verify payment history, 
                                    so prepayment or credit card is recommended if expedited delivery is requested. The credit application can be downloaded here.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I make a payment using my credit card? Can I call and give my credit card information over the phone?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Customers with Net 30 payment terms who choose to pay with a credit card will be invoiced within 24 hours following ship date. 
                                    Prepay customers must submit payment before shipment is released. A credit card invoice will be sent when the order is ready to ship. 
                                    All credit card invoices are sent from quickbooks@notification.intuit.com. Please check spam and firewall settings if invoices are 
                                    not promptly received. For security purposes, Highland does not process credit card payments over the phone. 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is there a limit to what I can charge on my credit card? 
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    A 3% processing fee is added to all orders over $9,000.   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-md-1"></div>
            </div>


        </div>
    )
}

export default FAQ
