import React from "react";
import { useState } from "react";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import AuthModal from "./AuthModal";
import Cookies from "js-cookie";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState("login");

  const toggleModal = () => {
    setModal(!modal);
    console.log("hai");
  };

  const toggleForm = () => {
    form == "register" ? setForm("login") : setForm("register");
  };

  return (
    <>
      <AuthModal modal={modal} toggleModal={toggleModal} form={form} toggleForm={toggleForm} />
      <div className="navbar-component border-b sticky top-0 z-10 bg-white">
        <div className="container mx-auto xl:px-16  lg:px-10 py-2">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="logo text-xl font-bold text-purple-600">KosUngu</p>
            </div>
            <div className=" flex items-center">
              <form action="" className="flex">
                <input type="text" className=" bg-gray-100 border rounded-l text-sm py-2 px-3 focus:border-purple-500 focus:outline-none" placeholder="Search" />
                <select className=" bg-gray-100 border text-sm py-2 px-3 focus:border-purple-500 focus:outline-none " placeholder="Type">
                  <option selected>All Type</option>
                  <option value="kos">Kos</option>
                  <option value="eksklusif">Kos Ekslusif</option>
                  <option value="kontrakan">Kontrakan</option>
                </select>
                <button type="submit" className=" bg-purple-600 text-white py-2 px-3 border rounded-r">
                  <BsSearch />
                </button>
              </form>
            </div>
            {Cookies.get("loggedIn") == "true" ? (
              <div className="flex gap-4">
                <div className="flex items-center border py-2 px-3 rounded gap-2 hover:text-purple-500 hover:shadow ">
                  <BsFillPersonFill className="text-gray-400 hover:text-purple-500" />
                  <p>{Cookies.get("nama")}</p>
                </div>
                <div
                  className="flex items-center border py-2 px-3 rounded gap-2 bg-red-500 text-white hover:shadow "
                  onClick={() => {
                    Cookies.remove("nama", "token");
                    Cookies.set("loggedIn", "false");
                    window.location.reload();
                  }}
                >
                  <p>Logout</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center border py-2 px-3 rounded gap-2 hover:text-purple-500 hover:shadow " onClick={() => toggleModal()}>
                <BsFillPersonFill className="text-gray-400 hover:text-purple-500" />
                <p>Sign in</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
