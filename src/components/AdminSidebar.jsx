import React from "react";

import { BsSpeedometer, BsFillHouseDoorFill, BsJournalBookmarkFill, BsPersonFill, BsPersonLinesFill } from "react-icons/bs";

const AdminSidebar = ({ page, changePage }) => {
  const setPage = (newPage) => {
    changePage(newPage);
  };

  return (
    <div className="flex h-full  bg-purple-600 text-white">
      <div className="flex flex-col px-5 w-full">
        <div className="flex justify-center py-5 border-b items-center">
          <a href="/admin">
            <p className="text-white text-2xl font-bold">
              KosUngu <span className="text-lg bg-white text-purple-600 p-1 rounded">Admin</span>
            </p>
          </a>
        </div>
        <div className="flex py-5 border-b items-center gap-2 cursor-pointer">
          <BsSpeedometer />
          <p className="font-semibold" onClick={() => setPage("dashboard")}>
            Dashboard
          </p>
        </div>
        <div className="flex py-3 px-2 items-center gap-2 cursor-pointer hover:bg-white hover:text-purple-700 rounded mt-2">
          <BsFillHouseDoorFill />
          <p className="font-semibold" onClick={() => setPage("produk")}>
            Product
          </p>
        </div>
        <div className="flex py-3 px-2 items-center gap-2 cursor-pointer hover:bg-white hover:text-purple-700 rounded">
          <BsJournalBookmarkFill />
          <p className="font-semibold" onClick={() => setPage("dashboard")}>
            Transaction
          </p>
        </div>
        <div className="flex py-3 px-2 items-center gap-2 cursor-pointer hover:bg-white hover:text-purple-700 rounded">
          <BsPersonFill />
          <p className="font-semibold" onClick={() => setPage("user")}>
            User
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
