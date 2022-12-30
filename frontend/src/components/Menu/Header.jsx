import React from 'react'

const Header = ({title}) => {
    
  return (
    <div className=''>
    <p className='text-xl font-semibold tracking-tight bg-white rounded-xl px-5 text-gray-500'>{title}</p>
  </div>  )
}

export default Header