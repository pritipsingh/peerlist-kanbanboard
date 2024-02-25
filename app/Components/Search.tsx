"use client"
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { EachCard } from '../utils/Data';
const Search = ({cards, searchCards, setSearchCard}: any) => {
    const [active, setActive] = useState<boolean>(false)

    const handleChange = (value:string) => {
      if (value.length <= 0 || !value){
        return setSearchCard(cards);
      }
        
    const filteredCards : EachCard[] = cards.filter((card: EachCard) => ( card.name.toLowerCase().includes(value.toLowerCase()) ||  card.description?.toLowerCase().includes(value.toLowerCase()) || card.email?.toLowerCase().includes(value.toLowerCase()) || card.phone?.toLowerCase().includes(value.toLowerCase())))
        
    setSearchCard(filteredCards)
    }

    console.log(active)
  return (
    <div className={`${active ? "border border-solid border-green-600 rounded-md" : "rounded-md"} w-full mb-2 h-10 p-2 flex gap-2 items-center text-[14px] font-normal leading-[20px]`}>
        <IoSearchSharp />
        <input placeholder='search ' onChange={(e) => handleChange(e.target.value)} onBlur={() => setActive(false)} onFocus={() => setActive(true)} className='w-full h-full p-3 border-none focus:outline-none'/>

    </div>
  )
}

export default Search