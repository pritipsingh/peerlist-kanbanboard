import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
  return (
    <nav className="w-64 h-full p-4 fixed top-0">
      <div className="flex flex-col justify-between h-full">
        <div className="pb-8">
          <Image
            src={"/Logos/fulllogo.svg"}
            width={124}
            height={32}
            alt={"Peerlist Logo"}
          />
        </div>
        <div>

       
        <div className="flex flex-col -mt-[8vh] gap-y-6 overflow-y-auto hide-scrollbard">
          {SidebarData.map((data, index) => (
            <div className="flex gap-2 w-[100%]">
              <Image src={data.logo} alt={data.title} width={24} height={24} />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-[7vh] flex gap-2 w-[100%] rounded-full ">
        <Image src={"/Faces/face1.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />
              <p>{"Priti"}</p>
        </div> 
        <div className="mt-[3vh] flex gap-2 w-[100%] flex-wrap rounded-full ">
        <Image src={"/Sidebar/loom.svg"} alt={"Priti's Profile Pic"} width={24} height={24} />
              <div className="flex flex-col flex-wrap ">
                <h3>Loom</h3>
                <p className="text-[#0D0D0D] text-[10px] max-w-full text-wrap font-normal">Manage jobs, teams, & more →</p>
              </div>
        </div>

 </div>
       
        <div className="pb-4 flex gap-2 max-w-[100%]">
        
              <div className="flex flex-col text-wrap">
                <h3 className="text-[#0D0D0D] text-[10px] max-w-full  font-medium flex w-full text-wrap" style={{wordBreak: "break-all" }}>Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C</h3>
                <p className="text-[#44D56] text-[10px] font-normal ">© 2023 Peerlist Inc.</p>
              </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
