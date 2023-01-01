import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../../action/userAction';


import logo from '../../assets/lapizza.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const links = [
  { name: 'Home', to: '/'},
  { name: 'About Us', to: '/about-us' },
  { name: 'Menu', to: '/menu' },
  { name: 'Awards', to: '/awards'},
  { name: 'Contact Us', to: '/contact-us'},
];
const Navbar = ({trans}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.loginUserReducer);
  const {currentUser} = user;
  return (
    <nav className={`navbar w-screen h-[5.5rem] flex justify-between items-center ${trans?"bg-transparent": "bg-[#F4490E]"}  pt-4 pr-8`}>
      <div className="logo flex flex-start items-center">
        <img src={logo} alt="app__logo" className='w-[150px]' />
      </div>
      
      <ul className="links flex-1 flex justify-center items-center font-[30px] text-white list-none">
        
          {links.map((item) => (
            <li className="p__opensans">
    <NavLink 
    key={item.name}
    to={item.to}
    className="flex flex-row justify-start items-center my-8 
    font-medium text-md  text-white hover:text-gray-400"
    onClick={() => handleClick && handleClick()}
    >
      {item.name}
    </NavLink>
    </li>
  ))} 
        
      </ul>
      
      { currentUser ? (
        <div className='justify-end items-center relative inline-block hover:block'> 
        
        <NavDropdown title={currentUser.name} id="nav-dropdown" className=' text-md text-white hover:text-gray-400' >
        <NavDropdown.Item href="/orders">Order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={()=> {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
      </NavDropdown>
        </div>
      
      )
      : (
        <div className="login text-md  text-white hover:text-red-400 flex justify-end items-center">
        <a href="login" className="p__opensans">Log In / Registration</a>
        </div>
      )
      }
    
      <div className="smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="smallscreen_links">
            {links.map((item) => (
            <li className="p__opensans">
    <NavLink 
    key={item.name}
    to={item.to}
    className="flex flex-row justify-start items-center my-8 text-md
    font-medium  text-white hover:text-gray-400"
    onClick={() => handleClick && handleClick()}
    >
      {item.name}
    </NavLink>
    </li>
  ))} 
        
            </ul>
          </div>
        )}
      </div>
     
    </nav>
  );
};

export default Navbar;
