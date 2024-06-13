import React from "react";
import {
  MdCropSquare,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";

const Sent = () => {
    const emails = useSelector(store=>store.app.emails)
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        
          {emails && emails?.map((email)=>{
            return<><motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
          > <div className="flex items-center gap-3">
            <div className="flex-none text-gray-300">
              <MdCropSquare className="w-5 h-5" />
            </div>
            <div className="flex-none text-gray-300">
              <RiStarLine className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-semibold">{`To:${email?.recipients}`}</h1>
            </div>
          </div>
          <div className="flex-1 ml-20">
            <p className="text-gray-600 truncate inline-block max-w-full">
              {email?.message}
            </p>
          </div>
          <div className="flex-none text-gray-400 text-sm">
            <p>{new Date(email?.createdAt?.seconds*1000).toUTCString()}</p>
          </div>
          </motion.div>
          </>
          
          })}  
          
        
      </div>
    </div>
  );
};

export default Sent;
