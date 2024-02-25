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
}: props) => {

    const { handleDragOver, handleDragLeave, handleDrop, handleDragStart, activeColumn} = useDragAndDrop(setCards, cards, column, title);

    let filteredCards = cards.filter((card: any) => card.column === column)


  return (
    <div 
    onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
    className={`flex-grow shrink-0 relative min-w-[308px] bg-[#FAFBFC] flex-basis-[33.333%] h-[100vh] overflow-scroll rounded-md border border-solid  ${headingColor}`}>

      <div className={` w-full z-[99]  sticky left-0 top-0 gap-2 flex rounded-t p-2 py-4 h-[16px]  ${backgroundColor} items-center`}>
      <Image src={icon} alt={title} width={16} height={16} />
        <h3 className={`font-semibold ${textColor} text-[12px] leading-[16px]`}>{`${title.toUpperCase()} • ${filteredCards.length} `}</h3>
       
      </div>
      <div
        
        className={` w-full transition-colors ${
          activeColumn ? "gray-200" : ""
        }`}
      >
        {filteredCards.map((c: React.JSX.IntrinsicAttributes & EachCard) => {
          return <KanbanCard key={c.id} {...c} handleDragStart={handleDragStart}/>;
        })}
        <div
        data-before={-1}
        data-col={column}
        className="my-0.5 z-1 h-5 min-w-full z-1 opacity-0"
      ></div>
      </div>
    </div>
  );
};

export default Column;
