"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className='px-4  py-10 max-w-[100vw] min-h-[11rem] border-b bg-gray-50 border-solid border-gray-200'>
    <div className='flex flex-col lg:flex-row justify-between w-full h-full'>
        <div className='flex gap-2'>
            <div>

           
            
                <Image src={"/Logos/logo.svg"} alt={"Peerlist logo"} width={62} height={62}  />
           </div>
            
            <div className='flex flex-col flex-wrap h-full justify-between items-start'>
                <div>
                <p className='lg:text-[1.2rem] text-[0.9rem]  flex gap-2 items-center leading-[24px] font-medium '>Software Engineer, Front End <FaChevronDown /></p>
                <p className='lg:text-[0.875rem] text-[0.6rem]  leading-[20px] font-normal'>at Peerlist • Full time • Remote (United States, Canada)</p>
                </div>
                <div className='flex gap-x-6 mt-[5vh] text-[0.6rem] '>
                    <p className='lg:text-[0.875rem] leading-[16px] font-normal'><span className='font-semibold'>78</span>{" "}Candidates</p>
                    <p className='lg:text-[0.875rem] leading-[16px] font-normal'><span className='font-semibold'>768</span>{" "}Applied w/ Peerlist</p>
                    <p className='lg:text-[0.875rem] leading-[16px] font-normal'><span className='font-semibold'>2872</span>{" "}Views</p>

                </div>
            </div>
        </div>
        <div className='flex flex-col lg:mt-0 lg:gap-0 mt-[3vh] gap-3 flex-wrap  justify-between items-end'>
            <div className='flex gap-2'>
                <Link href= {"/"} >
                <Image src={"/Icons/edit.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />

                </Link>
                <Link href= {"/"} >
                <Image src={"/Icons/menu.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />

                </Link>
                <Link href= {"/"} >
                <Image src={"/Icons/send.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />
  
                </Link>
                <Link href= {"/"} >
                <Image src={"/Icons/share.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />
 
                </Link>
            </div>
            <div className='lg:text-[10px] text-[8px]  leading-[14px] font-normal flex items-center text-gray-500'>
                Posted<span className='font-semibold px-1'>1d ago</span>by 
                <span className='font-semibold flex px-1 items-center'>
                <Image src={"/Faces/face1.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />
                {' '}Akash Bhadange
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header