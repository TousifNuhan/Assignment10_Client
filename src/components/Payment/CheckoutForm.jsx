import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const CheckoutForm = ({ data }) => {

    const { _id, countryName, spotName, averageCost, description, location, photoURL, seasonality, totalVisitors, travelTime } = data

    const [clientSecret, setClientSecret] = useState('')
    const [transactionID, setTransactionID] = useState('')
    const [showModal,setShowModal]=useState(false)
    const { user } = useContext(AuthContext)

    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()

    const price = { price: averageCost }

    useEffect(() => {
        fetch('http://localhost:5000/create-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(price)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
            })
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error)
            setError(error.message)
        }

        else {
            console.log("paymentMethod", paymentMethod)
            setError('')
        }

        // Confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email
                }
            }
        })

        if (confirmError) {
            console.log(confirmError)
            setError(confirmError.message)
        }
        else {
            console.log( paymentIntent.id)
            if(paymentIntent.status === 'succeeded'){
                setTransactionID(paymentIntent.id)
                const payment = {
                    name: user.displayName,
                    email: user.email,
                    transactionID:paymentIntent.id,
                    date: new Date(),
                    price: paymentIntent.amount,
                }
                fetch('http://localhost:5000/payments', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(payment)
    
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.acknowledged)
                        setShowModal(true)
                    })
            }

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="mt-5 mb-6"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" disabled={!stripe || !clientSecret || !elements} className="flex items-center text-white px-7 bg-[#6d28d2] py-2 rounded-sm hover:bg-[#651dd1] cursor-pointer">
                    <FaLock className="text-base mr-2" />
                    <p className="text-base font-bold mr-1 justify-center cursor-pointer">Pay</p>
                    <p className="text-base font-bold">${averageCost}</p>
                </button>

                <p className="text-sm text-red-700 pt-3">{error}</p>

            </form>
            {showModal && <div>
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Payment Successful!</h3>
                        <p className="py-4">Your trip has been booked successfully. Get ready for an unforgettable experience!</p>
                        <div className="modal-action">
                            <button className=" btn btn-error btn-outline" onClick={()=>setShowModal(false)}>Close</button>
                           <Link to="/invoice" state={{
                            transactionID:transactionID,
                            data:data
                           }}><button className="btn btn-info btn-outline" >View Invoice</button></Link>
                        </div>
                    </div>
                </dialog>
            </div>}
        </div>
    );
};

export default CheckoutForm;