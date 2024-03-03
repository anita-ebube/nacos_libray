import React from "react";
import Buttons from "./Components/Buttons/Buttons";
import CoreCourses from "./Components/Courses/coreCourses";
import GeneralCoures from "./Components/Courses/generalCourses";
const FirstYear = () => {
  return (
    <div className="bg-[#f3fff1]">
      <div className=" pt-[11rem] lg:ml-[230px]">
        <Buttons />
        <CoreCourses />
        <GeneralCoures />
      </div>
    </div>
  );
};

export default FirstYear;
