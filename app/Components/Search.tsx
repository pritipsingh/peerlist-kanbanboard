"use client"
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
const Search = () => {
    const [active, setActive] = useState<boolean>(false)

    console.log(active)
  return (
    <div className={`${active ? "border border-solid border-green-600 rounded-md" : "rounded-md"} w-full mb-2 h-10 p-2 flex gap-2 items-center text-[14px] font-normal leading-[20px]`}>
        <IoSearchSharp />
        <input placeholder='search ' onBlur={() => setActive(false)} onFocus={() => setActive(true)} className='w-full h-full p-3 border-none focus:outline-none'/>

    </div>
  )
}

export default Search