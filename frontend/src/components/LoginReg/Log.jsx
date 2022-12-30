import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loglogo from "../../assets/login.png";
import {useDispatch,useSelector} from "react-redux";
import { loginUser } from '../../action/userAction';


const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginState = useSelector((state) =>state.loginUserReducer)
  const {currentUser} = loginState
  useEffect(() => {
    const user = localStorage.getItem('currentUser')
    if(user) {
      if(currentUser.isAdmin){
      window.location.href="/admin";
    }
  else{
    window.location.href="/";
  }}


  
    
  }, [])

  const loginHandle = () => {
    const user = {email, password}
    dispatch(loginUser(user))
  }
  
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

  return (
    <div className='item-center flex justify-center text-center font-sans'>
        <div className='w-[30em] h-[37em] mb:w-[27em] mb:h-[40em] flex justify-center item-center mt-[5px]
        relative z-[99]'>
        <div className='flex justify-center items-center bg-white shadow-md shadow-[rgba(15,15,15,0.2)]
        rounded-sm relative z-[99] w-full h-full pt-[9px] pr-[10px]'>
    <div className='w-full flex flex-col items-center'>
    <div className='w-full flex flex-col items-center text-[24px] font-sans'>Login</div>
    <div className='flex flex-col '>
      <div className=' flex flex-col w-[200px] h-[30px] pl-[20px]'>
      <img src={loglogo} className=' flex flex-col w-screen h-screen' />
      </div>
      <div className='mt-[160px] flex flex-col items-center '>
      <div className='flex flex-col items-start w-fit'>
      <label className="text-[20px]" htmlFor='email'>Email</label>
        <input type="email" name="email" placeholder="Email" className='mt-[6px] min-w-[18em] h-[37px] 
        pt-0 pr-[5px] text-[16px] font-sans bg-[#f3f3f3] border-0 rounded-[4px] mb-[31px] transition-all
         ease-in-out duration-[250ms] focus:outline-none focus:shadow-lg focus:shadow-[#0e81ce96] '
          onChange={(e) => setEmail(e.target.value)} value={email}
         />
      </div>
      <div className='flex flex-col items-start w-fit'>
      <label className="text-[20px]" htmlFor='password'>Password</label>
        <input type="password" name="password" placeholder="Password" className='mt-[6px] min-w-[18em] h-[37px] 
        pt-0 pr-[5px] text-[16px] font-sans bg-[#f3f3f3] border-0 rounded-[4px] mb-[31px] transition-all
         ease-in-out duration-[250ms] focus:outline-none focus:shadow-lg focus:shadow-[#0e81ce96] '
          onChange={(e) => setPassword(e.target.value)} value={password}
         />
      </div>
    </div>
    </div>
    
    <div className='mt-4'>
      <button className="text-[16px] p-[5px] pr-[12px] pl-[12px] border-0 bg-[#3498db] text-white rounded-lg transition-all duration-300 ease-in-out
      cursor-pointer hover:bg-[#2386c8] focus:outline-none mb-6" type='button' onClick={loginHandle} >Login</button>
    </div>
    <div>
      <p className='mr-12'>Not register? <a className='cursor-pointer text-[red] hover:text-[grey]' onClick={routeChange}>click here</a></p>
    </div>
    </div>
    </div>
        </div>
    </div>
    
  )
}

export default Log;