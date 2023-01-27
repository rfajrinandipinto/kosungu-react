import React from "react";

const Alert = (props) => {
  const renderAlert = () => {
    switch (props.bg) {
      case "error":
        return (
          <div className={"flex justify-center bg-red-100 py-2 px-5 rounded text-red-700 border-red-400 border "}>
            <p>{props.message}</p>
          </div>
        );
      case "success":
        return (
          <div className={"flex justify-center bg-green-100 py-2 px-5 rounded text-green-700 border-green-500 border "}>
            <p>{props.message}</p>
          </div>
        );
    }
  };

  return <>{props.show ? <div className="absolute top-10 z-30 w-full flex justify-center">{renderAlert()}</div> : ""}</>;
};

export default Alert;
