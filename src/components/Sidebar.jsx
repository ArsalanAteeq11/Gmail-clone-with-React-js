import React, { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater,MdOutlineDrafts,MdOutlineKeyboardArrowDown,MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
    {
        icon: <MdInbox size={"20px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={"20px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"20px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={"20px"} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
        text: "More"
    },
]

const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickHandler = (item)=>{
       item.text === "Sent" ? navigate("/sent"): navigate("/")
    }
  return (
    <div className='w-[15%]'>
         <div className='p-3'>
            <button onClick={()=>dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
                <LuPencil size={"24px"} />
                Compose
            </button>
        </div>
        <div className='text-gray-500'>
            {sidebarItems.map((item,index)=>{
                {console.log(item)}
                return(
                    <div key={index} onClick={()=>clickHandler(item)}  className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2 '>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar