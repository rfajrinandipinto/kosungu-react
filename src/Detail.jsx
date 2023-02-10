import { useState, useEffect } from "react";
import "./App.css";
import BreadCrumb from "./components/BreadCrumb";
import DetailDescription from "./components/DetailDescription";
import DetailGallery from "./components/DetailGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductList from "./components/ProductList";

import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading";

function Detail() {
  let { id } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/products/" + id)
      .then((response) => setData(response.data))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Detail">
      <Navbar />
      <BreadCrumb />
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailGallery url={data.image[0]} />
          <DetailDescription data={data} />
        </>
      )}

      {/* <ProductList title="Rekomendasi Kos Lain" slider={true} /> */}
      <Footer />
    </div>
  );
}

export default Detail;
