import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../action/orderAction';
import Navbar from '../NavBar/Nav';
import "./SingleOrder.css"


const SingleOrder = () => {
    const {status,orderid} = useParams();
    console.log(useParams);
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.getOrderReducer);
const {orders} = orderState;

      useEffect(() => {
      dispatch(getOrders())

    }, [dispatch]);
    if(orders){
        
        useEffect(() => {
           
       async function init() {
   
        
          if(status==="Placed")
          {
              document.getElementById("Placed").classList.add("current");
          }
          else if(status==="In Kitchen") 
          { 
              document.getElementById("Placed").classList.add("step-completed");
              document.getElementById("kitchen").classList.add("current");
          }
          if(status==="Out for Delivery")
          {
              document.getElementById("Placed").classList.add("step-completed");
              document.getElementById("kitchen").classList.add("step-completed");
              document.getElementById("delivery").classList.add("current");
          }
          else if(status==="Delivered")
          { 
              document.getElementById("Placed").classList.add("step-completed");
              document.getElementById("kitchen").classList.add("step-completed");
              document.getElementById("delivery").classList.add("step-completed");
              document.getElementById("completed").classList.add("step-completed");
    
          }
        }
            init()

        }, [])
    }

    
  return (
    <div>
    <Navbar/>
    <section className="status">
    <div className="container mx-auto">
        <div className="status-box w-full lg:w-2/3 mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-xl font-bold">Track delivery status</h1>
                <h6 className="bg-white py-1 rounded-full px-4 text-green-600 text-xs">{orderid}</h6>
            </div>
            <ul>
                <li id="Placed" className="status_line text-sm md:text-xl pb-16" value="Placed"><span>Order Placed</span>
                </li>
                <li id="kitchen" className="status_line text-sm md:text-xl pb-16" ><span>In Kitchen</span></li>
                <li id="delivery" className="status_line text-sm md:text-xl pb-16" ><span>Out for delivery </span>
                </li>
                <li id="completed" className="status_line text-sm md:text-xl" ><span>Completed</span></li>
            </ul>
        </div>
    </div>
</section>
</div>
  )
}

export default SingleOrder