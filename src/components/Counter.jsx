import React, { useContext, useState } from "react";
import { StoreContext } from "../Store/StoreContextProvider";
import { FaPlus, FaRedo, FaMinus } from "react-icons/fa"; // Ensure you have react-icons installed

const Counter = () => {
  const { count, handleBtn } = useContext(StoreContext);
  const [isClicked, setIsClicked] = useState("");

  // Determine the text color based on the count value
  const countColor =
    count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-400";

  // Function to handle button clicks and set the clicked state
  const handleClick = (action) => {
    setIsClicked(action);
    handleBtn(action);

    // Reset the clicked state after a brief delay
    setTimeout(() => {
      setIsClicked("");
    }, 150); // Duration of the click effect
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full border border-gray-600">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 text-center">
          Counter
        </h1>

        <div className="flex justify-center mb-6">
          <span className={`text-6xl font-extrabold ${countColor}`}>
            {count}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => handleClick("increase")}
            className={`flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg border border-teal-500 transition-transform transform ${
              isClicked === "increase" ? "scale-95" : "hover:scale-105"
            }`}
          >
            <FaPlus className="mr-2" /> Increase
          </button>
          <button
            onClick={() => handleClick("reset")}
            className={`flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg border border-gray-700 transition-transform transform ${
              isClicked === "reset" ? "scale-95" : "hover:scale-105"
            }`}
          >
            <FaRedo className="mr-2" /> Reset
          </button>
          <button
            onClick={() => handleClick("decrease")}
            className={`flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-600 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg border border-red-500 transition-transform transform ${
              isClicked === "decrease" ? "scale-95" : "hover:scale-105"
            }`}
          >
            <FaMinus className="mr-2" /> Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
