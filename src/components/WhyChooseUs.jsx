import React from "react";
import { BsCash, BsFillStarFill, BsClock, BsPeopleFill, BsFillHandThumbsUpFill, BsFillHouseDoorFill } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <div className="header-component bg-gray-100">
      <div className="container mx-auto xl:px-0  lg:px-10  py-10">
        <p className="text-2xl font-semibold mb-3">Why Choose us</p>
        <div className="grid gap-5 grid-cols-3">
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsCash className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Harga Pas</p>
              <p>Menawarkan Harga Termurah yang pas di Kantong Mahasiswa</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsFillStarFill className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Pelayanan Terbaik</p>
              <p>Melayani anda dengan berbagai fitur sesuai kebutuhan anda</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsClock className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Cepat</p>
              <p>Transaksi anda di proses dengan cepat dan aman </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsPeopleFill className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Kepuasan pelanggan</p>
              <p>Menjadikan kepuasan anda sebagai prioritas utama</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsFillHandThumbsUpFill className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col self-start">
              <p className="font-semibold">Pelanggan Senang</p>
              <p>Anda senang kami pun banyak uang</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-center bg-white p-3 rounded-full">
              <BsFillHouseDoorFill className="text-4xl text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Banyak Pilihan</p>
              <p>Menyediakan puluhan kos dan kontrakan yang bisa anda pilih sesuai kebutuhan </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
