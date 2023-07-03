import React, { useState } from "react";
import Datepicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
const CheckIn = () => {
  const [startDate, setStartdate] = useState(false);
  return (
    <div className="relative bg-white flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <Datepicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartdate(date)}
      />
    </div>
  );
};
export default CheckIn;
