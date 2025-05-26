import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const Payment = () => {

    const data = useLoaderData()

    const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)
    return (
        <div className="mt-10 mb-14">
            <div className="w-1/2 mx-auto">
                <div className=" mb-5">
                    <h3 className="text-[#2a2b3f] text-2xl font-semibold  my-2">Checkout</h3>
                </div>
                <h4 className="text-[#2a2b3f] text-xl font-medium mb-5">Payment Method</h4>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;