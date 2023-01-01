import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../../action/cartAction';
import PizzaSlideOver from './PizzaSlideOver';


const PizzaCard = ({pizza}) => {
    const [varient, setVarient] = useState("small");
    const [quantity, setQuantity] = useState(0);
    const [slide,setSlide] = useState(false);
    const dispatch = useDispatch();
    const cartState =useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    useEffect(() => {
    }, [])
    
const addToCartHandler = () =>
{
    setQuantity((prev)=>++prev)
    dispatch(addToCart(pizza,quantity+1,varient))
    
}
const deleteFromCartHandler = () =>
{
    setQuantity((prev)=>--prev)
    if(quantity>1)
    {
    dispatch(addToCart(pizza,quantity-1,varient))
    }
    else{
      dispatch(addToCart(pizza,quantity-1,varient))
    }
    
}


  return (
    <>
   
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
  backdrop-blur-sm  animate-slideup rounded-lg'>
  <div className='relative w-full h-56 group'>
    <div className='absolute inset-0 justify-center items-center bg-black bg-opacity-50 
    group-hover:flex'>
    </div>
    <img  alt='pizza_img' src={pizza.image} className="w-full h-full" />
    <button className='absolute top-[82%] left-[58%] rounded-lg transform bg-[#555] text-white font-light px-2 '
    onClick={ () => setSlide(true)}>Customize</button>
  </div>
    <div className='mt-4 flex flex-col'>
      <p className='font-semibold text-lg text-white truncate'>
    {pizza.name}
          </p>
    <div className='flex'>
    <div className='float-left'>
    <h6 className='text-sm text-white pr-3 mb-2'>
        Select Varients:
    </h6>
    
    <select className='rounded-xl  px-5 py-2 text-sm  mb-2' value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
        {pizza.varients.map(varient=>(
            <option>{varient}</option>
        ))}
    </select>
    </div>
    <div className='text-sm text-white pl-3 float-right'>
            <h6>Price: {pizza.prices[0][varient]}</h6>
            <p></p>
    </div>
    </div>
      <p className=' text-sm truncate text-gray-300 mt-1'>
      
      </p>
      <div className={`${ quantity>=1 ? 'flex' : 'hidden' }`}>
      <button className=' bg-blue-500 rounded-md hover:shadow-lg ml-16 text-xl px-3 hover:shadow-blue-800' onClick={deleteFromCartHandler}>
        -
      </button>
      <p className='text-white px-5'>{quantity}</p>
      <button className=' bg-blue-500 rounded-md hover:shadow-lg text-xl mx-2 px-3 hover:shadow-blue-800' onClick={addToCartHandler}>
        +
      </button>
      </div>
      <div className={`${quantity==0 ? 'flex' : 'hidden' }`}>
      <button className=' bg-blue-500 rounded-md hover:shadow-lg mx-2 px-3 hover:shadow-blue-800' onClick={addToCartHandler}>
        Add to Cart
      </button>
      </div>
    </div>
  </div>

  <>
  {slide && <PizzaSlideOver slide={slide} pizza={pizza} setSlide={setSlide} />}
  </>
  </>
  )
}

export default PizzaCard;