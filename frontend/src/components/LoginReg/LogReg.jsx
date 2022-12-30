import React, { useState } from 'react'
import Log from "./Log";
const LogReg = () => {
    // const [isLoggingActive, setIsLoggingActive] = useState(true)
  
  return (
    <div className='item-center flex justify-center text-center font-sans'>
        <div className='w-[30em] h-[40em] mb:w-[27em] mb:h-[40em] flex justify-center item-center mt-[5px]
        relative z-[99]'>
        <div className='flex justify-center items-center bg-white shadow-md shadow-[rgba(15,15,15,0.2)]
        rounded-sm relative z-[99] w-full h-full pt-[17px] pr-[10px]'>
        <Log />
        </div>
        </div>
    </div>
  )
}

export default LogReg;