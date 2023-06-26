import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../Context/UserContext";
// About
import Account from "./Images/Account.png";
import Careers from "./Images/Careers.png";
import Cart from "./Images/Cart.png";
import Contact from "./Images/Contact.jpg";
import Customers from "./Images/Customers.png";
import FAQs from "./Images/FAQs.png";
import Partners from "./Images/Partners.png";
import Testimonials from "./Images/Testimonials.png";
import Search from "./Images/Search.png";

const GenJumbo = () => {

    const { userData } = useContext(UserContext);
    const pageName = window.location.href.split("/")[3]

    const [background, setBackground] = useState();
    const [title, setTitle] = useState();
    const [text, setText] = useState();

    useEffect(() => {
        const assignJumbotronData = () => {
            if (pageName==="Account") {
                setBackground(Account) 
                setTitle("Account") 
                setText(`Welcome back ${userData.user?.first + " " + userData.user?.last}`)
            } else if (pageName==="Careers") {
                setBackground(Careers) 
                setTitle("Careers") 
                setText("Highland always wants to meet people with a talent and passion for electronic design. If you're interested in analog circuit and PCB design, low noise signal conditioning, high-speed time-domain electronics, free-space and fiber photonics, signals-and-systems, filtering, control, analog and DSP crunching, interfacing with physics, semiconductor fabrication, or scientific instrumentation for aerospace and industrial applications, we'd love to hear from you.")
            } else if (pageName==="Cart") {
                setBackground(Cart) 
                setTitle("Quote Request") 
                setText("Please review items in cart and submit quote request below.")
            } else if (pageName==="Contact") {
                setBackground(Contact) 
                setTitle("Contact Us") 
                setText("")
            } else if (pageName==="Customers") {
                setBackground(Customers) 
                setTitle("Customers") 
                setText("Highland Technology has over 1000 customers in more than 40 countries worldwide. Industries served include: Aerospace & Defense, Photonic, Scientific, Semiconductor, and Industrial/Energy. Some customers and their applications are highlighted below.")
            } else if (pageName==="FAQ") {
                setBackground(FAQs) 
                setTitle("Frequently Asked Questions") 
                setText('We are here to help! Browse general FAQs below or feel free to contact us with your questions. Frequently asked questions pertaining to specific products can be found in the "Technical FAQs" section on individual product pages.')
            } else if (pageName==="Partners") {
                setBackground(Partners) 
                setTitle("Partners") 
                setText("Highland Technology partners with the below companies to expand customer reach and support.")
            } else if (pageName==="Testimonials") {
                setBackground(Testimonials) 
                setTitle("Testimonials") 
                setText("Highland prioritizes customer relationships by developing a thorough understanding of client applications, providing direct engineering support, and investing in long term availability of products. See what our customers have to say.")
            } else if (pageName.substring(0,6)==="Search") {
                setBackground(Search) 
                setTitle("Search Results") 
                setText("")
            }  
        };
        assignJumbotronData();
    }, [pageName, userData])

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 heroContainer img-fluid" style={{backgroundImage: `url(${background})`}}>
                <h1 className="heroHeading">{title}</h1>
                {text!==""?
                    <div className="heroBody">
                        <h5 className="heroText">{text}</h5>
                    </div>
                :null}
            </div>
        </div>
    )
}

export default GenJumbo
