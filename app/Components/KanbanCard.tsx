"use client"
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import {  EachCardPage } from "../utils/Data";
import { motion } from "framer-motion";
import { useSession } from "../hooks/useSession";
const KanbanCard = (props: EachCardPage) => {
    const {user} = useSession()

    const dragVariants = {
        drag: { scale: 1.1 },
      };
  return (
    <>
     <div
        data-before={props.id || "-1"}
        data-col={props.column}
        className="my-0.5 z-1 h-0.5 min-w-full z-1 opacity-0"
      ></div>
    <motion.div 
    layout
    layoutId={props.id}
    draggable="true"
    onDragStart={(e) => props.handleDragStart(e, { props })}
    initial={{
      y: (JSON.parse(props.id) + 1) * 5,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      type: "just",
    }}
    whileTap={{
      rotate: -6,
      scale: 0.8,
    }}
    whileFocus={{
      rotate: -12,
      scale:  0.8,

    }}
    whileHover={{
      rotate: -6,
      scale:  0.9,
    }}
    whileDrag={{
      y: 0,
    }}
    variants={dragVariants}
    className="max-w-[400px] cursor-grab focus:cursor-grabbing shrink-0 text-[#0D0D0D] text-wrap m-2 bg-white rounded-md p-3 border border-solid border-gray-100">
      <div className=" w-full relative ">
        <div className="flex flex-col gap-1">
         {!props.external && <Image
            src={props.image as any}
            alt={"Profile pics of the potential candidate"}
            width={32}
            height={32}
            className="rounded-full object-contain"
          />}
          <div className="flex gap-1 items-center">
            <h2 className="font-semibold text-[14px] leading-[20px]">
              {props.name}{" "}
            </h2>
            {props.verified && (
              <Image
                src={"/Icons/verified.svg"}
                alt={"Profile pics of the potential candidate"}
                width={16}
                height={16}
                className="rounded-full object-contain"
              />
            )}
          </div>
                {
                    !props.external && <p className="font-normal text-[12px] leading-[16px]">
                    {props.description}
                  </p>
                }
          
          { props.column === "rejected" &&
          <div className="text-gray-500 pt-1.5 font-normal text-[10px] leading-[14px] flex gap-1 items-center">
            <Image
              src={"/Icons/cross.svg"}
              alt={"Profile pics of the potential candidate"}
              width={12}
              height={12}
              className="rounded-full object-contain"
            />
            Rejected by
            <Image
              src={props.rejectedbyimg ? props.rejectedbyimg : user.image as any}
              alt={"Profile pics of the potential candidate"}
              width={16}
              height={16}
              className="rounded-full object-contain"
            />
            <span>{props.rejectedby ? props.rejectedby : user.name}</span>
            on
            <span>{props.rejectedon ? props.rejectedon : "25 Feb 2023" }</span>
          </div>
}
          {props.column !== "rejected" && <div className="flex gap-3 pt-2 items-center">
           {props.experience && <div className={`flex flex-col gap-1 ${props.external && "hidden"}`}>
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Experience
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {props.experience}
              </p>
            </div> }
            {props.offer && <div className={`flex flex-col gap-1 ${props.external && "hidden"}`}>
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Holding Offer?
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {props.offer ? "Yes" : "No"}
              </p>
            </div> }
            {props.external && props.resume && <div className="flex flex-col gap-1 items-start">
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Resume
              </p>
              <p className=" cursor-pointer  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {props.resume} <GoArrowUpRight />
              </p>
            </div>}
          {props.notice &&   <div className="flex flex-col gap-1">
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Notice Period
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {props.notice}
              </p>
            </div>}
          </div> }
        {((props.column === "applied" || props.column === "shortlisted") && !props.external && props.email && props.phone)&&  <div className="flex flex-col gap-1 pt-2">
            <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
              Contact
            </p>
            <p className="  font-semibold text-wrap text-[12px] leading-[16px]">
              {props.email}
            </p>
            <p className="  font-semibold text-wrap text-[12px] leading-[16px]">
              {props.phone}
            </p>
          </div>}

          { props.column === "shortlisted" &&
          <div className="text-gray-500 pt-1.5 font-normal text-[10px] leading-[14px] flex gap-1 items-center">
            <Image
              src={"/Icons/tick.svg"}
              alt={"Profile pics of the potential candidate"}
              width={12}
              height={12}
              className="rounded-full object-contain"
            />
            Shortlisted by
            <Image
              src={props.shortlistedbyImg ? props.shortlistedbyImg : user.image  as any}
              alt={"Profile pics of the potential candidate"}
              width={16}
              height={16}
              className="rounded-full object-contain"
            />
            <span className="font-semibold">{props.shortlistedby ? props.shortlistedby :  user.name}</span>
            on
            <span>{props.shortlistedon ? props.shortlistedon : "25 Feb 2023"}</span>
          </div>
}
        </div>
        <div className="text-gray-500 absolute top-0 right-0 p-1.5 font-normal text-[10px] leading-[14px] flex gap-1 ">
           {props.refby && <div className="flex items-start gap-1">
                Ref by
            <Image
              src={props.refImg as any}
              alt={"Profile pics of the potential candidate"}
              width={16}
              height={16}
              className="rounded-full object-contain"
            />
            <span className=" font-medium">{props.refby}</span>
            
            </div>}
            <div>

            </div>
        {props.applied &&  `Applied ${props.applied} ago`}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default KanbanCard;
