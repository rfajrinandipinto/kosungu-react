import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Alert from "./Alert";
import Loading from "./Loading";
import Cookies from "js-cookie";

const AuthModal = ({ modal, toggleModal, form, toggleForm }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertBg, setAlertBg] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    toggleModal();
  };

  const changeModal = () => {
    toggleForm();
  };

  const RegisterForm = () => {
    return (
      <div className={"authModal-component bg-black h-full w-screen top-0 z-20 absolute bg-opacity-60"}>
        <div className="flex items-center justify-center h-screen sticky top-0">
          <div className="modal bg-white w-2/4 rounded px-8 py-6">
            <a onClick={() => closeModal()}>
              <BsArrowLeft className="text-2xl font-semibold mb-2" />
            </a>

            <p className="text-xl font-semibold mb-5">Register User</p>

            <button className=" border flex gap-2 w-1/2 mx-auto p-2 justify-center rounded">
              <FcGoogle className="text-2xl" />
              <p className="text-lg font-semibold">Sign up with Google</p>
            </button>

            <p className="text-center text-lg my-2">atau</p>

            <form onSubmit={submitRegister}>
              <div className="flex gap-10">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Nama</p>
                  <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Masukkan Nama Anda" onChange={(e) => setNama(e.target.value)} required />
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Email</p>
                  <input type="email" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Masukkan Email Anda" onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1">Nomor Telepon</p>
                  <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Masukkan no telepon Anda" onChange={(e) => setTelp(e.target.value)} required />
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1 font-semibold">Password</p>
                  <input type="password" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="flex flex-col basis-1/2">
                  <p className="text-lg mb-1">Konfirmasi Password</p>
                  <input type="password" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Konfirmasi Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
              </div>

              <button className=" border flex gap-2 w-1/2 mx-auto p-2 justify-center mt-4 bg-purple-600 rounded text-white" type="submit">
                <p className="text-xl font-semibold ">Daftar</p>
              </button>
            </form>

            <div className="flex justify-center text-lg mt-3 font-semibold gap-2">
              <p>Sudah Punya akun ?</p>
              <p onClick={() => changeModal()} className="text-purple-600">
                Masuk Sekarang
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LoginForm = () => {
    return (
      <div className={"authModal-component bg-black h-full w-screen top-0 z-20 absolute bg-opacity-60"}>
        <div className="flex items-center justify-center h-screen sticky top-0">
          <div className="modal bg-white w-96 rounded px-8 py-6">
            <a onClick={() => toggleModal()}>
              <BsArrowLeft className="text-2xl font-semibold mb-2" />
            </a>

            <p className="text-xl font-semibold mb-5">Login User</p>

            <button className=" border flex gap-2 w-full p-2 justify-center rounded">
              <FcGoogle className="text-2xl" />
              <p className="text-lg font-semibold">Sign in with Google</p>
            </button>

            <p className="text-center text-lg my-2">atau</p>

            <form onSubmit={submitLogin}>
              <p className="text-lg mb-1">Email</p>
              <input type="text" className="w-full p-2 border-b outline-none text-lg mb-6" placeholder="Masukkan Email Anda" onChange={(e) => setEmail(e.target.value)} required />

              <p className="text-lg mb-1">Password</p>
              <input type="password" className="w-full p-2 border-b outline-none text-lg" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)} required />

              <button className=" border flex gap-2 w-full p-2 justify-center mt-10 bg-purple-600 rounded text-white" type="submit">
                <p className="text-xl font-semibold ">Login</p>
              </button>
            </form>

            <div className="flex justify-center text-lg mt-3 font-semibold gap-2">
              <p>Belum Punya akun ?</p>
              <a onClick={() => changeModal()} className="text-purple-600">
                Daftar Sekarang
              </a>
            </div>

            <div className="flex justify-center text-lg mt-3 font-semibold gap-2">
              <a href="" className="text-purple-600">
                Lupa Password ?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const submitRegister = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setAlertBg("error");
      setAlertMessage("Konfirmasi Password Salah");
      setAlertShow(true);
      const timer = setTimeout(() => setAlertShow(false), 3000);
      // () => clearTimeout(timer);
    } else {
      setLoading(true);
      const userData = {
        nama: nama,
        email: email,
        password: password,
        no_telp: telp,
        status: true,
      };

      axios
        .post(`http://localhost:3000/auth/register`, userData)
        .catch((err) => console.log(err))
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .then(() => {
          toggleModal();
          setLoading(false);
          setAlertBg("success");
          setAlertMessage("Register Berhasil Silahkan Login");
          setAlertShow(true);
          const timer = setTimeout(() => setAlertShow(false), 3000);
        });
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();

    // if (password != confirmPassword) {
    //   setAlertBg("error");
    //   setAlertMessage("Konfirmasi Password Salah");
    //   setAlertShow(true);
    //   const timer = setTimeout(() => setAlertShow(false), 3000);
    //   // () => clearTimeout(timer);
    // } else {
    //   setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post(`http://localhost:3000/auth/sign_in`, userData)
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res.data);
        Cookies.set("id", res.data._id);
        Cookies.set("token", res.data.token);
        Cookies.set("nama", res.data.nama);
        Cookies.set("loggedIn", true);
      })
      .then(() => {
        toggleModal();
        setLoading(false);
        setAlertBg("success");
        setAlertMessage("Berhasil Login");
        setAlertShow(true);
        const timer = setTimeout(() => setAlertShow(false), 3000);
      });
    // }
  };

  const RenderForm = () => {
    if (modal && form == "register") {
      return RegisterForm();
    } else if (modal && form == "login") {
      return LoginForm();
    } else {
    }
  };

  return (
    <>
      {RenderForm()}
      <Alert message={alertMessage} bg={alertBg} show={alertShow} />

      {loading ? <Loading /> : ""}
    </>
  );
};

export default AuthModal;
