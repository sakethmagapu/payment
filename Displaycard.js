import React from 'react';
import Displayrazorpay from './PaymentGateway'

const Displaycard = () => {
  return (
    <div>
        <center>
            <h1>
                Razorpay Payment Gateway Integration 
            </h1>
            <br></br>
            <button type="button" id="rzp-button1" onClick={Displayrazorpay}>
                Pay with Razorpay
            </button>


        </center>
    </div>
  )
}

export default Displaycard