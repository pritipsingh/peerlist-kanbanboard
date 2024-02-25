"use client"
import React, { useState } from "react";
import Image from "next/image";
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
    const [active,setActive] = useState(false);


    let filteredCards = cards.filter((card: any) => card.column === column)


  return (
    <div className={`flex-grow flex-shrink  bg-[#FAFBFC] flex-basis-[33.333%] min-w-[225px] h-[50vh] overflow-scroll rounded-md border border-solid  ${headingColor}`}>

      <div className={` w-full gap-2 flex rounded-t p-2 py-4 h-[16px]  ${backgroundColor} items-center`}>
      <Image src={icon} alt={title} width={16} height={16} />
        <h3 className={`font-semibold ${textColor} text-[12px] leading-[16px]`}>{`${title.toUpperCase()} • ${filteredCards.length} `}</h3>
       
      </div>
      <div
        // onDrop={handleDragEnd}
        // onDragOver={handleDragOver}
        // onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "gray-200" : ""
        }`}
      >
        {/* {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} /> */}
      </div>
    </div>
  );
};

export default Column;
