"use client"
import React, { useState } from 'react'
import Search from './Search'
import Column from './Column'
import { cardDetails } from '../utils/Data'
import { columns } from '../utils/Data'
const Board = () => {
 const [cards, setCards] = useState([...cardDetails])
  return (
    <div className='px-4 py-6 max-w-full'>
        <Search />
        <div className='flex  gap-3 overflow-auto '>
        {
            columns.map((col, index) => (
                <Column {...col} cards={cards} setCards={setCards} />
            ))
        }
       </div>
    </div>
  )
}

export default Board