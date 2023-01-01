import {useNavigate } from 'react-router-dom'
import pizza from "../../assets/pizza2.jpg"
import Navbar from '../NavBar/Nav'
import "./home.css"

const Home = () => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `login`; 
    navigate(path);
  }
  
  return (
    <div id='home' className="h-full w-full bg-cover" style={{background:`linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${pizza})`, overflow:'hidden'}}>
    <Navbar trans={true}/>
      <div className=' max-h-full w-screen p-0 pr-14 h-[calc(100vh-80px)]'>
      <div className="hero_div flex flex-col justify-center items-start h-screen max-h-full p-0 pr-8 w-[650px]
       text-white uppercase leading-tight font-bold">
      <h1 className='home_h1 mb-4 spacing' style={{fontSize:"clamp(2.5rem, 10vw, 5rem)",boxShadow:"3px 5px #e9ba23",letterSpacing:"1"}}>Greatest Pizza Ever!</h1>
      <p className=' home_p mb-8' style={{fontSize:"clamp(2rem,2.5vw,3rem)"}}>Ready in 20 minutes</p>
      <button className='p-2.5 pr-10 border-none text-black ease-out duration-75 rounded-full bg-[#e31837] hover:bg-yellow-600'
      onClick={routeChange}
      >
      Place Order
      </button>


      </div>
      
     
      </div>
    </div>
  )
}

export default Home
