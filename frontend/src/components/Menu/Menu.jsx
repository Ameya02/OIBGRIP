import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Nav'
import SubNav from './SubNav'
import "./Menu.css"
import PizzaCard from './PizzaCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../action/pizzaAction'
import Header from './Header'
import { useStateContext } from '../../context/ContextProvider'
const Menu = () => {
 


  const dispatch = useDispatch();
  const pizzaState = useSelector(state => state.getAllPizzaReducer)
  const {loading, pizzas, error} = pizzaState;

  
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])
  
  return (

    
    <div>
        <Navbar />
        <SubNav />
        <div  className={`table clear-both content-none w-screen h-screen ${rightslide ? "":"overflow-x-hidden "}`}>
        
        {loading ? (
        <h1>Loading...</h1>
       ): error ? ( 
        <h1>Error while fetching pizzas</h1>
       ):(
        
             <div id="main" className={`${rightslide ? "":" overflow-y-hidden "} float-left flex flex-wrap sm:justify-start justify-center gap-8`}>
             <Header title="PIZZAS" id="All"  className="mt-4 "/>
             <div className='float-left flex flex-wrap sm:justify-start justify-center gap-8'>
             {
        pizzas.map(pizza => (
          <PizzaCard
          pizza = {pizza}
           />
        ))
      }
      </div>
          </div>
        
        )}
        
        </div>
       
    </div>
  )
}

export default Menu;