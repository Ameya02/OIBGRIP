import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../action/userAction"
import loglogo from "../../assets/login.png"
 

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch();
  const registerHandle = () => {
    if(password!==cpassword){
      alert("Password do not match");
    }
    else{
      const user = {email,password,cpassword};
      dispatch(registerUser(user));
    }
  }
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  return (
    <div className='item-center flex justify-center text-center font-sans'>
        <div className='w-[30em] h-[37em] mb:w-[27em] mb:h-[40em] flex justify-center item-center mt-[5px]
        relative z-[90]'>
        <div className='flex justify-center items-center bg-white shadow-md shadow-[rgba(15,15,15,0.2)]
        rounded-sm relative z-[99] w-full h-full pt-[9px] pr-[10px]'>
    <div className='w-full flex flex-col items-center'>
    <div className='w-full flex flex-col items-center text-[24px] font-sans'>Register</div>
    <div className='flex flex-col '>
      <div className=' flex flex-col w-[200px] h-[30px] pl-[20px]'>
      <img src={loglogo} className=' flex flex-col w-screen h-screen' />
      </div>
      <div className='mt-[125px] flex flex-col items-center '>
       <div className='flex flex-col items-start w-fit'>
      <label className="text-[18px]"  htmlFor='email'>Email</label>
        <input type="text" name="email" placeholder="Email" className='mt-[6px] min-w-[18em] h-[37px] 
        pt-0 pr-[5px] text-[16px] font-sans bg-[#f3f3f3] border-0 rounded-[4px] mb-[31px] transition-all
         ease-in-out duration-[250ms] focus:outline-none focus:shadow-lg focus:shadow-[#0e81ce96] ' 
          onChange={(e)=>setEmail(e.target.value)}
         />
      </div>
      <div className='flex flex-col items-start w-fit'>
      <label className="text-[18px]"  htmlFor='password'>Password</label>
        <input type="password" name="password" placeholder="Password" className='mt-[6px] min-w-[18em] h-[37px] 
        pt-0 pr-[5px] text-[16px] font-sans bg-[#f3f3f3] border-0 rounded-[4px] mb-[31px] transition-all
         ease-in-out duration-[250ms] focus:outline-none focus:shadow-lg focus:shadow-[#0e81ce96] '
         onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className='flex flex-col items-start w-fit'>
      <label className="text-[18px]"  htmlFor='cpassword'>Confirm Password</label>
        <input type="password" name="cpassword" placeholder="Confirm Password" className='mt-[6px] min-w-[18em] h-[37px] 
        pt-0 pr-[5px] text-[16px] font-sans bg-[#f3f3f3] border-0 rounded-[4px] mb-[31px] transition-all
         ease-in-out duration-[250ms] focus:outline-none focus:shadow-lg focus:shadow-[#0e81ce96] '
         onChange={(e)=>setCpassword(e.target.value)} />
      </div>
    </div>
    </div>
    <div>
    </div>
    <div className='mt-2'>
      <button className="text-[16px] p-[5px] pr-[12px] pl-[12px] border-0 bg-[#3498db] text-white rounded-lg transition-all duration-300 ease-in-out
      cursor-pointer hover:bg-[#2386c8] focus:outline-none mb-6" type='button' onClick={registerHandle} >Register</button>
    </div>
    <p className='mb-3 mr-12'>Already have a account? <a className='cursor-pointer text-[red] hover:text-[grey]' onClick={routeChange}>click here</a></p>
    </div>
    </div>
    
        </div>
    </div>
  )
}

export default Reg