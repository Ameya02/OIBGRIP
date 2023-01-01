import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../NavBar/Nav'
import OrdersList from './pages/OrdersList';

const AdminPanel = () => {
    const dispatch = useDispatch();
  const user = useSelector((state)=>state.loginUserReducer);
  const {currentUser} = user;
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
  <div className="fixed flex flex-col top-27 left-0 w-64 bg-white min-h-full border-r">
    <div className="flex items-center justify-center h-14 border-b">
      <div>{currentUser.name}</div>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
          </div>
        </li>
        <li>
          <a href="/admin" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Orders</span>
          </a>
        </li>
        <li>
          <a href="/admin/users" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Users</span>
          </a>
        </li>
        <li>
          <a href="/admin/pizza" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Pizza</span>
          </a>
        </li>
    </ul>
    </div>
  </div>
</div>
    <div>
        <div className="overflow-x-auto flex flex-col ">
        <OrdersList />

        </div>
    </div>
    </div>
  )
}

export default AdminPanel