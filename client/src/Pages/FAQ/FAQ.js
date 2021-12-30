import React from 'react';
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const FAQ = () => {

    const FAQStyles = {
        faqHeader: {
            textAlign: "center",
            color: "#0042CF",
            marginTop: "3%"
        }
    }

    const salesFAQs = [
        [
            "OneSales", 
            "How do I obtain pricing information?", 
            "The easiest way to obtain pricing is to click the Request Quote button for the applicable product(s) on our website. Users must be registered to access this feature. To receive a quote without registering on our website, send an email to sales@highlandtechnology.com with the products and quantities needed."
        ],
        [
            "TwoSales", 
            "How can I place a purchase order?", 
            "Purchase orders can be sent to sales@highlandtechnology.com. If a purchase order cannot be submitted, Highland will provide a Purchase Request Form to capture the basic required information for the order/delivery."
        ],
        [
            "ThreeSales", 
            "What are Highland's Terms and Conditions of sales?", 
            "Highland's Terms and Conditions of sale can be downloaded here."
        ]
    ]

    const shipFAQs = [
        [
            "OneShip", 
            "What are Highland’s shipping terms?", 
            "Our shipping terms are EXWorks San Francisco. We can bill for the freight charges, or we can ship on the buyer’s collect account. We will use the customer’s preferred carrier and method whenever specified. If there is no preferred carrier, our default carrier is UPS."
        ],
        [
            "TwoShip", 
            "Is Highland able to provide estimated shipping costs for an order?", 
            "Yes, once a destination address is provided, we can calculate the estimated shipping charges. Unless otherwise specified, all estimated shipping charges include insurance."
        ],
        [
            "ThreeShip", 
            "What is the country of origin for Highland products?", 
            "100% of our product manufacturing is done in the United States, a vast majority of which we do at our facility in San Francisco, CA."
        ],
        [
            "FourShip", 
            "Does Highland pay for export or customs fees?", 
            "No. All freight, duties and/or export tariffs are to be paid by the customer."
        ],
        [
            "FiveShip", 
            "What is Highland’s Harmonized System (HS)/Tariff code?", 
            "HS Code for new products: 8543.70.9655. HS Code for RMAs: 9801.10.0000."
        ],
        [
            "SixShip", 
            "Can all Highland products be exported?", 
            "All sales are subject to U.S. Department of Commerce Export Regulations. Highland will collect an End User Statement for all international sales in order to ensure that product export to the destination country is permitted. Each End User Statement requires disclosure of the Ultimate and Intermediate Consignees, and agreement to comply with export laws of the United States. A copy of the End User Statement form can be downloaded here. Highland reserves the right to deny export for any reason."
        ],
    ]

    const payFAQs = [
        [
            "OnePay", 
            "What types of payment do you accept?", 
            "We accept payment via check, bank transfer, and credit card payments. A 3% processing fee is added to all credit card orders over $9,000. Net 30 terms are available after credit approval."
        ],
        [
            "TwoPay", 
            "If I choose prepayment, where do I find instructions to make a payment?", 
            "After a PO is processed, our accounting department will send a proforma invoice that will include payment information."
        ],
        [
            "ThreePay", 
            "How can I apply for Net 30 payment terms?", 
            "For Net 30, we ask that the customer fill out and return a credit application. It typically takes a week to verify payment history, so prepayment or credit card is recommended if expedited delivery is requested. The credit application can be downloaded here."
        ],
        [
            "FourPay", 
            "How can I make a payment using my credit card? Can I call and give my credit card information over the phone?", 
            "Customers with Net 30 payment terms who choose to pay with a credit card will be invoiced within 24 hours following ship date. Prepay customers must submit payment before shipment is released. A credit card invoice will be sent when the order is ready to ship. All credit card invoices are sent from quickbooks@notification.intuit.com. Please check spam and firewall settings if invoices are not promptly received. For security purposes, Highland does not process credit card payments over the phone."
        ],
        [
            "FivePay", 
            "Is there a limit to what I can charge on my credit card?", 
            "A 3% processing fee is added to all orders over $9,000."
        ],
    ]

    const leadFAQs = [
        [
            "OneLead", 
            "What is the lead time of your products?", 
            "The lead times vary depending on product and quantity, and are provided on all price quotations. Lead times generally range from 12 to 30 calendar days ARO."
        ],
        [
            "TwoLead", 
            "Can you expedite an order?", 
            "Yes, we can almost always expedite upon request. We recommend adding a note to the PO with the desired delivery date and we will make our best effort to meet the requested delivery date."
        ],
    ]

    const warrantyFAQs = [
        [
            "OneWarranty", 
            "What is the standard warranty of Highland products?", 
            "Our standard warranty is 12 months from the date that we ship a product. "
        ],
        [
            "TwoWarranty", 
            "Can I extend the warranty of a product?", 
            "We typically don't recommend extending the warranty because the additional cost to extend far exceeds the risk that the part will fail. If a warranty extension is required, the cost will be 10% of the purchase price to extend one year."
        ],
    ]

    const mnfFAQs = [
        [
            "OneMnf", 
            "Where are Highland products manufactured?", 
            "Highland manufactures 95% of it's own products in its San Francisco, CA facility. A select few products are manuactured by carefully selected, domestic, contract manufacturers. All products are 100% tested and inspected at our San Francisco facility prior to delivery."
        ],
        [
            "TwoMnf", 
            "Are raw components/materials also manufactured in the US?", 
            "We source resistor/IC level components from qualified distributors based in the United States. As much as possible, larger materials such as circuit boards and metal housing are sourced from suppliers fabricating in the greater Bay Area and United States."    
        ],
    ]
    
    const FAQs = [
        ["Sales FAQS", salesFAQs], 
        ["Shipping & Export FAQS", shipFAQs],
        ["Payment FAQS", payFAQs],
        ["Lead Time FAQs", leadFAQs],
        ["Warranty FAQs", warrantyFAQs],
        ["Manufacturing FAQs", mnfFAQs],
    ]


    return (
        <div>
            <CategoryJumbotron title={"Frequently Asked Questions"}/>

            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-10">
                    {FAQs?
                    FAQs.map((faq, idx) => (
                        <div key={idx}>
                            <h2 style={FAQStyles.faqHeader}>{faq[0]}</h2>
                            <div className="accordion" id="accordionExample">
                            {faq[1].map((qa, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header" id={"heading"+qa[0]}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+qa[0]} aria-expanded="true" aria-controls={"collapse"+qa[0]}>
                                            {qa[1]}
                                        </button>
                                    </h2>
                                    <div id={"collapse"+qa[0]} className="accordion-collapse collapse" aria-labelledby={"heading"+qa[0]} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {qa[2]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))
                    :null}
                </div>    
                <div className = "col-md-1"></div>
            </div>

        </div>
    )
}

export default FAQ
