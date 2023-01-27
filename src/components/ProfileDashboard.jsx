import React from "react";

import { BsPencilFill } from "react-icons/bs";
import ItemCard from "./ItemCard";

const ProfileDashboard = () => {
  return (
    <div className="flex border p-5 flex-col rounded bg-white">
      <div className="flex gap-3 items-center border-b pb-4">
        <div className="bg-gray-100 w-20 h-20 rounded-full">
          <img src="/profile.png" alt="" />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold">Rahmat Fajri Nandipinto</p>
          <p>Email : nandipintorahmatfajri@gmail.com </p>
          <p>Phone : 0895341972293</p>
        </div>

        <BsPencilFill className=" mt-auto text-purple-600" />
      </div>

      <div className="flex gap-10 py-3">
        <div className="flex flex-col w-full">
          <p className="text-lg mb-2 font-semibold">Sewa Aktif</p>
          <div className="flex border rounded border-purple-600 p-3 flex-col">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">Order Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Aktif</p>
                </div>
                <div className="flex">
                  <p>Sewa Berakhir : 16 Februari 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className=" border flex gap-2 py-1  px-5 justify-center bg-white rounded text-red-600 border-red-600">
                  <p className="text-lg  ">Batalkan Sewa</p>
                </button>
              </div>
            </div>
            <div className="flex py-2 gap-4 border-b">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-2/3">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode Pembayaran : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tanggal Pembayaran : 16 Januari 2023</p>
              </div>
            </div>

            <div className="flex w-full">
              <ItemCard type="transaction" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default ProfileDashboard;
