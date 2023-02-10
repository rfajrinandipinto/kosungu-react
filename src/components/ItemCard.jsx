import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const ItemCard = (props) => {
  const renderCard = () => {
    switch (props.type) {
      case "payment":
        return (
          <div className={"border rounded basis-1/4 overflow-hidden "}>
            <div className="flex relative basis-2/5">
              <img src={props.data.image[0]} alt="" className=" object-cover h-full w-full" />
            </div>

            <div className="flex flex-col p-4 basis-3/5">
              <p className="border rounded py-1 px-3 font-semibold  bg-white w-min shadow mb-2">{props.data.tipe}</p>
              <p></p>
              <p className="font-bold">Depok</p>
              <div className="flex gap-1 text-gray-400 border-b pb-3">
                <p>WiFi</p> · <p> Kasur</p>
              </div>

              <p className="mt-2 text-lg font-semibold">Summary</p>

              <div className="flex mt-1 justify-between text-lg">
                <p>Durasi :</p>
                <p>Per Bulan</p>
              </div>

              <div className="flex justify-between text-lg border-b pb-2 border-black">
                <p>Total Biaya :</p>
                <p>Rp {props.data.harga}</p>
              </div>

              <div className="flex justify-between text-lg mt-2">
                <p>Total :</p>
                <p className="font-bold">Rp {props.data.harga}</p>
              </div>

              <div
                className="flex gap-2
                ml-auto"
              ></div>
            </div>
          </div>
        );
      case "flex":
        return (
          <div className={"border rounded basis-1/4 overflow-hidden flex"}>
            <div className="flex relative">
              <img src="/kos-1.jpg" alt="" className="h-48 object-cover w-full" />
              <p className="border rounded py-1 px-3 font-semibold absolute bg-white right-3 top-3">Campur</p>
            </div>

            <div className="flex flex-col p-4 flex-grow">
              <p className="text-lg font-semibold">
                Rp 750.00 <span className="text-base font-normal">/bulan</span>{" "}
              </p>
              <p>Kost Apik Puri Shastri</p>
              <p className="font-bold">Depok</p>
              <div className="flex gap-1 text-gray-400">
                <p>WiFi</p> · <p> Kasur</p>
              </div>
              <div className="flex gap-1 mt-2 ml-auto">
                <button className="bg-purple-600 py-1 px-5 rounded text-white font-semibold">Detail</button>
                <button className=" py-2 px-3 rounded text-gray-400 border-2 font-semibold flex items-center">
                  <BsFillHeartFill />
                </button>
              </div>
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className={"border rounded w-full overflow-hidden flex items-center"}>
            <div className="flex relative basis-1/3">
              <img src={props.data.image[0]} alt="" className="h-48 object-cover " />
              <p className="border rounded py-1 px-3 font-semibold absolute bg-white right-3 top-3">{props.data.tipe}</p>
            </div>

            <div className="flex basis-1/4">
              <div className="flex flex-col p-4">
                <p className="text-lg font-semibold">Nama </p>
                <p className="text-lg font-semibold">Kategori </p>
                <p className="text-lg font-semibold">Harga </p>
                <p className="text-lg font-semibold">Lokasi </p>
              </div>
            </div>
            <div className="flex flex-col p-4 flex-grow basis-1/3">
              <p className="text-lg font-semibold">: {props.data.nama}</p>
              <p className="text-lg font-semibold"> : {props.data.kategori}</p>
              <p className="text-lg font-semibold">: Rp {props.data.harga}</p>
              <p className="text-lg font-semibold">: Depok</p>
            </div>
          </div>
        );
      case "transaction":
        return (
          <div className={"border rounded w-full overflow-hidden flex mt-4"}>
            <div className="flex relative">
              <img src="/kos-1.jpg" alt="" className="h-48 object-cover w-full" />
              <p className="border rounded py-1 px-3 font-semibold absolute bg-white right-3 top-3">Campur</p>
            </div>

            <div className="flex flex-col p-4 flex-grow">
              <p className="text-lg font-semibold">
                Rp 750.00 <span className="text-base font-normal">/bulan</span>{" "}
              </p>
              <p>Kost Apik Puri Shastri</p>
              <p className="font-bold">Depok</p>
              <div className="flex gap-1 text-gray-400">
                <p>WiFi</p> · <p> Kasur</p>
              </div>
              <div className="flex gap-1 mt-2 ml-auto">
                <button className="bg-purple-600 py-1 px-4 rounded text-white font-semibold">Detail</button>
                <button className=" py-2 px-3 rounded text-gray-400 border-2 font-semibold flex items-center">
                  <BsFillHeartFill />
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className={"border rounded basis-1/4 overflow-hidden"}>
            <div className="flex relative">
              <img src={props.data.image[0]} alt="" className="h-48 object-cover w-full" />
              <p className="border rounded py-1 px-3 font-semibold absolute bg-white right-3 top-3">{props.data.tipe}</p>
            </div>

            <div className="flex flex-col p-4">
              <p className="text-lg font-semibold">
                Rp {props.data.harga.toLocaleString()} <span className="text-base font-normal">/bulan</span>{" "}
              </p>
              <p>{props.data.nama}</p>
              <p className="font-bold">Depok</p>
              <div className="flex gap-1 text-gray-400">
                <p>WiFi</p> · <p> Kasur</p>
              </div>
              <div className="flex gap-1 mt-2">
                <a href={"detail/" + props.data._id}>
                  <button className="bg-purple-600 py-1 px-4 rounded text-white font-semibold">Detail</button>
                </a>
                <button className=" py-2 px-3 rounded text-gray-400 border-2 font-semibold flex items-center">
                  <BsFillHeartFill />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return <>{renderCard()}</>;
};

export default ItemCard;
