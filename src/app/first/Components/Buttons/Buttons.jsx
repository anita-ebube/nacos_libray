"use client";
import { useState } from "react";

const ToggleButton = ({active, onToggle,children}) => {
  return (
    <button
      className={`${active ? "bg-[#518310] text-white" : "bg-transparent border border-[#518310]"} px-8 py-4 m-5 text-[1.5rem] rounded font-medium` }
      onClick={onToggle}
    >
      {children}
    </button>
  );
};

const Buttons = () => {
  const [firstSemester, setFirstSemester] = useState({
    toggle: false,
    active: true,
  });
  const [secondSemester, setSecondSemester] = useState({
    toggle: false,
    active: false,
  });

  const handleToggle = (type) => {
    if (type === "firstSemester") {
      setFirstSemester({
        toggle: true,
        active: !firstSemester.active,
      });
      setSecondSemester({
        toggle: false,
        active: false,
      });
      console.log('first')
    } else if (type === "secondSemester") {
      setSecondSemester({
        toggle: true,
        active: !secondSemester.active,
      });
      setFirstSemester({
        toggle: false,
        active: false,
      });
    }
  };

  return (
    <div >
      {/* <p className="bg-orange-600">
        {!firstSemester.active ? "Second Semester" : "First Semester"}
      </p> */}

      <ToggleButton
        className="bg-white p-5"
        onToggle={() => handleToggle("firstSemester")}
        active ={firstSemester.active}
      >
        1st Semester
      </ToggleButton>
      <ToggleButton
        className="bg-white p-5 "
        onToggle={() => handleToggle("secondSemester")}
        active={secondSemester.active}
      >
        2nd Semester
      </ToggleButton>
    </div>
  );
};

export default Buttons;
