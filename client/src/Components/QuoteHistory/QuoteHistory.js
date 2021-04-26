import React, { useState } from 'react';
import axios from "axios";

const QuoteHistory = () => {
    const [form, setForm] = useState({
        date: "",
        quoteNum: "",
        products: "",
    });

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const submitQuote = async (e) => {
        e.preventDefault();
        // console.log("form data: ", form);
        const authToken = localStorage.getItem("auth-token");
        // console.log("token: ", authToken);

        try {
            const newQuote = await axios.post("/quotes", form, { headers: {"x-auth-token": authToken} });
            console.log(newQuote);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h3>Quote History</h3>
            <form onSubmit={submitQuote}>
                <input onChange={onChange} type="text" name = "date" />
                <input onChange={onChange} type="text" name = "quoteNumber" />
                <input onChange={onChange} type="text" name = "products" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default QuoteHistory
