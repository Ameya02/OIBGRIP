import React, { useEffect } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

const SubNav = () => {
    
    const links = [
        { name: 'Pizzas', to: '/menu'},
        { name: 'Custom Pizzas', to: '/menu' },
       
      ];
      const cartState =useSelector(state => state.cartReducer);
      const cartItems = cartState.cartItems;
      const TotaTArray = cartItems.map((cartItem) =>(
        [cartItem.quantity]
      ))

  return (
<nav className="navbar w-screen h-[2.5rem] flex justify-between items-center bg-[blue] pt-0.5 pr-8">
      <ul className="links flex-1 flex justify-center items-center list-none hover:border-b-rose-700">
        
          {links.map((item) => (
            <li className="p__opensans">
    <HashLink 
    key={item.name}
    smooth to={item.to}
    className="flex flex-row justify-start items-center my-8 text-sm
    font-medium  text-cyan-400 hover:text-gray-400 hover:border-b-rose-700"
    onClick={() => handleClick && handleClick()}
    >
      {item.name}
    </HashLink>
    </li>
  ))} 
        
      </ul>
      <a href='/cart' className='font-medium flex justify-end text-gray-700 pr-10'><GiShoppingCart /> {TotaTArray.length}</a>
      </nav>  )
}

export default SubNav