import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className={"authModal-component bg-black h-full w-screen top-0 z-20 absolute bg-opacity-60"}>
      <div className="flex items-center justify-center h-screen sticky top-0">
        <div className="modal bg-white w-44 h-44 rounded px-8 py-6">
          <div className="flex flex-col w-full h-full justify-center items-center ">
            <AiOutlineLoading3Quarters className="text-7xl font-bold text-purple-600 animate-spin mb-4" />
            <p className="text-xl font-bold">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
