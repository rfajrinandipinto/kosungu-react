import { useState } from "react";
import "./App.css";
import AdminContent from "./components/AdminContent";
import AdminFooter from "./components/AdminFooter";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";

function Admin() {
  return (
    <div className="Admin bg-gray-50 flex">
      <div className=" basis-1/5">
        <AdminSidebar />
      </div>
      <div className=" basis-4/5">
        <AdminNavbar />
        <AdminContent />
        <AdminFooter />
      </div>
    </div>
  );
}

export default Admin;
