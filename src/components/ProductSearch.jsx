import React from "react";
import { BsGeoAltFill, BsWhatsapp, BsBuilding, BsFillLightningFill } from "react-icons/bs";
import { GoogleMap, useJsApiLoader, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";
import ItemCard from "./ItemCard";

const ProductSearch = () => {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = { lat: -31.56391, lng: 147.154312 };

  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];

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

  return (
    <div className="ProductSerach-component ">
      <div className=" mx-auto xl:px-5  lg:px-1 pb-6 pt-6">
        <div className="flex gap-4">
          <div className=" basis-3/6 pr-2">
            <div className="flex flex-col border-b pb-2">
              <p className="text-lg">Filter :</p>
              <div className="flex gap-3">
                <div className=" flex items-center ">
                  <form action="" className="flex my-3 w-full">
                    <select className=" bg-gray-100 border text-sm py-3 px-3 focus:border-purple-500 focus:outline-none w-full rounded" placeholder="Type">
                      <option selected>All Type</option>
                      <option value="kos">Per Bulan</option>
                      <option value="kos">Per 3 Bulan</option>
                      <option value="kos">Per 6 Bulan</option>
                    </select>
                  </form>
                </div>
                <div className=" flex items-center ">
                  <form action="" className="flex my-3 w-full">
                    <select className=" bg-gray-100 border text-sm py-3 px-3 focus:border-purple-500 focus:outline-none w-full rounded" placeholder="Type">
                      <option selected>Bulanan</option>
                      <option value="kos">Per Bulan</option>
                      <option value="kos">Per 3 Bulan</option>
                      <option value="kos">Per 6 Bulan</option>
                    </select>
                  </form>
                </div>

                <div className=" flex items-center ">
                  <form action="" className="flex my-3 w-full">
                    <select className=" bg-gray-100 border text-sm py-3 px-3 focus:border-purple-500 focus:outline-none w-full rounded" placeholder="Type">
                      <option selected>Harga</option>
                      <option value="kos">Per Bulan</option>
                      <option value="kos">Per 3 Bulan</option>
                      <option value="kos">Per 6 Bulan</option>
                    </select>
                  </form>
                </div>

                <div className=" flex items-center ">
                  <form action="" className="flex my-3 w-full">
                    <select className=" bg-gray-100 border text-sm py-3 px-3 focus:border-purple-500 focus:outline-none w-full rounded" placeholder="Type">
                      <option selected>Fasilitas</option>
                      <option value="kos">Per Bulan</option>
                      <option value="kos">Per 3 Bulan</option>
                      <option value="kos">Per 6 Bulan</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex py-3 flex-col border-b">
              <p className="mb-3 font-semibold text-xl">Ditemukan 100 kos</p>
              <div className="flex flex-col gap-2">
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
                <ItemCard type={"flex"} />
              </div>
            </div>
          </div>
          <div className="basis-3/6 ">
            <div className="flex flex-col shadow-lg p-4 border rounded sticky top-20 ">
              <div className="flex">
                {isLoaded ? (
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
                    <MarkerClusterer options={options}>{(clusterer) => locations.map((location) => <Marker key={createKey(location)} position={location} clusterer={clusterer} />)}</MarkerClusterer>
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
