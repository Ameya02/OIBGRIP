import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../action/orderAction';

const CardComponent = ({clientSecret,address,TotalPrice}) => {
  const dispatch = useDispatch()

  const confirmPayment = async (e) => {
    e.preventDefault();
    await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
       dispatch(placeOrder(address,TotalPrice+50))
      })
      .catch((err) => console.warn(err));
  };
    const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };
    const elements = useElements();
    const  stripe = useStripe();
  
  return (
    <>
    <CardElement options={{ hidePostalCode: true }} style={cardStyle}/>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"  onClick={confirmPayment}>Pay {TotalPrice+50} Rs/-</button>
    </div>
    </>
  )
}

export default CardComponent;