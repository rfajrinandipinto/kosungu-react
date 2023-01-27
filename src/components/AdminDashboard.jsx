import React from "react";

import { BsPencilFill, BsFillCalendarFill, BsCurrencyDollar, BsJournalBookmarkFill, BsFillPeopleFill } from "react-icons/bs";
import ItemCard from "./ItemCard";

const AdminDashboard = () => {
  return (
    <div className="flex  px-5 flex-col  w-full ">
      <div className="flex gap-3 items-center pb-4">
        <p className="text-2xl">Dashboard</p>
      </div>

      <div className="flex gap-5 items-center pb-4 mb-4">
        <div className="flex basis-1/4 border bg-white rounded px-3 py-5  shadow-lg border-l-4 border-l-blue-600 items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-blue-600">Pendapatan (Bulanan)</p>
            <p className="font-semibold text-xl">Rp 10.000.000</p>
          </div>

          <BsFillCalendarFill className=" text-gray-200 text-2xl" />
        </div>
        <div className="flex basis-1/4 border bg-white rounded px-3 py-5  shadow-lg border-l-4 border-l-green-600 items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-green-600">Pendapatan (Tahunan)</p>
            <p className="font-semibold text-xl">Rp 10.000.000</p>
          </div>

          <BsCurrencyDollar className=" text-gray-200 text-3xl" />
        </div>
        <div className="flex basis-1/4 border bg-white rounded px-3 py-5  shadow-lg border-l-4 border-l-cyan-400 items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-cyan-400">Transaksi (Bulanan)</p>
            <p className="font-semibold text-xl">34</p>
          </div>

          <BsJournalBookmarkFill className=" text-gray-200 text-3xl" />
        </div>
        <div className="flex basis-1/4 border bg-white rounded px-3 py-5  shadow-lg border-l-4 border-l-amber-300 items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-amber-300">User</p>
            <p className="font-semibold text-xl">20</p>
          </div>

          <BsFillPeopleFill className=" text-gray-200 text-3xl" />
        </div>
      </div>

      <div className="flex gap-10 bg-white rounded overflow-hidden">
        <div className="flex flex-col w-full pb-4">
          <div className="flex bg-purple-100 items-center">
            <p className="text-lg font-semibold px-5 py-2">Transaksi Terbaru</p>
          </div>

          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
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
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Produk</p>
                <p>Id Produk : 123</p>
                <p>Nama : Kost Apik Puri Shastri</p>
                <p>Kategori : Kost</p>
              </div>
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-1/3 border-r">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tgl Pembayaran : 16 Jan 2023</p>
              </div>
              <div className="flex flex-col basis-1/3">
                <p className=" text-gray-400 text-lg">User</p>
                <p>Id User : 123</p>
                <p>Nama : Rahmat Fajri Nandipinto</p>
                <p>Email : fajri@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex border rounded px-5 py-2 flex-col mx-5 my-2">
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
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Produk</p>
                <p>Id Produk : 123</p>
                <p>Nama : Kost Apik Puri Shastri</p>
                <p>Kategori : Kost</p>
              </div>
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-1/3 border-r">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tgl Pembayaran : 16 Jan 2023</p>
              </div>
              <div className="flex flex-col basis-1/3">
                <p className=" text-gray-400 text-lg">User</p>
                <p>Id User : 123</p>
                <p>Nama : Rahmat Fajri Nandipinto</p>
                <p>Email : fajri@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex border rounded px-5 py-2 flex-col mx-5 my-2">
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
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Produk</p>
                <p>Id Produk : 123</p>
                <p>Nama : Kost Apik Puri Shastri</p>
                <p>Kategori : Kost</p>
              </div>
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-1/3 border-r">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tgl Pembayaran : 16 Jan 2023</p>
              </div>
              <div className="flex flex-col basis-1/3">
                <p className=" text-gray-400 text-lg">User</p>
                <p>Id User : 123</p>
                <p>Nama : Rahmat Fajri Nandipinto</p>
                <p>Email : fajri@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex border rounded px-5 py-2 flex-col mx-5 my-2">
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
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Produk</p>
                <p>Id Produk : 123</p>
                <p>Nama : Kost Apik Puri Shastri</p>
                <p>Kategori : Kost</p>
              </div>
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-1/3 border-r">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tgl Pembayaran : 16 Jan 2023</p>
              </div>
              <div className="flex flex-col basis-1/3">
                <p className=" text-gray-400 text-lg">User</p>
                <p>Id User : 123</p>
                <p>Nama : Rahmat Fajri Nandipinto</p>
                <p>Email : fajri@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex border rounded px-5 py-2 flex-col mx-5 my-2">
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
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Produk</p>
                <p>Id Produk : 123</p>
                <p>Nama : Kost Apik Puri Shastri</p>
                <p>Kategori : Kost</p>
              </div>
              <div className="flex flex-col basis-1/3 border-r items-start">
                <p className=" text-gray-400 text-lg">Sewa</p>
                <p>Pilihan Durasi : Perbulan</p>
                <p>Biaya : Rp 1.500.000 /Perbulan</p>
                <p>
                  Total : <span className="font-bold">Rp 1.500.000</span>
                </p>
                <p></p>
              </div>
              <div className="flex flex-col basis-1/3 border-r">
                <p className=" text-gray-400 text-lg">Pembayaran</p>
                <p>Metode : Transfer Bank</p>
                <p>No Rekening : ***454958</p>
                <p>Tgl Pembayaran : 16 Jan 2023</p>
              </div>
              <div className="flex flex-col basis-1/3">
                <p className=" text-gray-400 text-lg">User</p>
                <p>Id User : 123</p>
                <p>Nama : Rahmat Fajri Nandipinto</p>
                <p>Email : fajri@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default AdminDashboard;
