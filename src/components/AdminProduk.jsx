import React from "react";

import { BsSearch } from "react-icons/bs";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, LoadScript, MarkerClusterer, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import Cookies from "js-cookie";

const AdminProduk = () => {
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState("");
  const [id, setId] = useState("");
  const [productId, setProductId] = useState("");
  const [data, setData] = useState([]);
  const [location, setlocation] = useState({ lat: -7.759644444937914, lng: 110.40904609719404 });

  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [tipe, setTipe] = useState("");
  const [alamat, setAlamat] = useState("");
  const [fasilitas, setFasilitas] = useState({
    k_dalam: false,
    kasur: false,
    lemari: false,
    meja: false,
    kursi: false,
    kipas: false,
    listrik: false,
    wifi: false,
    dapur: false,
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "amdwytno"), data.append("cloud_name", "dtnldotxd");

    const response = await axios
      .post("https://api.cloudinary.com/v1_1/dtnldotxd/image/upload", data)
      .then((response) => response.data.url)
      .catch((err) => console.log(err));

    return response;
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
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

  const fetchId = async () => {
    const response = await axios.get("http://localhost:3000/auth/whoami", {
      headers: {
        Authorization: "JWT " + Cookies.get("token"),
      },
    });
    return setId(response.data._id);
  };

  const fetchProduct = () => {
    axios.get("http://localhost:3000/products").then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchId();
    fetchProduct();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  const submitForm = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImage();

    const formdata = {
      owner_id: id,
      nama: nama,
      kategori: kategori,
      harga: harga,
      tipe: tipe,
      alamat: alamat,
      lokasi: location,
      fasilitas: fasilitas,
      image: [imageUrl],
    };

    return axios
      .post("http://localhost:3000/products", formdata)
      .then((response) => console.log(response))
      .then(() => fetchProduct())
      .then(() => setForm(false));
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImage();

    const formdata = {
      nama: nama,
      kategori: kategori,
      harga: harga,
      tipe: tipe,
      alamat: alamat,
      lokasi: location,
      fasilitas: fasilitas,
      image: [imageUrl],
    };

    return axios
      .put(`http://localhost:3000/products/${productId}`, formdata)
      .then((response) => console.log(response))
      .then(() => fetchProduct())
      .then(() => setForm(false));
  };

  const handleDelete = async (e) => {
    console.log(e);
    const response = await axios.delete(`http://localhost:3000/products/${e}`);
    fetchProduct();
    return console.log(response);
  };

  const openEditForm = (id) => {
    setProductId(id);

    var editData = data.filter((e) => {
      return e._id == id;
    });

    setNama(editData[0].nama);
    setKategori(editData[0].kategori);
    setHarga(editData[0].harga);
    setTipe(editData[0].tipe);
    setAlamat(editData[0].alamat);

    let intLocation = {
      lat: parseFloat(editData[0].lokasi[0].lat),
      lng: parseFloat(editData[0].lokasi[0].lng),
    };

    setlocation(intLocation);

    setEdit(true);
    setForm(true);
  };

  const productList = () => {
    return (
      <>
        <div className="flex gap-3 items-center pb-4 justify-between">
          <p className="text-2xl">Produk</p>

          <p className=" rounded py-2 px-3 font-semibold  bg-green-100 text-green-700 cursor-pointer" onClick={() => setForm(true)}>
            Tambah Produk
          </p>
        </div>

        <div className="flex gap-10 bg-white rounded overflow-hidden">
          <div className="flex flex-col w-full pb-4">
            <div className="flex bg-purple-100 items-center justify-between px-5">
              <p className="text-lg font-semibold py-3">Daftar Produk</p>
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
                        <p className="font-semibold">Produk Id : {e._id}</p>
                        <p>|</p>
                        <p className="text-green-700 bg-green-100 rounded py-1 px-3">Available</p>
                      </div>
                      <div className="flex">
                        <p className="font-semibold">Owner Id : {e.owner_id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-2 gap-4">
                    <div className="flex basis-3/4 border-r items-start pr-4 py-3">
                      <ItemCard type="dashboard" data={e} />
                    </div>

                    <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                      <p className=" rounded py-2 px-3 font-bold text-center text-lg bg-yellow-100 text-yellow-400 cursor-pointer " onClick={() => openEditForm(e._id)}>
                        Edit
                      </p>
                      <p className=" rounded py-2 px-3 font-bold text-center text-lg bg-red-100 text-red-700" onClick={() => handleDelete(e._id)}>
                        Hapus
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 justify-end"></div>
      </>
    );
  };

  const produkForm = () => {
    return (
      <>
        <div className="flex gap-3 items-center pb-4 justify-between">
          <p className="text-2xl">Produk</p>
        </div>

        <div className="flex gap-10 bg-white rounded overflow-hidden">
          <div className="flex flex-col w-full pb-4">
            <div className="flex bg-purple-100 items-center justify-between px-5">
              <p className="text-lg font-semibold py-3">Tambah Produk</p>
            </div>

            <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
              <form onSubmit={edit ? handleEdit : submitForm}>
                <div className="flex flex-col gap-5">
                  <div className="flex">
                    <div className="basis-2/3">
                      <p className="text-lg mb-2">Nama Kos</p>
                      <input type="text" className="border-2 p-2 rounded w-full " required onChange={(e) => setNama(e.target.value)} value={nama} />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="basis-1/3">
                      <p className="text-lg mb-2">Kategori</p>
                      <select id="countries" className="border-2 p-2 rounded w-full" onChange={(e) => setKategori(e.target.value)} value={kategori}>
                        <option value="kost">Kost</option>
                        <option value="kontrakan">Kontrakan</option>
                        <option value="ekslusif">Kost Eksklusif</option>
                      </select>
                    </div>
                    <div className="basis-1/3">
                      <p className="text-lg mb-2">Tipe</p>
                      <select id="countries" className="border-2 p-2 rounded w-full" required onChange={(e) => setTipe(e.target.value)} vaslue={tipe}>
                        <option value="campur">Campur</option>
                        <option value="putra">Putra</option>
                        <option value="putri">Putri</option>
                      </select>
                    </div>
                    <div className="basis-1/3"></div>
                  </div>
                  <div className="flex">
                    <div className="basis-2/3">
                      <p className="text-lg mb-2">Alamat Lengkap</p>
                      <textarea type="text" rows={2} className="border-2 p-2 rounded w-full " required onChange={(e) => setAlamat(e.target.value)}>
                        {alamat}
                      </textarea>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <p className="text-lg mb-2">Lokasi</p>
                      <div className="flex">
                        {isLoaded ? (
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={5}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            onClick={(e) => {
                              setlocation({
                                lat: e.latLng.lat(),
                                lng: e.latLng.lng(),
                              });
                            }}
                          >
                            <MarkerF position={{ lat: location.lat, lng: location.lng }} />
                          </GoogleMap>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="basis-2/3">
                      <p className="text-lg mb-2">fasilitas</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="k_dalam"
                            checked={fasilitas.k_dalam}
                            onChange={() => setFasilitas({ ...fasilitas, k_dalam: !fasilitas.k_dalam })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="k_dalam">
                            Kamar Mandi Dalam
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="kasur"
                            checked={fasilitas.kasur}
                            onChange={() => setFasilitas({ ...fasilitas, kasur: !fasilitas.kasur })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="kasur">
                            Kasur
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="lemari"
                            checked={fasilitas.lemari}
                            onChange={() => setFasilitas({ ...fasilitas, lemari: !fasilitas.lemari })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="lemari">
                            Lemari
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="kursi"
                            checked={fasilitas.kursi}
                            onChange={() => setFasilitas({ ...fasilitas, kursi: !fasilitas.kursi })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="kursi">
                            Kursi
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="kipas"
                            checked={fasilitas.kipas}
                            onChange={() => setFasilitas({ ...fasilitas, kipas: !fasilitas.kipas })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="kipas">
                            Kipas
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="listrik"
                            checked={fasilitas.listrik}
                            onChange={() => setFasilitas({ ...fasilitas, listrik: !fasilitas.listrik })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="listrik">
                            Listrik
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="wifi"
                            checked={fasilitas.wifi}
                            onChange={() => setFasilitas({ ...fasilitas, wifi: !fasilitas.wifi })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="wifi">
                            WiFi
                          </label>
                        </div>
                        <div className="form-check basis-1/3">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="dapur"
                            checked={fasilitas.dapur}
                            onChange={() => setFasilitas({ ...fasilitas, dapur: !fasilitas.dapur })}
                          />
                          <label className="form-check-label inline-block text-gray-800" for="dapur">
                            Dapur
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="basis-1/3">
                      <p className="text-lg mb-2">Gambar </p>
                      <input type="file" className="border-2 p-2 rounded w-full " onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="basis-1/3">
                      <p className="text-lg mb-2">Harga (Rp)</p>
                      <input type="number" className="border-2 p-2 rounded w-full " required onChange={(e) => setHarga(e.target.value)} value={harga} />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button className="border py-2 px-6 rounded text-lg font-semibold ">batal</button>
                    <button className="bg-purple-600 py-2 px-5 rounded text-lg font-semibold text-white" type="submit">
                      simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end"></div>
      </>
    );
  };

  return <div className="flex  px-5 flex-col  w-full ">{form ? produkForm(editData) : productList()}</div>;
};

export default AdminProduk;
