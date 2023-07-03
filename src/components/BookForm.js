import React, { useContext } from "react";
import CheckIn from "./CheckIn";
import Checkout from "./CheckOut";
import AdultDrop from "./Adultdropdown";
import KidsDropdown from "./KidsDropdown";
import { RoomContext } from "../context/RoomContext";
const Bookform = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="h-[300px] w-full lg:h-[100px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <Checkout />
        </div>
        <div className="flex-1 border-r">
          <AdultDrop />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Check now
        </button>
      </div>
    </form>
  );
};
export default Bookform;
