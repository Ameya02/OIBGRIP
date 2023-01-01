import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../../action/cartAction';

import Navbar from '../NavBar/Nav';
const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/checkout`; 
    navigate(path,{
      total:TotalPrice
    });
  }
  var TotalPrice = 0
    var TotalItems = 0
  const cartState =useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems;
  console.log(cartItems)
  if(cartItems.length>0){
  const TItems = cartItems.map((cartItem) =>(
    [cartItem.quantity]
  
  ))
  TotalItems = TItems.reduce((acc, cartItem) => parseInt(acc)+parseInt(cartItem))
  const TPrice = cartItems.map((cartItem) =>(
  [cartItem.price]
  
  ))
  TotalPrice = TPrice.reduce((acc, cartItem) => parseInt(acc)+parseInt(cartItem))
  }
  
    

  return (

    <div>
    <Navbar/>
  <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Pizza Cart</h1>
          <h2 className="font-semibold text-2xl"></h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Pizza Details</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {cartItems.map(item => (
          <>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
       
           
            <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={item.image} alt={item.name} />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.name}</span>
              <span className="mb-0.5 font-thin text-xs">[{item.varient}]</span>
              <a href="#" className="font-semibold hover:text-red-900 text-red-500 text-xs" onClick={()=> {
                dispatch(deleteFromCart(item))
              }}>Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current cursor-pointer hover:text-red-900 text-red-600 w-3" viewBox="0 0 448 512" onClick={() => {
              dispatch(addToCart(item,item.quantity-1,item.varient))}}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <span className="text-center w-1/5 font-semibold text-sm">{item.quantity}</span>


            <svg className="fill-current cursor-pointer hover:text-green-800 text-green-600 w-3" viewBox="0 0 448 512" onClick={()=>{
              dispatch(addToCart(item,item.quantity+1,item.varient))
            }} >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{item.prices[0][item.varient]}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{item.price}</span>
          
      
           </div>
            
      
        <a href="/menu" className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
        </>
     
     ))}
      </div>
   
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">{TotalItems} Items</span>
          <span className="font-semibold text-sm">{TotalPrice} Rs/-</span>
        </div>
        <div>
        <span className="font-semibold text-sm">Delivery 50 Rs/-</span>
        </div>
        
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{TotalPrice>0?TotalPrice+50:0} Rs /</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        onClick={routeChange}>CheckOut</button>
        </div>
      </div>

    </div>
  </div>
  </div>

  )
}

export default CartScreen