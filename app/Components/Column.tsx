"use client"
import React, { useState } from "react";
import Image from "next/image";
import KanbanCard from "./KanbanCard";
import { EachCard } from "../utils/Data";
import { motion } from "framer-motion";
import { useDragAndDrop } from "../hooks/useDragandDrop";
type props = {
  headingColor: string;
  backgroundColor: string;
  title: string;
  textColor: string;
  column: string;
  icon: string;
  cards: any;
  setCards: any;
  searchCards: any
};

const Column = ({
  headingColor,
  backgroundColor,
  title,
  textColor,
  icon,
  column,
  cards,
  setCards,
  searchCards
}: props) => {

    const { handleDragOver, handleDragLeave, handleDrop, handleDragStart, activeColumn} = useDragAndDrop(setCards, cards, column, title);

 
    let filteredCards = searchCards.filter((card: EachCard) => card.column === column)


  return (
    <div 
    onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
    className={`flex-grow shrink-0 relative w-[306px] ${
        activeColumn ? "bg-stone-200" : "bg-[#FAFBFC]"
      }  h-[100vh] 
      transition-colors overflow-y-auto overflow-x-hidden rounded-md border border-solid  ${headingColor}`}>

      <div className={` w-full  sticky left-0 top-0 gap-2 flex rounded-t p-2 ${backgroundColor} items-center`}>
      <Image src={icon} alt={title} width={16} height={16} />
        <h3 className={`font-semibold ${textColor} text-[12px] leading-[16px]`}>{`${title.toUpperCase()} • ${filteredCards.length} `}</h3>
       
      </div>
     
        {filteredCards.map((c: React.JSX.IntrinsicAttributes & EachCard) => {
          return <KanbanCard key={c.id} {...c} handleDragStart={handleDragStart}/>;
        })}
        <div
        data-before={"-1"}
        data-col={column}
        className="my-0.5 h-7 min-w-full opacity-0"
      ></div>
      </div>
  
  );
};

export default Column;
