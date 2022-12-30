import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {placeOrder} from "../../action/orderAction";
const CheckoutForm = () => {
  let card = null;
  
  useEffect( () => {
     async function initStripe () {
    const stripe_client = await loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
    let style = {
      base: {
        width: "100%",
        padding:"0.5rem",
        paddingBottom:"0.5rem",
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",
        color:"rgb(75 85 99)",
        backgroundColor:"rgb(229 231 235)",
        borderRadius:"0.25rem"

      }
    }
    const elements = stripe_client.elements();
    card = elements.create('card',{style,hidePostalCode:true});
    card.mount("#card-element")
    }
  initStripe()
  return (
      [card]
  )
  },)
  
  const dispatch = useDispatch();
  const cartState =useSelector(state => state.cartReducer);
  const loginState =useSelector(state => state.loginUserReducer);
  const loginUser = loginState.currentUser;
  const cartItems = cartState.cartItems;
  const TPrice = cartItems.map((cartItem) =>(
      [cartItem.price]
      
      ))
        const TotalPrice = TPrice.reduce((acc, cartItem) => parseInt(acc)+parseInt(cartItem))
        const [name, setName] = useState(loginUser.name)
        const [email,setEmail] = useState(loginUser.email)
        const [address_line, setAddress_line] = useState("")
        const [city, setCity] = useState("")
        const [country, setCountry] = useState("India")
        const [zip, setZip] = useState("India")
  const handleCheckout = (e) => {
    const stripe_client = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
        e.preventDefault()
        const address = {address_line,city,country,zip}
        const token = stripe_client.createToken(card)
        dispatch(placeOrder(token,address,TotalPrice))

  }
  return (
    <div className="min-h-screen p-4 bg-gray-200 leading-loose">
  <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
    <p className="text-gray-800 font-medium">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-600" htmlFor="cus_name">Name</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" required="" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"   type="text" required="" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_address">Address</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"   type="text" required="" placeholder="Street" onChange={(e) => setAddress_line(e.target.value)} />
    </div>
    <div className="mt-2">
      <label className="text-sm block text-gray-600" htmlFor="cus_city">City</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  type="text" required="" placeholder="City" onChange={(e) => setCity(e.target.value)} />
    </div>
    <div className="inline-block mt-2 w-1/2 pr-1">
      <label className="block text-sm text-gray-600" htmlFor="cus_country">Country</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  type="text" required="" placeholder="Country" onChange={(e) => setCountry(e.target.value)} value={country} />
    </div>
    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label className="block text-sm text-gray-600" htmlFor="cus_zip">Zip</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  name="cus_zip" type="number" required="" placeholder="Zip" onChange={(e) => setZip(e.target.value)} />
    </div>
    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
    <div className="" id='card-element'>
      <label className="block text-sm text-gray-600" htmlFor="cus_card">Card</label>
      </div>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"  onClick={handleCheckout}>Pay {TotalPrice} Rs/-</button>
    </div>
  </form>
</div>

  )
}

export default CheckoutForm