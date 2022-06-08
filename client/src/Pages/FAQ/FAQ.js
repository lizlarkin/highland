import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';
import TCs from './Terms & Conditions of Sale.pdf';
import EUS from './End User Statement.pdf';
import CreditApp from './Highland Credit Application Form.pdf';


const FAQ = () => {

    const FAQStyles = {
        faqHeader: {
            textAlign: "center",
            color: "#0042CF",
            marginTop: "3%"
        },
        questionBtn: {
            backgroundColor: "#F2F2F2",
        }
    }

    const salesFAQs = [
        [
            "Where can I find pricing for your products?", 
            "The easiest way to obtain pricing is to click the Request Quote button for the applicable product(s) on our website. From there users can select from various product configurations and accessories. Users must be registered to access this feature. To receive a quote without registering on our website, please email the products and quantities needed to our sales department ",
            "mailto:sales@highlandtechnology.com"
        ],
        [
            "How can I place a purchase order?", 
            "Purchase orders can be emailed to our sales department ",
            "mailto:sales@highlandtechnology.com",
            " If a purchase order cannot be submitted, Highland will provide a Purchase Request Form to capture the basic required information for the order/delivery."
        ],
        [
            "What are Highland's standard Terms and Conditions of sales?", 
            "Highland's Terms and Conditions of sale can be downloaded ",
            TCs
        ],
        [
            "What is Highland's order cancellation policy?",
            "As many of our products are made to order/customized, orders cancelled after two weeks of the PO confirmation and/or within two weeks of the requested delivery date may incur a cancellation fee."
        ]
    ]

    const shipFAQs = [
        [
            "What is the country of origin for Highland products?", 
            "USA. 100% of our product manufacturing is done in the United States, a vast majority of which we do at our facility in San Francisco, CA."
        ],
        [
            "What are Highland’s shipping terms?", 
            "Our shipping terms are EXWorks San Francisco. We can bill for the freight charges, or we can ship on the buyer’s collect account. We will use our customer’s preferred carriers and methods whenever specified. If there is no preferred carrier, our default carrier is UPS."
        ],
        [
            "Is Highland able to provide estimated shipping costs for an order?", 
            "Yes, once a destination address is provided, we can calculate the estimated shipping charges. Unless otherwise specified, all estimated shipping charges include insurance."
        ],
        [
            "Does Highland pay for export or customs fees?", 
            "No. All freight, duties and/or export tariffs are to be paid by the customer."
        ],
        [ 
            "What is Highland’s Harmonized Tariff Schedule Code?", 
            "The HTS Code varies by product type and condition. The HTS Code specific to each product can be found on the individual product pages. Navigate to the Resources menu option > Compliance > Export & Classification Information."
        ],
        [ 
            "Can all Highland products be exported?", 
            "All sales are subject to U.S. Department of Commerce Export Regulations. Highland will collect an End User Statement for all international sales to ensure that product export to the destination country is permitted. Each End User Statement requires disclosure of the Ultimate and Intermediate Consignees, and agreement to comply with export laws of the United States. Highland reserves the right to deny export for any reason. A copy of the End User Statement form can be downloaded ",
            EUS
            
        ],
    ]

    const payFAQs = [
        [
            "What types of payment does Highland accept?", 
            "We accept payment via check, bank transfer, and credit card. A 3% processing fee is added to all credit card orders over $9,000."
        ],
        [
            "What are Highland's payment terms?",
            "Net 30 terms are available following credit approval. For customers without an established account, prepayments can be made via bank transfer."
        ],
        [
            "How can I apply for Net 30 payment terms?", 
            "To apply for a Net 30 account, we ask that customers fill out and return a credit application. It typically takes a week to verify payment history, so prepayment is recommended if expedited delivery is requested. The credit application can be downloaded ",
            CreditApp
        ],
        [ 
            "How does the prepayment process work?", 
            "After a PO is processed and any required export control documentation is received, our accounting department will send a proforma invoice that will include payment information."
        ],
        [
            "Where can I find instructions to make a payment?", 
            "Every invoice will include payment information. To request bank information, please email our accounting department ",
            "mailto:acctg@highlandtechnology.com"
        ],
        [
            "How can I make a payment using my credit card? Can I call and give my credit card information over the phone?", 
            "There is no need to provide us with your credit card information - we will email you an invoice with prompts that direct you to input the data yourself. All credit card invoices are sent from quickbooks@notification.intuit.com. Please check spam and firewall settings if invoices are not promptly received. For security purposes, Highland does not process credit card payments over the phone. Customers with Net 30 payment terms who choose to pay with a credit card will be invoiced approximately 24 hours following ship date. Prepayment customers must submit payment before shipment is released. In this case, a credit card invoice will be sent when the order is ready to ship. "
        ],
        [
            "Is there a limit to what I can charge on my credit card?", 
            "There is no limit to what can be charged to a credit card, but please note that there is a 3% processing fee for all orders over $9,000. Orders greater than $9,000 cannot be split to circumvent the fee."
        ],
    ]

    const leadFAQs = [
        [
            "What is the lead time of Highland products?", 
            "Lead times vary depending on product and quantity, and will be provided on all price quotations. Lead times generally range from 12 to 30 calendar days ARO."
        ],
        [ 
            "Can I expedite an order?", 
            "Yes, we can almost always expedite delivery upon request. We recommend adding a note to the PO with the desired delivery date, and though we cannot make guarantees less than the quoted lead time, we will make our best effort to meet your schedule."
        ],
        [
            "Is there a fee to expedite an order?",
            "No. We expedite orders free of charge, though customers may elect to pay for expedited shipping."
        ],
    ]

    const warrantyFAQs = [
        [
            "What is the standard warranty of Highland products?", 
            "Our standard warranty is 12 months from the date that we ship a product. Certain product warranty periods are longer than 12 months, as stated in the product specifications."
        ],
        [
            "Can I extend the warranty of a product?", 
            "Although warranty can be extended without limit, we typically don't recommend extending the warranty because the additional cost to extend far exceeds the risk that the part will fail. If a warranty extension is required, the cost will be 10% of the purchase price to extend one year."
        ],
    ]

    const mnfFAQs = [
        [
            "Where are Highland products manufactured?", 
            "We manufacture nearly all our own products in our San Francisco, CA facility. A select few products are partially manufactured by carefully vetted, domestic, contract manufacturers. All products are 100% tested and inspected at our San Francisco facility prior to delivery."
        ],
        [
            "Are raw components/materials used in Highland products also manufactured in the US?", 
            "We use local/domestic suppliers to the full extent that we are able. We source resistor/IC level components from qualified distributors based in the United States. Materials such as circuit boards and metal housing are sourced from suppliers fabricating in the greater Bay Area and United States as much as possible."    
        ],
    ]

    const technicalFAQs = [
        [
            "How can I get technical support?", 
            "Each product has a downloadable technical manual and technical FAQ section on our website. Most questions can be answered using those resources. For additional support, please use the form on our Contact page or email our engineering team ",
            "mailto:engineering@highlandtechnology.com"
        ],
        [
            "How can I return a product for calibration, repair, and upgrade?", 
            "Please contact our sales department to request an RMA number for the return of your product(s). The Contact page on our website has a selection specifically for initiating a return, or you may email our sales department ",
            "mailto:sales@highlandtechnology.com"
        ],
        [
            "How often do Highland products need to be calibrated? How does the calibration process work?", 
            "A recommended calibration interval is stated in the published specifications of each Highland product. Typically, products must be returned to the factory for calibration services. "
        ],
        [
            "How can I upgrade product firmware?", 
            "Please contact the factory if you need to install the latest firmware. Depending on the product, we can provide field upgradable software, ship plug-in flash chips, or have your product returned to the factory under warranty. Firmware upgrades are always free. When applicable, firmware history is listed at the end of each product technical manual.",
        ],
        [
            "Does Highland sell drop-in replacement products for Abaco, VMIC, GE, or other obsolete product lines from other companies?", 
            "We offer many comparable products to replace obsolete product lines, including some drop-in options. When we do not offer an exact model replacement, we are always happy to discuss your requirements to see if anything we carry could work for you or be designed to fulfill a requirement. We are particularly committed to the continued and long-term design and manufacturing of VME.  ",
        ],
        [
            "How does Highland manage component/material obsolescence and product End of Life?", 
            "Highland is committed to providing long-term availability of products and support through our long term lifecycle planning, component and spares management, and component end-of-life planning and stocking programs. Highland can make provisions to ensure product supply and full support throughout the life of your product or program. Highland will always support any Highland product, no matter how old, if physically possible.",
        ],
    ]
    
    const FAQs = [
        ["Sales FAQs", salesFAQs], 
        ["Shipping & Export FAQs", shipFAQs],
        ["Payment FAQs", payFAQs],
        ["Lead Time FAQs", leadFAQs],
        ["Warranty FAQs", warrantyFAQs],
        ["Manufacturing FAQs", mnfFAQs],
        ["Technical FAQs", technicalFAQs],
    ]


    return (
        <div>
            <div>
                <GenJumbo />
            </div>

            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-10">
                    {FAQs?
                    FAQs.map((faq, index) => (
                        <div key={index}>
                            <h2 style={FAQStyles.faqHeader}>{faq[0]}</h2>
                            <div className="accordion" id="accordionExample">
                            {faq[1].map((qa, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header" id={"heading"+index+idx}>
                                        <button style={FAQStyles.questionBtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index+idx} aria-expanded="true" aria-controls={"collapse"+index+idx}>
                                            {qa[0]}
                                        </button>
                                    </h2>
                                    <div id={"collapse"+index+idx} className="accordion-collapse collapse" aria-labelledby={"heading"+index+idx} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {qa[1]}
                                            {qa[2]?<a href={qa[2]} target="_blank" rel="noopener noreferrer">here.</a>:null}
                                            {qa[3]?qa[3]:null}
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
