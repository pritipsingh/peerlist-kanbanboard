"use client"
import React, { useState } from 'react'
import Search from './Search'
import Column from './Column'
import { EachCard, cardDetails } from '../utils/Data'
import { columns } from '../utils/Data'
const Board = () => {
 const [cards, setCards] = useState<EachCard[]>([...cardDetails])

 const [searchCards, setSearchCard] = useState<EachCard[]>([...cardDetails])
  return (
    <div className='px-4 py-6 max-w-full'>
        <Search cards={cards} searchCards={searchCards} setSearchCard={setSearchCard}/>
        <div className='flex  gap-3 overflow-auto '>
        {
            columns.map((col, index) => (
                <Column {...col} searchCards={searchCards} cards={cards} setCards={setCards} />
            ))
        }
       </div>
    </div>
  )
}

export default Board