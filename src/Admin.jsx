import { useState, useEffect } from "react";
import "./App.css";
import AdminContent from "./components/AdminContent";
import AdminFooter from "./components/AdminFooter";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";

function Admin() {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("dashboard");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {}, []);

  return (
    <div className="Admin bg-gray-50 flex">
      <div className=" basis-1/5">
        <AdminSidebar changePage={changePage} />
      </div>
      <div className=" basis-4/5">
        <AdminNavbar />
        <AdminContent page={page} />
        <AdminFooter />
      </div>
    </div>
  );
}

export default Admin;
