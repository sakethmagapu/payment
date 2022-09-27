const express = require("express");
const shortid = require("shortid");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();



// Intitializing razorpay credentials

var razorpay = new Razorpay({
    key_id:"rzp_test_SBgOFlrZLKHqwR",
    key_secret:"qTt0GgaXW0iabTMaG6T5uEFt"
});

app.use(cors('*'));

app.post("/razorpay", async (req,res)=>{
    const payment_capture = 1;
    const amount = 5;
    const currency = "INR";

    const options = {
    amount: amount * 100,  // amount in the smallest currency unit
    currency: currency,
    receipt: shortid.generate(),
    payment_capture
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
            id : response.id,
            currency : res.currency,
            amount : res.amount
        });
     }
    catch (eror){
            console.log(error);
     };
});



  
app.listen(8000, ()=>{
    console.log("server is running..")
})