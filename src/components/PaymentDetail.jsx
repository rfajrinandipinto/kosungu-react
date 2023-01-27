import React from "react";
import { BsGeoAltFill, BsWhatsapp, BsBuilding, BsFillLightningFill } from "react-icons/bs";
import { GoogleMap, useJsApiLoader, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";
import ItemCard from "./ItemCard";

const PaymentDetail = () => {
  return (
    <div className="PaymentDetail-component my-6 ">
      <div className="container mx-auto xl:px-16  lg:px-10 pb-6">
        <div className="flex gap-10">
          <div className="basis-2/3 pr-2">
            <div className="flex border p-5 flex-col rounded">
              <p className="font-semibold text-xl mb-2">Pembayaran Sewa</p>

              <div className="flex gap-10">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Nama</p>
                  <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6 bg-gray-100 rounded" placeholder="Masukkan Email Anda" required />
                </div>
                <div className="flex flex-col basis-1/2"></div>
              </div>

              <div className="flex gap-10 border-b mb-2">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Email</p>
                  <input type="text" className="w-full p-2 border rounded outline-none text-lg mb-6 bg-gray-100 " placeholder="Masukkan Email Anda" required />
                </div>

                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Nomor Telepon</p>
                  <input type="email" className="w-full p-2 border-b outline-none text-lg mb-6 bg-gray-100 rounded" placeholder="Masukkan no telepon Anda" required />
                </div>
              </div>

              <p className="font-semibold text-xl mb-2 mt-2">Detail Sewa</p>

              <div className="flex gap-10 border-b pb-2">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-2 font-semibold">Nama Kos / Kontrakan</p>
                  <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6 border rounded" value={"Kost Apik Putri Shasri"} disabled />
                </div>
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-2 font-semibold">Durasi Sewa</p>
                  <select className=" bg-gray-100 border text-lg p-2 focus:border-purple-500 focus:outline-none w-full rounded" placeholder="Type">
                    <option value="kos">Per Bulan</option>
                    <option value="kos">Per 3 Bulan</option>
                    <option value="kos">Per 6 Bulan</option>
                  </select>
                </div>
              </div>

              <p className="font-semibold text-xl mb-2 mt-3">Detail Pembayaran</p>

              <div className="flex gap-10">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-2 font-semibold">Metode Pembayaran</p>
                  <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6 border rounded" value={"Kost Apik Putri Shasri"} disabled />
                </div>
                <div className="flex flex-col basis-1/2"></div>
              </div>

              <div className="flex gap-3 justify-end">
                <button className=" border flex gap-2 py-2  px-5 justify-center bg-white rounded text-black">
                  <p className="text-lg">Cancel</p>
                </button>
                <button className=" border flex gap-2 py-2  px-5  justify-center  bg-purple-600 rounded text-white">
                  <p className="text-lg">Bayar</p>
                </button>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <ItemCard type="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
