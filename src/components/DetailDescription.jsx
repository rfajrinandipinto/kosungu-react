import React, { useState } from "react";
import { BsGeoAltFill, BsWhatsapp, BsBuilding, BsFillLightningFill } from "react-icons/bs";
import { GoogleMap, useJsApiLoader, LoadScript, MarkerClusterer, MarkerF, Data } from "@react-google-maps/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailDescription = (props) => {
  const [data, setData] = useState(props.data);

  console.log(props.data);

  let location = {
    lat: parseFloat(data.lokasi[0].lat),
    lng: parseFloat(data.lokasi[0].lng),
  };

  function setHarga(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let harga = data.harga;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = { lat: location.lat, lng: location.lng };

  const locations = [{ lat: location.lat, lng: location.lng }];

  const options = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  };

  function createKey(location) {
    return location.lat + location.lng;
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const navigate = useNavigate();

  const paymentButton = (id) => {
    navigate(`/payment/`, { state: { id: id, data: data } });
  };

  return (
    <div className="header-component ">
      <div className="container mx-auto xl:px-16  lg:px-10 pb-6">
        <div className="flex gap-4">
          <div className="basis-2/3 pr-2">
            <p className="text-xl font-semibold mb-5">{data.nama}</p>

            <div className="flex my-2 gap-3 mb-5">
              <p className="border rounded py-1 px-3 font-semibold  bg-white right-3 bottom-3 text-black">{data.tipe}</p>
              <div className="flex items-center gap-1">
                <BsGeoAltFill className="text-lg text-purple-600" />
                <p>{data.alamat}</p>
              </div>
            </div>
            <div className="flex justify-between border-y py-3 items-center">
              <div className="text-lg font-bold flex flex-col ">
                <p className="mb-3">Dikelola oleh R Fajri Nandipinto</p>
                <div className="border justify-center rounded py-2 px-5 font-semibold text-white bg-green-500 flex w-48 items-center gap-3">
                  <BsWhatsapp className="text-xl" />
                  <p className="flex">Chat Pemilik</p>
                </div>
              </div>
              <div className="flex h-16 w-16 rounded-full bg-gray-300">
                <img src="/profile.png" alt="" className="object-cover" />
              </div>
            </div>
            <div className="flex py-3 flex-col border-b">
              <p className="mb-3 font-semibold text-xl">Spesifikasi Kamar</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <BsBuilding className="text-xl" />
                  <p>2.8 x 2.4 meter</p>
                </div>
                <div className="flex gap-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Termasuk Listrik</p>
                </div>
              </div>
            </div>
            <div className="flex py-3 flex-col border-b">
              <p className="mb-3 font-semibold text-xl">Fasilitas Kamar</p>
              <div className="flex  flex-wrap">
                <div className="flex gap-2 basis-2/4 mb-2">
                  <BsBuilding className="text-xl" />
                  <p>Kasur</p>
                </div>
                <div className="flex gap-2 basis-3/6 mb-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Lemari</p>
                </div>
                <div className="flex gap-2 basis-2/4 mb-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Bantal</p>
                </div>
                <div className="flex gap-2 basis-2/4 mb-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Cermin</p>
                </div>
              </div>
            </div>
            {/* <div className="flex py-3 flex-col border-b">
              <p className="mb-3 font-semibold text-xl">Peraturan Khusus</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <BsBuilding className="text-xl" />
                  <p>2.8 x 2.4 meter</p>
                </div>
                <div className="flex gap-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Termasuk Listrik</p>
                </div>
                <div className="flex gap-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Termasuk Listrik</p>
                </div>
                <div className="flex gap-2">
                  <BsFillLightningFill className="text-xl" />
                  <p>Termasuk Listrik</p>
                </div>
              </div>
            </div> */}
            <div className="flex py-3 flex-col border-b">
              <p className="mb-3 font-semibold text-xl">Lokasi</p>
              <div className="flex flex-col gap-1">
                {/* <div className="flex items-center gap-1 mb-2">
                  <BsGeoAltFill className="text-lg text-purple-600" />
                  <p>Lokasi</p>
                </div> */}

                <div className="flex">
                  {isLoaded ? (
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5} onLoad={onLoad} onUnmount={onUnmount}>
                      <MarkerF position={{ lat: location.lat, lng: location.lng }} />
                    </GoogleMap>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex flex-col shadow-lg p-4 border rounded sticky top-20">
              <p className="text-2xl font-semibold">
                Rp {setHarga(data.harga)} <span className="text-lg">/ bulan</span>{" "}
              </p>
              <div className=" flex items-center ">
                <form action="" className="flex my-3 w-full">
                  <select className=" bg-gray-100 border text-sm py-3 px-3 focus:border-purple-500 focus:outline-none w-full " placeholder="Type">
                    <option value="1">Per Bulan</option>
                    <option value="3">Per 3 Bulan</option>
                    <option value="6">Per 6 Bulan</option>
                  </select>
                </form>
              </div>
              <div className="border justify-center rounded py-2 px-5 font-semibold text-white bg-green-500 flex  items-center gap-3 mb-2">
                <BsWhatsapp className="text-xl" />
                <p className="flex">Chat Pemilik</p>
              </div>
              <div className="border justify-center rounded py-2 px-5 font-semibold text-white bg-purple-600 flex items-center gap-3 cursor-pointer" onClick={() => paymentButton(data._id)}>
                <p className="flex">Sewa Sekarang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDescription;
