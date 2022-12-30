import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders,orderStatus } from '../../../action/orderAction';

const OrdersList = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(state => state.getOrderReducer);
  const {orders} = orderState;
    useEffect(() => {
    dispatch(getOrders())
  }, [dispatch]);

  const [status, setStatus] = useState("");

return (
  <div>  
<div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
              <div className="bg-white ml-[170px] shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                      <thead>
                          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Order ID</th>
                              <th className="py-3 px-6 text-left">Email ID</th>
                              <th className="py-3 px-6 text-center">Quantity</th>
                              <th className="py-3 px-6 text-center">Amount</th>
                              <th className="py-3 px-6 text-center">Status</th>
                          </tr>
                      </thead>
                      {orders.map(order => (
                      <tbody className="text-gray-600 text-sm font-light">
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                  <div className="flex items-center">
                                      
                                      <span className="font-medium">{order._id}</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                      </div>
                                      <span>{order.email}</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex items-center justify-center">
                                  <span className="font-medium">{order.orderItems.length}</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                              <span className="font-medium">{order.orderAmount}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                  <select value={order.status} onChange={(e)=>{dispatch(orderStatus(e.target.value,order._id))}}>
                                    <option value="Placed">Placed</option>
                                    <option value="In Kitchen">In Kitchen</option>
                                    <option value="Out for Delivery">Out for Delivery</option>
                                    <option value="Delivered">Delivered</option>
                                  </select>
                                  </div>
                              </td>
                          </tr>
                       </tbody>
                       ))}
                  </table>
              </div>
          </div>
      </div>
  </div>
  </div>
)
}

export default OrdersList