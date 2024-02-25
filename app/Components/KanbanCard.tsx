import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const KanbanCard = ({
  column = "shortlisted",
  verified = true,
  external = false
  
}: {
  column: any;
  verified: boolean;
  external: boolean
}) => {
  return (
    <div className="w-[400px] text-[#0D0D0D] h-full p-3 border border-solid border-gray-100">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
         {!external && <Image
            src={"/Faces/face1.svg"}
            alt={"Profile pics of the potential candidate"}
            width={32}
            height={32}
            className="rounded-full object-contain"
          />}
          <div className="flex gap-1 items-center">
            <h2 className="font-semibold text-[14px] leading-[20px]">
              Darrel Steward{" "}
            </h2>
            {verified && (
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
                    !external && <p className="font-normal text-[12px] leading-[16px]">
                    Cloud Consultant at Rapid Circle
                  </p>
                }
          
          { column === "rejected" &&
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
              src={"/Faces/face1.svg"}
              alt={"Profile pics of the potential candidate"}
              width={16}
              height={16}
              className="rounded-full object-contain"
            />
            <span>{"Yogini Benda"}</span>
            on
            <span>{"15 Dec 2023"}</span>
          </div>
}
          {column !== "rejected" && <div className="flex gap-3 pt-2 items-center">
            <div className={`flex flex-col gap-1 ${external && "hidden"}`}>
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Experience
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {"11y 6m"}
              </p>
            </div> 
            <div className={`flex flex-col gap-1 ${external && "hidden"}`}>
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Holding Offer?
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {"Yes"}
              </p>
            </div> 
            {external && <div className="flex flex-col gap-1">
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Resume
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {"DarrelResume.pdf"} <GoArrowUpRight />
              </p>
            </div>}
            <div className="flex flex-col gap-1">
              <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
                Notice Period
              </p>
              <p className="  font-semibold text-[12px] leading-[16px] flex gap-1 items-center">
                {"Immediately"}
              </p>
            </div>
          </div> }
          { column === "shortlisted" &&
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
              src={"/Faces/face1.svg"}
              alt={"Profile pics of the potential candidate"}
              width={16}
              height={16}
              className="rounded-full object-contain"
            />
            <span>{"Yogini Benda"}</span>
            on
            <span>{"15 Dec 2023"}</span>
          </div>
}
        {(column === "applied" && !external )&&  <div className="flex flex-col gap-1">
            <p className="text-gray-500  font-normal text-[10px] leading-[14px]">
              Contact
            </p>
            <p className="  font-semibold text-[12px] leading-[16px]">
              {"priti@gmail.com"}
            </p>
            <p className="  font-semibold text-[12px] leading-[16px]">
              {"+91 9167575418"}
            </p>
          </div>}
        </div>
        <div className="text-gray-500 font-normal text-[10px] leading-[14px]">
          Applied 1d ago
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
