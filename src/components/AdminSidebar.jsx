import React from "react";

import { BsSpeedometer, BsFillHouseDoorFill, BsJournalBookmarkFill, BsPersonFill, BsPersonLinesFill } from "react-icons/bs";

const AdminSidebar = () => {
  return (
    <div className="flex h-full bg-purple-600 text-white">
      <div className="flex flex-col px-5 w-full">
        <div className="flex justify-center py-5 border-b items-center">
          <p className="text-white text-2xl font-bold">
            KosUngu <span className="text-lg bg-white text-purple-600 p-1 rounded">Admin</span>
          </p>
        </div>
        <div className="flex py-5 border-b items-center gap-2">
          <BsSpeedometer />
          <p className="font-semibold">Dashboard</p>
        </div>
        <div className="flex py-3 mt-2  items-center gap-2">
          <BsFillHouseDoorFill />
          <p className="font-semibold">Product</p>
        </div>
        <div className="flex py-3 items-center gap-2">
          <BsJournalBookmarkFill />
          <p className="font-semibold">Transaction</p>
        </div>
        <div className="flex py-3 items-center gap-2">
          <BsPersonFill />
          <p className="font-semibold">User</p>
        </div>
        <div className="flex py-3 items-center gap-2">
          <BsPersonLinesFill />
          <p className="font-semibold">Owner</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
