import Buttons from "./Components/Buttons/Buttons";
import CoreCourses from "./Components/Courses/coreCourses";
import GeneralCoures from "./Components/Courses/generalCourses";
import Footer from "../Components/Footer/footer"
const dashboard = () => {
  return (
    <div className="bg-[#f3fff1]">
      <div className=" pt-[11rem] lg:ml-[220px] lg:mr-[50px] ml-[100px] mr-[30px] ">
        <Buttons />
        <CoreCourses />
        <GeneralCoures />
      </div>
      <div className="absolute w-full pt-[10rem]">
      <Footer />
      </div>
    </div>
    
  );
};

export default dashboard;
