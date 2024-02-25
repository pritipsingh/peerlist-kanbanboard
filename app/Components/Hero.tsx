import React from 'react'
import Header from './Header'
import Board from './Board'


const Hero = () => {
  return (
    <div className="lg:ml-64 w-[100%] pr-4">
        <div className='border-r border-l border-solid border-gray-200 max-w-[100%] h-full text-[#0D0D0D]'>
            <Header />
            <Board />
        </div>
        
      </div>
  )
}

export default Hero