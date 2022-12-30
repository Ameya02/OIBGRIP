import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const PizzaSlideOver = ({slide,pizza,setSlide}) => {
  const dispatch = useDispatch();
  const [crust, setCrust] = useState({Name:"",Price:0})
  const [sauce,setSauce]= useState({Name:"",Price:0})
  const [cheese, setCheese] = useState({Name:"",Price:0});
  const [vegToppins, setVegToppins] = useState({Name:[],Quantity:0});
  const [nonvegToppins, setNonvegToppins] = useState({Name:[],Quantity:0});
    
  
   const customized = [{
    size:[
      "Small",
      "Medium",
      "Large"
    ],
    crust:["Thick","Thin","WholeWheat","Pan","ChesseBurst"],
    sauce:["Regular","Chilly","Pesto","BBQ","Ranch"],
    cheese:["Mozzarella","Cheddar","Ricotta"],

   }]
  const  toppings=[{
    veg:["tomato","onion","capsicum","peppronni"],
    nonveg:["grilled chicken","bbq chicken","periperichicken"]
    
  }]
  const prices =[{
    crust:[{
      Thick:0,
      Thin:100,
      WholeWheat:120,
      Pan:135,
      CheeseBurst:180
    }],
    sauce:[{
      Regular:0,
      Chilly:70,
      Pesto:120,
      BBQ:150,
      Ranch:110
    }],
    cheese:[{
      Mozzarella:0,
      Cheddar:200,
      Ricota:180
    }]
  }]

  const customCartHandler =() => {
    dispatch
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
  <div id="slideover-container" className={`w-screen h-screen fixed inset-0 ${slide ? '':" invisible"} `}>
    <div  id="slideover-bg" className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${slide?'opacity-70':"opacity-0"}`}></div>
    <div  id="slideover" className={`w-[600px] bg-white h-full absolute right-0 duration-300 ease-out transition-all ${slide?"":" translate-x-full"}`}>
        <div className="absolute cursor-pointer text-[#fff] bg-black top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={()=> setSlide(false)} ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <div className='flex flex-col'>
          <img src={pizza.image} className="w-screen h-68" />
          {pizza.description}
        </div>
        <div>
          {pizza.name}
        </div>
        <div>
          <h2>Select Size</h2>
          <div>
          {customized.map(custom => (
            custom.size.map(size =>(
          <button
                  type="radio"
                  className='border-green-900 px-10 mx-10 h-8 focus:text-red-900  cursor-pointer'>
                  {size}
                  </button>))))}
                  </div>
        </div>
        <div>
          <h2>Select Base</h2>
          <div>
          {customized.map(custom => (
            custom.crust.map(crust =>(
          
          <button
                  type="radio"
                  className='border border-[green] border-double px-10 mx-10 h-8  focus:text-red-900 focus:bg-gray-600  cursor-pointer'>
                  {crust}
                  </button>))))}
                  </div>
          <h2>Select Sauce</h2>
          <div className=''>
          {customized.map(custom => (
            custom.sauce.map(sauce =>(
          <button
                  type="button"
                  className='border border-[green] border-double px-10 mx-10 h-8  focus:text-red-900 focus:bg-gray-600  cursor-pointer'>
                  {sauce}
                  </button>))))}
                  </div>
                  <h2>Select Cheese</h2>
                  <div>
          {customized.map(custom => (
            custom.cheese.map(cheese =>(
          <button
                  type="button"
                  className='border border-[green] border-double px-10 mx-10 h-8  focus:text-red-900 focus:bg-gray-600  cursor-pointer'>
                  {cheese}
                  </button>))))}
                  </div>
          
          <h2>Select Topping</h2>
          <h3>Veg Topping @ 50 RS each/-</h3>
          {toppings.map(topping => (
            topping.veg.map(veg =>(
          <button
                  type="button"
                  className='border border-[green] border-double px-10 mx-10 h-8  focus:text-red-900 focus:bg-gray-600  cursor-pointer'>
                  {veg}
                  </button>))))}
                  <h3>Veg Topping @ 50 RS/-</h3>
          {toppings.map(topping => (
            topping.nonveg.map(nonveg =>(
          <button
                  type="button"
                  className=' border border-[green] border-double px-10 mx-10 h-8  focus:text-red-900 focus:bg-gray-600 cursor-pointer'>
                  {nonveg}
                  </button>))))}

          
                  <div>
            <button className='bg-[green] font-medium rounded-md sticky' onClick={customCartHandler}>Add to Cart</button>
          </div>
        </div>
        
    </div>
  </div>
</div>
  )
}

export default PizzaSlideOver;