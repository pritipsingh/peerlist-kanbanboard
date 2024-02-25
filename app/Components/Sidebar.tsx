"use client"
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSession } from "../hooks/useSession";
import { motion } from "framer-motion";
const SidebarData = [
  {
    logo: "/Sidebar/scroll.svg",
    title: "Scroll",
  },
  {
    logo: "/Sidebar/projects.svg",
    title: "Projects",
  },
  {
    logo: "/Sidebar/Inbox.svg",
    title: "Inbox",
  },
  {
    logo: "/Sidebar/jobs.svg",
    title: "Projects",
  },
  {
    logo: "/Sidebar/search.svg",
    title: "Search",
  },
  {
    logo: "/Sidebar/network.svg",
    title: "My Network",
  },
];

const Sidebar = () => {

  const {user} = useSession()
  return (
    <nav className="lg:ml-6 lg:w-63 lg:max-w-full lg:w-auto w-full lg:h-full z-[99]  p-4 fixed lg:top-0 bottom-0 bg-white">
      <div className="flex flex-col h-full relative">
        <div className="pb-8 hidden lg:flex">
          <Image
            src={"/Logos/fulllogo.svg"}
            width={124}
            height={32}
            alt={"Peerlist Logo"}
          />
        </div>
        <div>

       
        <div className="flex lg:flex-col lg:mt-[4vh] gap-y-6 lg:overflow-y-auto hide-scrollbar">
          {SidebarData.map((data, index) => (
            <a key={index} className="flex cursor-pointer gap-2 w-[100%]">
              <span className="relative">
              <Image src={data.logo} alt={data.title} width={24} height={24}></Image>
              {
              data.title === "Inbox" && <div className=" absolute bg-[#00AA45] top-0 right-0 w-2 h-2 rounded-full">
      
                 </div>
            }
            </span>
              <motion.p 

              whileHover={{x: "4px" }}
              className="hidden lg:flex">{data.title}</motion.p>
              

            </a>
            
          ))}
        </div>
        <div className="mt-[7vh] lg:flex gap-2 w-[100%] hidden ">
        <Image src={user.image} alt={"Priti's Profile Pic"} width={24} height={24} className="rounded-full object-contain" />
              <p>{user.name}</p>
        </div> 
        <div className="mt-[3vh] lg:flex hidden gap-2 w-[100%] flex-wrap  ">
        <Image src={"/Sidebar/loom.svg"} alt={"Priti's Profile Pic"} width={24} height={24} className="rounded-full object-contain"  />
              <div className="flex flex-col flex-wrap ">
                <h3>Loom</h3>
                <p className="text-[#0D0D0D] text-[10px] max-w-full text-wrap font-normal">Manage jobs, teams, & more →</p>
              </div>
        </div>

 </div>
       
        <div className="pb-4 hidden lg:flex mt-[5vh] lg:absolute bottom-0 gap-2 max-w-[100%]">
        
              <div className="flex flex-col text-wrap">
                <h3 className="text-[#0D0D0D] cursor-pointer text-[10px] max-w-full  font-medium flex w-full text-wrap" style={{wordBreak: "break-all" }}>Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C</h3>
                <p className="text-[#44D56] text-[10px] font-normal ">© 2023 Peerlist Inc.</p>
              </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
