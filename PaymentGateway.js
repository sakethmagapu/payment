export default async function Displayrazorpay() {
    const data = await fetch("http://localhost:8000/razorpay",{
        method:"POST",
    }).then((response) => response.json());

    console.log(data);

    const options = {
        key: "rzp_test_SBgOFlrZLKHqwR", 
    amount: data.amount,
    currency: data.currency,
    order_id: data.id,
    handler: function(response){
           console.log("Payment_ID : ", response.razorpay_payment_id);
           console.log("order_ID : " , response.razorpay_order_id);
           console.log("Signature : ", response.razorpay_signature)
        }
    };

    const paymentObject = window.Razorpay(options);
    paymentObject.open();

}
