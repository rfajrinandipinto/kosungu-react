import React from "react";

import { BsSearch, BsPersonCircle } from "react-icons/bs";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminUser = () => {
  const [data, setData] = useState([]);

  const fetchUser = () => {
    axios.get("http://localhost:3000/users").then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex  px-5 flex-col  w-full ">
      <div className="flex gap-3 items-center pb-4 justify-between">
        <p className="text-2xl">User</p>
      </div>

      <div className="flex gap-10 bg-white rounded overflow-hidden">
        <div className="flex flex-col w-full pb-4">
          <div className="flex bg-purple-100 items-center justify-between px-5">
            <p className="text-lg font-semibold py-3">Daftar User</p>
            <div className=" flex items-center">
              <form action="" className="flex">
                <input type="text" className="  border rounded-l text-sm py-2 px-3 w-60 focus:border-purple-500 focus:outline-none" placeholder="Search" />

                <button type="submit" className=" bg-purple-600 text-white py-2 px-3 border rounded-r">
                  <BsSearch />
                </button>
              </form>
            </div>
          </div>

          {data.map((e) => {
            return (
              <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
                <div className="flex justify-between border-b pb-2">
                  <div className="flex flex-col ">
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold">User Id : {e._id}</p>
                      <p>|</p>
                      <p className="text-green-700 bg-green-100 rounded py-1 px-3">Penyewa</p>
                    </div>
                  </div>
                </div>
                <div className="flex py-2 gap-4">
                  <div className="flex basis-3/4 border-r items-center pr-4 py-3">
                    <div className="flex gap-10 items-center">
                      <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center">
                        <BsPersonCircle className="text-6xl" />
                      </div>

                      <div className="flex flex-col">
                        <p className="font-semibold">{e.nama}</p>
                        <p>Email : {e.email} </p>
                        <p>Phone : {e.no_telp}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                    <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-400">Ban</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default AdminUser;
